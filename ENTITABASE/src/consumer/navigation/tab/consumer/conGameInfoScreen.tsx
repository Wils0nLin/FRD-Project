/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import AddressModal from '../../../modals/AddressModal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductItemCard from '../../../../objects/ProductItemCard';
import VersionItemCard from '../../../../objects/VersionItemCard';
import {IP_Of_LOCAL} from '../../../../../IP';

export default function ConGameInfoScreen({route}: any) {
  const navigation = useNavigation<any>();
  const {product_id}: any = route.params;
  const [text, onChangeText] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [platform, setPlatform] = useState('');
  const [type, setType] = useState<Array<any>>([]);
  const [version, setVersion] = useState<Array<any>>([]);
  const [selected, setSelected] = useState(false);
  const [list, setList] = useState<Array<any>>([]);
  const [allItem, setAllItem] = useState<Array<any>>([]);

  const getVersionItem = async (id: number) => {
    await fetch(`http://${IP_Of_LOCAL}/public/versionItem/${id}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
      .then(response => response.json())
      .then(data => {
        setList(data);
      });
  };

  useEffect(() => {
    const getData = async () => {
      await fetch(`http://${IP_Of_LOCAL}/public/productInfo/${product_id}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      })
        .then(response => response.json())
        .then(data => {
          setName(data[0].product_name);
          setDate(data[0].release_date);
          setPlatform(data[0].platform);
          setType(data);
        });

      await fetch(`http://${IP_Of_LOCAL}/public/productItem/${product_id}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setAllItem(data);
          setList(data);
        });

      await fetch(`http://${IP_Of_LOCAL}/public/productVersion/${product_id}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      })
        .then(response => response.json())
        .then(data => {
          setVersion(data);
        });
    };

    getData();
  }, []);

  return (
    <ScrollView
      style={{
        backgroundColor: '#2A2E32',
      }}>
      <SafeAreaView style={styles.safeArea}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={styles.foreheadBackground}
            source={require('../../../../assets/images/test2-removebg-preview.png')}
          />
          <View style={styles.miniSlogan1}>
            <Text style={styles.miniSlogan}>現貨發售中</Text>
            <View style={styles.foreheadCheck}>
              <Ionicons
                name={'game-controller-outline'}
                size={23}
                color={'#000000'}
              />
            </View>
          </View>
        </View>
        <View style={styles.merchantLogoBorder}>
          <Image
            style={styles.merchantLogo}
            source={require('../../../../assets/images/merchant_logo.jpg')}
          />
        </View>
        <TouchableOpacity style={styles.heartLogo}>
          <AntDesign name={'hearto'} size={35} color={'#7A04EB'} />
          <Text style={{color: '#E4E4E4', fontSize: 10}}>關注遊戲</Text>
        </TouchableOpacity>
        <View style={{height: 40}} />
        <View style={styles.merchantInfo}>
          <Text style={{fontSize: 20, color: '#E4E4E4'}}>{name}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            width: 250,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          {type.map(items => (
            <Text style={styles.miniSloganText}>{items.tag}</Text>
          ))}
        </View>
        <View style={styles.tabButtonBox}>
          <TouchableOpacity style={styles.tabButtonTrue}>
            <Text style={{width: 80, fontSize: 20, color: '#E4E4E4'}}>
              商品資訊
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButtonFalse}>
            <Text style={{width: 80, fontSize: 20, color: '#E4E4E4'}}>
              商品簡介
            </Text>
          </TouchableOpacity>
          <View style={{alignItems: 'center', width: 40}}>
            <Text style={{width: 80, fontSize: 20}} />
          </View>
        </View>
        <View style={{width: 350}}>
          <View style={styles.merchantAnno}>
            <Text style={styles.merchantAnnoText}>發行日期：{date}</Text>
            <Text style={styles.merchantAnnoText}>遊玩平台：{platform}</Text>
          </View>
        </View>
        <View style={styles.pageTitle}>
          <Text style={{fontSize: 20, color: '#E4E4E4'}}>包裝版本</Text>
          <View style={styles.pageTitleLine} />
        </View>
        <View style={{alignItems: 'center', width: 350}}>
          <TouchableOpacity
            style={styles.screenButtonFor1}
            onPress={() => {
              setList(allItem);
              setSelected(false);
            }}>
            <Text style={{fontSize: 17, color: '#E4E4E4'}}>全部商品</Text>
          </TouchableOpacity>
          {version.map(items => (
            <TouchableOpacity
              style={styles.screenButtonFor1}
              onPress={() => {
                getVersionItem(items.id);
                setSelected(true);
              }}>
              <Text style={{fontSize: 17, color: '#E4E4E4'}}>
                {items.version}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.pageTitle}>
          <Text style={{fontSize: 20, color: '#E4E4E4'}}>商戶報價</Text>
          <View style={styles.pageTitleLine} />
        </View>
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
          <AddressModal />
        </View>
        <View style={{width: 350, marginBottom: 100}}>
          {list.map(items =>
            selected ? (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ShopInfo', {
                    merId: items.merchant_id,
                  })
                }>
                <VersionItemCard
                  id={items.id}
                  merId={items.merchant_id}
                  merName={items.merchant_name}
                  district={items.district}
                  area={items.area}
                  address={items.address}
                  status={items.stock_status}
                  price={items.price}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ShopInfo', {
                    merId: items.merchant_id,
                  })
                }>
                <ProductItemCard
                  id={items.id}
                  merId={items.merchant_id}
                  merName={items.merchant_name}
                  proName={items.product_name}
                  version={items.version}
                  status={items.stock_status}
                  price={items.price}
                />
              </TouchableOpacity>
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
    width: 385,
    height: 170,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  foreheadCheck: {
    position: 'absolute',
    left: -15,
    padding: 3,
    paddingLeft: 4,
    paddingRight: 4,
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
  merchantAnno: {
    margin: 8,
    marginBottom: 0,
    padding: 20,
    paddingTop: 10,
    height: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
  merchantAnnoText: {color: '#E4E4E4'},
  tagSearchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    width: 335,
  },
  pageTitle: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
    paddingLeft: 10,
    width: 350,
    borderLeftWidth: 3,
    borderColor: '#7D7D7D',
  },
  pageTitleLine: {
    position: 'absolute',
    bottom: -3,
    left: 60,
    width: 100,
    borderBottomWidth: 3,
    borderColor: '#7A04EB',
  },
  miniSlogan: {
    color: '#E4E4E4',
    justifyContent: 'center',
    paddingTop: 3,
    paddingRight: 5,
    paddingLeft: 20,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
  miniSloganText: {
    color: '#E4E4E4',
    justifyContent: 'center',
    marginHorizontal: 3,
    marginBottom: 6,
    paddingTop: 3,
    paddingRight: 5,
    paddingLeft: 10,
    backgroundColor: '#202124',
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
  miniSlogan1: {
    height: 30,
    justifyContent: 'center',
    position: 'absolute',
    top: 10,
    left: 53,
  },
  heartLogo: {
    position: 'absolute',
    alignItems: 'center',
    top: 175,
    right: 35,
  },
  screenButtonFor1: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    marginBottom: 0,
    width: 335,
    height: 35,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#7A04EB',
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
});
