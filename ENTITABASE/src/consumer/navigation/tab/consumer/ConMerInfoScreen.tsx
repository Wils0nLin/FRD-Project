/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  View,
  Text,
  ScrollView,
  Image,
  Linking,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native';
import {StarRatingDisplay} from 'react-native-star-rating-widget';
import SearchButtonModal from '../../../../merchant/modals/MerchantSearchButtonModal';
import CommentModal from '../../../modals/Comment';
import ConShopItemCard from '../../../../objects/ConShopItemCard';
import CommentCard from '../../../../objects/CommentCard';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCom from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ConMerInfoScreen({route}: any) {
  const {merId}: any = route.params;
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('');
  const [district, setDistrict] = useState('');
  const [address, setAddress] = useState('');
  const [hour, setHour] = useState('');
  const [text, onChangeText] = useState('');
  const [select, setSelect] = useState('現貨商品');
  const [list, setList] = useState<Array<any>>([]);
  const [spotList, setSpotList] = useState<Array<any>>([]);
  const [preOrderList, setPreOrderList] = useState<Array<any>>([]);
  const [comment, setComment] = useState<Array<any>>([]);

  let star = 0;
  let spotItem: Array<any> = [];
  let preOrder: Array<any> = [];

  useEffect(() => {
    console.log(merId);
    const getData = async () => {
      await fetch(`http://192.168.160.142:3000/consumer/shopInfo/${merId}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setName(data[0].merchant_name);
          setPhone(data[0].merchant_phone);
          setArea(data[0].area);
          setDistrict(data[0].district);
          setAddress(data[0].address);
          setHour(data[0].opening_hour);
        });

      await fetch(`http://192.168.160.142:3000/merchant/allItem/${merId}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      })
        .then(response => response.json())
        .then(data => {
          for (let item of data) {
            if (
              item.stock_status === '預購中' ||
              item.stock_status === '等待到貨'
            ) {
              preOrder.push(item);
            } else {
              spotItem.push(item);
            }
          }
          setList(spotItem);
          setSpotList(spotItem);
          setPreOrderList(preOrder);
        });

      await fetch(`http://192.168.160.142:3000/merchant/comment/${merId}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      })
        .then(response => response.json())
        .then(data => {
          for (let item of data) {
            star += item.rating;
          }
          setRating(Math.round(star / data.length));
          setComment(data);
        });
    };

    getData();
  }, []);

  const isSelect = (button: string) => {
    if (button === '現貨商品') {
      setList(spotList);
      setSelect('現貨商品');
    } else if (button === '預購商品') {
      setList(preOrderList);
      setSelect('預購商品');
    } else if (button === '顧客反饋') {
      setList(comment);
      setSelect('顧客反饋');
    }
    return [list, select];
  };

  return (
    <ScrollView
      style={{
        backgroundColor: '#2A2E32',
      }}>
      <SafeAreaView style={styles.safeArea}>
        <View>
          <Image
            style={styles.foreheadBackground}
            source={require('../../../../assets/images/merchant_background.jpg')}
          />
        </View>
        <View style={styles.foreheadCheck}>
          <FontAwesome5 name={'check'} size={20} color={'#000000'} />
        </View>
        <View style={styles.merchantLogoBorder}>
          <Image
            style={styles.merchantLogo}
            source={require('../../../../assets/images/merchant_logo.jpg')}
          />
        </View>
        <TouchableOpacity
          style={styles.whatsappLogo}
          onPress={() => {
            Linking.openURL(`https://wa.me/852${phone}`);
          }}>
          <MaterialCom name={'whatsapp'} size={35} color={'#E4E4E4'} />
          <Text style={{color: '#E4E4E4', fontSize: 10}}>聯絡商戶</Text>
        </TouchableOpacity>
        <View style={{height: 40}} />
        <View style={styles.merchantInfo}>
          <Text style={{fontSize: 20, color: '#E4E4E4'}}>{name}</Text>
          <StarRatingDisplay rating={rating} starSize={20} color={'#defe47'} />
          <Text style={{color: '#E4E4E4'}}>{area + district + address}</Text>
        </View>

        <View style={styles.tabButtonBox}>
          <TouchableOpacity style={styles.tabButtonTrue}>
            <Text style={{width: 80, fontSize: 20, color: '#E4E4E4'}}>
              營業時間
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButtonFalse}>
            <Text style={{width: 80, fontSize: 20, color: '#E4E4E4'}}>
              商戶公告
            </Text>
          </TouchableOpacity>
          <View style={{alignItems: 'center', width: 40}}>
            <Text style={{width: 80, fontSize: 20}} />
          </View>
        </View>
        <View style={{width: 350}}>
          <Text style={styles.merchantAnnoText}>{hour}</Text>
        </View>
        <View style={styles.tabButtonBox}>
          <TouchableOpacity
            style={
              select === '現貨商品'
                ? styles.tabButtonTrue
                : styles.tabButtonFalse
            }
            onPress={() => {
              isSelect('現貨商品');
            }}>
            <Text style={{width: 80, fontSize: 20, color: '#E4E4E4'}}>
              現貨商品
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              select === '預購商品'
                ? styles.tabButtonTrue
                : styles.tabButtonFalse
            }
            onPress={() => {
              isSelect('預購商品');
            }}>
            <Text style={{width: 80, fontSize: 20, color: '#E4E4E4'}}>
              預購商品
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              select === '顧客反饋'
                ? styles.tabButtonTrue
                : styles.tabButtonFalse
            }
            onPress={() => {
              isSelect('顧客反饋');
            }}>
            <Text style={{width: 80, fontSize: 20, color: '#E4E4E4'}}>
              顧客反饋
            </Text>
          </TouchableOpacity>
        </View>
        {select === '顧客反饋' ? (
          <CommentModal />
        ) : (
          <View>
            <View style={{width: 350}}>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={onChangeText}
                  value={text}
                  placeholder="請輸入商品名稱"
                />
                <FontAwesome5 name={'search'} size={25} color={'#E4E4E4'} />
              </View>
            </View>
            <View style={styles.tagSearchBar}>
              <Text style={{fontSize: 17, color: '#E4E4E4'}}>
                共 {list.length} 件商品
              </Text>
              <SearchButtonModal />
            </View>
          </View>
        )}
        <View style={{width: 350, marginBottom: 100}}>
          {list.map(items =>
            select === '顧客反饋' ? (
              <CommentCard
                name={items.consumer_name}
                star={items.rating}
                comment={items.comment}
                date={items.create_time}
              />
            ) : (
              <ConShopItemCard
                id={items.id}
                name={items.product_name}
                version={items.version}
                platform={items.platform}
                status={items.stock_status}
                price={items.price}
              />
            ),
          )}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foreheadBackground: {
    width: 340,
    height: 170,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  foreheadCheck: {
    position: 'absolute',
    top: 10,
    left: 40,
    padding: 5,
    paddingLeft: 6,
    paddingRight: 6,
    backgroundColor: '#ffffff',
    borderRadius: 20,
  },
  merchantLogoBorder: {
    position: 'absolute',
    top: 85,
    backgroundColor: '#2A2E32',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#B7C1DE',
  },
  merchantLogo: {margin: 8, width: 100, height: 100, borderRadius: 5},
  merchantInfo: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  tabButtonBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    margin: 5,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    width: 350,
  },
  tabButtonTrue: {
    alignItems: 'center',
    width: 40,
    borderBottomWidth: 3,
    borderColor: '#7A04EB',
  },
  tabButtonFalse: {
    alignItems: 'center',
    width: 40,
    borderBottomWidth: 3,
    borderColor: '#2A2E32',
  },
  merchantAnnoText: {
    margin: 8,
    padding: 20,
    paddingTop: 10,
    height: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
  tagSearchBar: {
    marginLeft: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    width: 335,
  },
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
    paddingLeft: 10,
    paddingRight: 10,
    height: 45,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
  textInput: {fontSize: 17, padding: 0, color: '#E4E4E4', width: 250},
  whatsappLogo: {
    position: 'absolute',
    alignItems: 'center',
    top: 175,
    right: 35,
  },
});
