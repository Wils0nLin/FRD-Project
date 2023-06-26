/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import Icon2 from 'react-native-vector-icons/Entypo';
// import {consumerPageStyle} from './conAppScreen';
import UserLogoSVG from '../../../../assets/svg/UserLogoSVG';
import WhiteLineSVG from '../../../../assets/svg/lineSVG/whiteLineSVG';

import Entypo from 'react-native-vector-icons/Entypo';
import {useSelector} from 'react-redux';
import {IRootState} from '../../../../app/store';
import {IP_Of_LOCAL} from '../../../../../IP';

const imageObject = {
  'Switch_Sport.jpeg': require('../../../../assets/imageUpload/imageProduct/Switch_Sport.jpeg'),
  'PKM朱紫.jpeg': require('../../../../assets/imageUpload/imageProduct/PKM朱紫.jpeg'),
  '2K23.jpeg': require('../../../../assets/imageUpload/imageProduct/2K23.jpeg'),
  'Call_Duty.jpeg': require('../../../../assets/imageUpload/imageProduct/Call_Duty.jpeg'),
  'GTA5.jpeg': require('../../../../assets/imageUpload/imageProduct/GTA5.jpeg'),
  'Spider_Man_Miles_ps5.jpeg': require('../../../../assets/imageUpload/imageProduct/Spider_Man_Miles_ps5.jpeg'),
  'THE_KING_OF_FIGHTERS_XV_XBOX.jpeg': require('../../../../assets/imageUpload/imageProduct/THE_KING_OF_FIGHTERS_XV_XBOX.jpeg'),
  '哈利波特_ps.jpeg': require('../../../../assets/imageUpload/imageProduct/哈利波特_ps.jpeg'),
  '星之卡比.jpeg': require('../../../../assets/imageUpload/imageProduct/星之卡比.jpeg'),
  '薩爾達傳說王國之淚.jpeg': require('../../../../assets/imageUpload/imageProduct/薩爾達傳說王國之淚.jpeg'),
  'The_Last_of_Us_Part_I.jpeg': require('../../../assets/imageUpload/imageProduct/The_Last_of_Us_Part_I.jpeg'),
  '動物森友會.jpeg': require('../../../assets/imageUpload/imageProduct/動物森友會.jpeg'),
  // default: require('../../../../assets/imageUpload/imageProduct/Call_Duty.jpeg'),
} as Record<string, any>;

const ConWishListScreen = ({navigation}: any) => {
  const userId = useSelector((state: IRootState) => state.auth.userId);
  const [username, setUserName] = useState();

  console.log('完:', userId);

  const [WishProduct, setWishProduct] = useState<Array<any>>([]);

  // ---------------------------------------------------------------------------------------------------------
  // delete function
  const deleteWishlist = async (id: any) => {
    console.log(id);
    await fetch(`http://${IP_Of_LOCAL}/consumer/wishlist/del/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        console.log('remove');
      })
      .catch(err => {
        console.error(err);
      });
    getData();
  };
  const getData = async () => {
    await fetch(`http://${IP_Of_LOCAL}/consumer/wishlist/get/${userId}`)
      .then(response => response.json())
      .then(data => {
        setWishProduct(data);
        console.log('hi:', data);
        setUserName(data[0].consumer_name);
      });
  };
  // ---------------------------------------------------------------------------------------------------------
  useEffect(() => {
    getData();
  }, []);
  console.log('yo: ', WishProduct);

  // ---------------------------------------------------------------------------------------------------------
  return (
    <ScrollView style={{backgroundColor: '#202124'}}>
      <View style={{marginBottom: 100}}>
        <View style={userInfoOutsideBoxStyle.container}>
          <View style={userInfoInsideBoxStyle.container}>
            <UserLogoSVG style={userIconStyle.container} />
            <Text style={userNameStyle.container}>{username}</Text>
          </View>
        </View>
        <View style={titleStyle.container}>
          <WhiteLineSVG style={WhiteLineStyle.container} />
          <Text style={titleName.container}>願望清單</Text>
        </View>

        {WishProduct.map(items => (
          <View style={gameListAreaStyle.container}>
            <View
              style={{
                position: 'absolute',
                bottom: 6,
                left: 50,
                width: 150,
                borderBottomWidth: 3,
                borderColor: '#7A04EB',
              }}
            />
            <TouchableOpacity>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  width: 50,
                }}>
                <Image
                  style={gameImgStyle.container}
                  source={imageObject[items.product_image]}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={{width: 272}}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'white',
                  }}
                  numberOfLines={1}>
                  {items.product_name}
                </Text>
                <Text style={{fontSize: 17, color: 'white'}}>
                  發行日期:
                  {items.release_date}
                </Text>
              </View>
            </TouchableOpacity>

            <View
              style={{
                alignItems: 'flex-end',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={() => {
                  deleteWishlist(items.wishlist_id);
                }}>
                <Entypo
                  name={'cross'}
                  size={35}
                  color={'#F24B6A'}
                  style={{position: 'absolute', right: 0}}
                />
              </TouchableOpacity>
              <View style={{alignItems: 'flex-end'}}></View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

// user info style
export const userInfoOutsideBoxStyle = StyleSheet.create({
  container: {
    backgroundColor: '#D9D9D9',
    width: 360,
    height: 65,
    alignSelf: 'center',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

export const userInfoInsideBoxStyle = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    height: '60%',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: -50,
  },
});

export const userIconStyle = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 20,
  },
});

export const userNameStyle = StyleSheet.create({
  container: {
    marginTop: 8,
    marginLeft: 10,
    fontSize: 25,
  },
});
//

// title style

const titleStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
export const WhiteLineStyle = StyleSheet.create({
  container: {marginLeft: 30, marginTop: 3},
});

export const titleName = StyleSheet.create({
  container: {
    color: '#FFFFFF',
    fontSize: 25,
    marginLeft: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
});
//

// game list
export const gameListAreaStyle = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 8,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#74787C',
  },
});

export const gameImgStyle = StyleSheet.create({
  container: {
    width: 49.41,
    height: 80,
  },
});

//
// Change page

export default ConWishListScreen;
