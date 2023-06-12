import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import WhiteLineSVG from '../../../../assets/lineSVG/whiteLineSVG';
import {
  WhiteLineStyle,
  gameImgStyle,
  gameListAreaStyle,
  titleName,
} from './conWishListScreen';
import {consumerPageStyle} from './conAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Entypo';

const ConsumerCartScreen = (navigation: any) => {
  return (
    <View style={consumerPageStyle.container}>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <WhiteLineSVG style={WhiteLineStyle.container} />
        <Text style={titleName.container}>購物車</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 5,
          marginLeft: 30,
        }}>
        <Icon name={'lightbulb'} size={20} color={'white'} solid />
        <Text style={pageContent.container}>
          {`請在付款前核對商品的數量及訂金金額。\n如有需要，可點擊該商品作修改或刪除。`}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 8,
          padding: 5,
          paddingHorizontal: 10,
          borderRadius: 10,
          backgroundColor: '#74787C',
          marginLeft: 30,
          marginRight: 30,
        }}>
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
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            width: 80,
          }}>
          <Image
            style={gameImgStyle.container}
            source={require('../../../../assets/images/pokemon_both.png')}
          />
        </View>
        <View style={{flex: 1}}>
          <View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={{fontSize: 25, marginRight: 80}} numberOfLines={1}>
                寶可夢 朱/紫
              </Text>
              <Icon2
                name={'cross'}
                size={30}
                color={'white'}
                // style={{marginLeft: 100}}
              />
            </View>
          </View>

          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 17}}>iMobile百盈電訊</Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginLeft: 100,
                  backgroundColor: '#2A2E32',
                  color: 'white',
                  borderRadius: 5,
                  textAlign: 'center',
                  width: 30,
                }}>
                1
              </Text>
              <Text style={{marginLeft: 10}}>件</Text>
              <Text
                style={{
                  marginLeft: 10,
                  backgroundColor: '#2A2E32',
                  color: 'white',
                  borderRadius: 5,
                  textAlign: 'center',
                }}>
                HK$ 1,200.00
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 8,
          padding: 5,
          paddingHorizontal: 10,
          borderRadius: 10,
          backgroundColor: '#74787C',
          marginLeft: 30,
          marginRight: 30,
        }}>
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
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            width: 80,
          }}>
          <Image
            style={gameImgStyle.container}
            source={require('../../../../assets/images/pokemon_both.png')}
          />
        </View>
        <View style={{flex: 1}}>
          <View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={{fontSize: 25, marginRight: 80}} numberOfLines={1}>
                寶可夢 朱/紫
              </Text>
              <Icon2
                name={'cross'}
                size={30}
                color={'white'}
                // style={{marginLeft: 100}}
              />
            </View>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 17}}>iMobile百盈電訊</Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginLeft: 100,
                  backgroundColor: '#2A2E32',
                  color: 'white',
                  borderRadius: 5,
                  textAlign: 'center',
                  width: 30,
                }}>
                1
              </Text>
              <Text style={{marginLeft: 10}}>件</Text>
              <Text
                style={{
                  marginLeft: 10,
                  backgroundColor: '#2A2E32',
                  color: 'white',
                  borderRadius: 5,
                  textAlign: 'center',
                }}>
                HK$ 1,200.00
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 8,
          padding: 5,
          paddingHorizontal: 10,
          borderRadius: 10,
          backgroundColor: '#74787C',
          marginLeft: 30,
          marginRight: 30,
        }}>
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

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            width: 80,
          }}>
          <Image
            style={gameImgStyle.container}
            source={require('../../../../assets/images/pokemon_both.png')}
          />
        </View>
        <View style={{flex: 1}}>
          <View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={{fontSize: 25, marginRight: 80}} numberOfLines={1}>
                寶可夢 朱/紫
              </Text>
              <Icon2
                name={'cross'}
                size={30}
                color={'white'}
                // style={{marginLeft: 100}}
              />
            </View>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 17}}>iMobile百盈電訊</Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginLeft: 100,
                  backgroundColor: '#2A2E32',
                  color: 'white',
                  borderRadius: 5,
                  textAlign: 'center',
                  width: 30,
                }}>
                1
              </Text>
              <Text style={{marginLeft: 10}}>件</Text>
              <Text
                style={{
                  marginLeft: 10,
                  backgroundColor: '#2A2E32',
                  color: 'white',
                  borderRadius: 5,
                  textAlign: 'center',
                }}>
                HK$ 1,200.00
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: 'white', fontSize: 25, marginLeft: 50}}>
          總訂金:
        </Text>
        <Text style={{color: 'white', fontSize: 25, marginLeft: 90}}>
          HK$ 3,600.00
        </Text>
      </View>
      <View
        style={{
          borderColor: '#7A04EB',
          borderWidth: 3,
          width: 350,
          marginTop: 25,
          paddingBottom: 7,
          marginLeft: 30,
          borderRadius: 5,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 25,
            textAlign: 'center',
          }}>
          確認商品
        </Text>
      </View>
    </View>
  );
};

const pageContent = StyleSheet.create({
  container: {
    fontSize: 15,
    color: 'white',
  },
});

export default ConsumerCartScreen;
