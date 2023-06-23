/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import GameInfoPhotoSVG from '../../../../assets/svg/consumerSVG/ConsumerGameInfoSVG';
import Icon from 'react-native-vector-icons/FontAwesome5';
import GameBoxSVG from '../../../../assets/svg/consumerSVG/ConsumerGameBoxSVG';
import SearchLogoSVG from '../../../../assets/svg/SearchLogoSVG';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AddressModal from '../../../modals/AddressModal';
import {TouchableOpacity} from 'react-native';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {IRootState} from '../../../../app/store';
import {useNavigation} from '@react-navigation/native';
import {format, compareAsc, endOfDay} from 'date-fns';

const ConGameInfoScreen = ({route}: any) => {
  const navigation = useNavigation<any>();
  const {product_id}: any = route.params;
  console.log(product_id);
  const login = useSelector((state: IRootState) => state.auth.isAuth);
  const userId = useSelector((state: IRootState) => state.auth.userId);
  const [userState, setUserState] = useState<any>();
  const [version, setVersion] = useState<Array<any>>([]);
  const [selectedVersion, setSelectVersion] = useState(0);
  const [items, setItems] = useState<Array<any>>([]);
  const [text, onChangeText] = useState('');

  const handleOrder = async (id: number, amount: number) => {
    if (!login) {
      navigation.navigate('LogIn');
    } else {
      const form = {
        itemId: id,
        QRcode: userState[0].QRcode,
        amount: amount,
        order_status: false,
        payment: false,
        create_time: format(endOfDay(new Date()), 'yyyy-MM-dd'),
      };

      try {
        axios.post('http://13.213.207.204/consumer/order/create', {
          itemId: id,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  const selectVersion = async (version_id: number) => {
    let ItemsState: Array<any> = [];
    setSelectVersion(version_id);
    await fetch(`http://13.213.207.204/public/filter/Items/${version_id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        data.forEach((items: any) => {
          ItemsState.push(items);
        });
      });
    setItems(ItemsState);
  };
  useEffect(() => {
    const getVersion = async () => {
      let VersionState: Array<any> = [];

      await fetch(`http://13.213.207.204/public/filter/versions/${product_id}`)
        .then(response => response.json())
        .then(data => {
          data.forEach((items: any) => {
            VersionState.push(items);
          });
        });
      setVersion(VersionState);
    };
    const getuserData = async () => {
      let userState: Array<any> = [];
      await fetch(`http://13.213.207.204/consumer/userInfo/${userId}`)
        .then(response => response.json())
        .then(data => {
          console.log(data[0]);
          userState.push(data[0]);
        });

      setUserState(userState);
    };
    const getProductData = async (params: any) => {};
    getuserData();
    getVersion();
  }, []);
  return (
    <ScrollView style={{backgroundColor: '#202124', height: 600}}>
      <View style={{flexDirection: 'row'}}>
        <GameInfoPhotoSVG style={{marginLeft: 30}} />

        <View
          style={{
            width: 70,
            height: 18,
            borderWidth: 1,
            borderColor: 'white',
            backgroundColor: '#2A2E32',
            position: 'absolute',
            top: 14,
            left: 60,
            borderRadius: 5,
          }}>
          <Text style={{color: 'white', fontSize: 10, marginLeft: 15}}>
            現貨發售中
          </Text>
        </View>
        <GameBoxSVG style={{position: 'absolute', left: 53, top: 12}} />
      </View>
      <View
        style={{
          width: 130,
          height: 100,
          backgroundColor: '#2A2E32',
          marginLeft: 140,
          borderRadius: 5,
          borderWidth: 2,
          borderColor: '#B7C1DE',
          position: 'absolute',
          top: 70,
        }}>
        <Image
          style={{width: 100, height: 80, marginTop: 8, marginLeft: 13}}
          source={require('../../../../assets/images/Pokemon_purple_and_red.jpeg')}
        />
      </View>
      <View style={{marginLeft: 280, marginTop: 3}}>
        <Icon
          name="heart"
          color={'#7A04EB'}
          size={25}
          style={{marginLeft: 30, padding: 0, marginTop: 0, height: 25}}>
          {'\n '}
        </Icon>
        <Text
          style={{
            color: 'white',
            fontSize: 15,
            marginLeft: 12,
          }}>
          關注遊戲
        </Text>
      </View>

      <Text
        style={{
          color: 'white',
          fontSize: 15,
          textAlign: 'center',
          marginTop: 5,
        }}>
        寶可夢 朱/紫
      </Text>
      <View style={{flexDirection: 'row', marginLeft: 115, marginTop: 5}}>
        <View
          style={{
            borderColor: '#B7C1DE',
            borderWidth: 2,
            marginRight: 5,
            borderRadius: 5,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 13,
              textAlign: 'center',
              padding: 5,
            }}>
            角色扮演
          </Text>
        </View>
        <View
          style={{
            borderColor: '#B7C1DE',
            borderWidth: 2,
            marginRight: 5,
            borderRadius: 5,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 13,
              textAlign: 'center',
              padding: 5,
            }}>
            動作冒險
          </Text>
        </View>
        <View
          style={{
            borderColor: '#B7C1DE',
            borderWidth: 2,
            marginRight: 5,
            borderRadius: 5,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 13,
              textAlign: 'center',
              padding: 5,
            }}>
            育成
          </Text>
        </View>
      </View>

      <View style={{marginLeft: 40, marginTop: 10}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'white', marginRight: 40}}>商品資訊</Text>
          <Text style={{color: 'white'}}>商品簡介</Text>
        </View>
        <View
          style={{
            borderColor: '#7A04EB',
            borderWidth: 2,
            width: 30,
            height: 0,
            marginLeft: 12,
            marginTop: 3,
          }}
        />
      </View>
      <View
        style={{
          borderWidth: 2,
          borderColor: '#B7C1DE',
          width: 350,
          borderRadius: 5,
          marginLeft: 32,
          marginTop: 8,
          padding: 8,
        }}>
        <Text style={{color: 'white'}}>發行日期：2022年11月18日</Text>
        <Text style={{color: 'white'}}>遊戲平台：NINTENDO SWITCH</Text>
        <Text style={{color: 'white'}}>發行商：The Pokémon Company</Text>
        <Text style={{color: 'white'}}>銷售商：任天堂株式會社</Text>
      </View>
      <View style={{marginLeft: 30, marginTop: 20, flexDirection: 'row'}}>
        <View
          style={{
            borderColor: '#7D7D7D',
            borderWidth: 3,
            width: 5,
            height: 30,
            borderRadius: 3,
          }}
        />
        <Text style={{color: 'white', fontSize: 20, marginLeft: 10}}>
          包裝版本
        </Text>
      </View>
      <View>
        {version.map((items: any) => (
          <TouchableOpacity
            onPress={() => selectVersion(items.version_id)}
            style={
              selectedVersion == items.version_id
                ? styles.versionSelect
                : styles.version
            }>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                textAlign: 'center',
                padding: 5,
              }}>
              {items.version}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View
        style={{
          marginLeft: 30,
          marginTop: 20,
          flexDirection: 'row',
        }}>
        <View
          style={{
            borderColor: '#7D7D7D',
            borderWidth: 3,
            width: 5,
            height: 30,
            borderRadius: 3,
          }}
        />
        <Text style={{color: 'white', fontSize: 20, marginLeft: 10}}>
          商戶報價
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          borderColor: '#B7C1DE',
          borderWidth: 2,
          marginLeft: 32,
          width: 350,
          borderRadius: 5,
          marginTop: 10,
          height: 40,
        }}>
        <TextInput
          onChangeText={(newtext: React.SetStateAction<string>) =>
            onChangeText(newtext)
          }
          value={text}
        />

        <SearchLogoSVG
          width="80%"
          height="80%"
          fill="#E4E4E4"
          style={{marginLeft: 155, marginTop: 3}}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 35,
          paddingRight: 35,
          paddingTop: 10,
        }}>
        <Text style={{color: 'white', fontSize: 20}}>共200間商戶</Text>
        <View>
          {/* <Text style={{color: 'white', padding: 5}}>標籤搜尋</Text> */}
          <AddressModal />
        </View>
      </View>
      <ScrollView style={{marginBottom: 100}}>
        {items.map((items: any) => (
          <View style={{marginLeft: 20, marginRight: 20}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 8,
                padding: 5,
                paddingHorizontal: 10,
                height: 90,
                borderRadius: 10,
                backgroundColor: '#rgba(255,255,255,0.25)',
              }}>
              <View>
                <Text
                  style={{
                    width: 165,
                    fontSize: 20,
                    color: 'white',
                  }}
                  numberOfLines={1}
                  onPress={() => navigation.navigate('ShopInfo')}>
                  {items.merchant_name}
                </Text>
                <View style={{flexDirection: 'row', paddingTop: 5}}>
                  <Entypo
                    name={'location'}
                    color={'white'}
                    size={20}
                    style={{}}
                  />
                  <Text
                    style={{color: 'white', paddingLeft: 5}}
                    numberOfLines={2}>
                    {items.district}
                  </Text>
                </View>
                <View style={{flexDirection: 'row', paddingTop: 5}}>
                  <Entypo
                    name={'location'}
                    color={'white'}
                    size={20}
                    style={{}}
                  />
                  <Text
                    style={{color: 'white', paddingLeft: 5}}
                    numberOfLines={2}>
                    {items.address}
                  </Text>
                </View>
                <View style={{paddingTop: 5, flexDirection: 'row'}}>
                  <Entypo name={'phone'} size={20} color={'white'} />
                  <Text style={{color: 'white', paddingLeft: 5}}>
                    {items.merchant_phone}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  style={{flexDirection: 'row', paddingTop: 5}}
                  onPress={() => {
                    handleOrder(items.item_id, items.price);
                  }}>
                  <AntDesign
                    name={'shoppingcart'}
                    size={30}
                    color={'white'}
                    style={{paddingLeft: 20}}
                  />
                </TouchableOpacity>
                <View style={{alignItems: 'flex-end'}}>
                  <Text style={{fontSize: 20, color: 'white'}}>
                    HK${items.price}.00
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  version: {
    flexDirection: 'column',
    borderColor: '#B7C1DE',
    borderWidth: 2,
    marginLeft: 32,
    width: 350,
    borderRadius: 5,
    marginTop: 10,
  },
  versionSelect: {
    flexDirection: 'column',
    backgroundColor: '#b57acf',
    borderColor: '#B7C1DE',
    borderWidth: 2,
    marginLeft: 32,
    width: 350,
    borderRadius: 5,
    marginTop: 10,
  },
});
export default ConGameInfoScreen;
