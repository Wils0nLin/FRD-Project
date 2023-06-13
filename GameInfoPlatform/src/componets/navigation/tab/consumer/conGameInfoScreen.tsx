import React from 'react';
import {Button, Image, ScrollView, Text, View} from 'react-native';
import GameInfoPhotoSVG from '../../../../assets/consumerSVG/ConsumerGameInfoSVG';
import Icon from 'react-native-vector-icons/FontAwesome5';
import GameBoxSVG from '../../../../assets/consumerSVG/ConsumerGameBoxSVG';

const ConGameInfoScreen = (navigation: any) => {
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
          source={require('../../../../assets/images/Pokemon_purple_and_red.jpeg')}></Image>
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
          }}></View>
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
          }}></View>
        <Text style={{color: 'white', fontSize: 20, marginLeft: 10}}>
          包裝版本
        </Text>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'column',
            borderColor: '#B7C1DE',
            borderWidth: 2,
            marginLeft: 32,
            width: 350,
            borderRadius: 5,
            marginTop: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              textAlign: 'center',
              padding: 5,
            }}>
            寶可夢 朱
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            borderColor: '#B7C1DE',
            borderWidth: 2,
            marginLeft: 32,
            width: 350,
            borderRadius: 5,
            marginTop: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              textAlign: 'center',
              padding: 5,
            }}>
            寶可夢 紫
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            borderColor: '#B7C1DE',
            borderWidth: 2,
            marginLeft: 32,
            width: 350,
            borderRadius: 5,
            marginTop: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              textAlign: 'center',
              padding: 5,
            }}>
            寶可夢 朱/紫 雙包裝
          </Text>
        </View>
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
          }}></View>
        <Text style={{color: 'white', fontSize: 20, marginLeft: 10}}>
          商戶報價
        </Text>
      </View>
    </ScrollView>
  );
};

export default ConGameInfoScreen;
