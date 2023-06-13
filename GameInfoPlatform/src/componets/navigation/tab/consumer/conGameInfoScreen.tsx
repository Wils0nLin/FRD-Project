import React from 'react';
import {Button, Image, ScrollView, Text, TextInput, View} from 'react-native';
import GameInfoPhotoSVG from '../../../../assets/consumerSVG/ConsumerGameInfoSVG';
import Icon from 'react-native-vector-icons/FontAwesome5';
import GameBoxSVG from '../../../../assets/consumerSVG/ConsumerGameBoxSVG';
import SearchLogoSVG from '../../../../assets/SearchLogoSVG';
import OctIcon from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ConGameInfoScreen = ({navigation}: any) => {
  const [value, onChangeText] = React.useState('');

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
          onChangeText={(text: React.SetStateAction<string>) =>
            onChangeText(text)
          }
          value={value}
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
        <View style={{borderColor: '#B7C1DE', borderWidth: 2, borderRadius: 5}}>
          <Text style={{color: 'white', padding: 5}}>標籤搜尋</Text>
        </View>
      </View>

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
              onPress={() => navigation.navigate('MerInfo')}>
              iMobile百盈電訊
            </Text>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <Entypo name={'location'} color={'white'} size={20} style={{}} />

              <Text style={{color: 'white', paddingLeft: 5}} numberOfLines={2}>
                好好吃飯粒輭硬適中
              </Text>
            </View>
            <View style={{paddingTop: 5, flexDirection: 'row'}}>
              <Entypo name={'phone'} size={20} color={'white'} />
              <Text style={{color: 'white', paddingLeft: 5}}>88888888</Text>
            </View>
          </View>
          <View
            style={{alignItems: 'flex-end', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <OctIcon name={'star-fill'} size={20} color={'#7A04EB'} />
              <OctIcon name={'star-fill'} size={20} color={'#7A04EB'} />
              <OctIcon name={'star-fill'} size={20} color={'#7A04EB'} />
              <OctIcon name={'star'} size={20} color={'#7A04EB'} />
              <OctIcon name={'star'} size={20} color={'#7A04EB'} />
              <AntDesign
                name={'shoppingcart'}
                size={30}
                color={'white'}
                style={{paddingLeft: 20}}
              />
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={{fontSize: 20, color: 'white'}}>HK$ 200.00</Text>
            </View>
          </View>
        </View>
      </View>
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
              onPress={() => navigation.navigate('MerInfo')}>
              iMobile百盈電訊
            </Text>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <Entypo name={'location'} color={'white'} size={20} style={{}} />

              <Text style={{color: 'white', paddingLeft: 5}} numberOfLines={2}>
                好好吃飯粒輭硬適中
              </Text>
            </View>
            <View style={{paddingTop: 5, flexDirection: 'row'}}>
              <Entypo name={'phone'} size={20} color={'white'} />
              <Text style={{color: 'white', paddingLeft: 5}}>88888888</Text>
            </View>
          </View>
          <View
            style={{alignItems: 'flex-end', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <OctIcon name={'star-fill'} size={20} color={'#7A04EB'} />
              <OctIcon name={'star-fill'} size={20} color={'#7A04EB'} />
              <OctIcon name={'star-fill'} size={20} color={'#7A04EB'} />
              <OctIcon name={'star'} size={20} color={'#7A04EB'} />
              <OctIcon name={'star'} size={20} color={'#7A04EB'} />
              <AntDesign
                name={'shoppingcart'}
                size={30}
                color={'white'}
                style={{paddingLeft: 20}}
              />
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={{fontSize: 20, color: 'white'}}>HK$ 200.00</Text>
            </View>
          </View>
        </View>
      </View>
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
              onPress={() => navigation.navigate('MerInfo')}>
              iMobile百盈電訊
            </Text>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <Entypo name={'location'} color={'white'} size={20} style={{}} />

              <Text style={{color: 'white', paddingLeft: 5}} numberOfLines={2}>
                好好吃飯粒輭硬適中
              </Text>
            </View>
            <View style={{paddingTop: 5, flexDirection: 'row'}}>
              <Entypo name={'phone'} size={20} color={'white'} />
              <Text style={{color: 'white', paddingLeft: 5}}>88888888</Text>
            </View>
          </View>
          <View
            style={{alignItems: 'flex-end', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <OctIcon name={'star-fill'} size={20} color={'#7A04EB'} />
              <OctIcon name={'star-fill'} size={20} color={'#7A04EB'} />
              <OctIcon name={'star-fill'} size={20} color={'#7A04EB'} />
              <OctIcon name={'star'} size={20} color={'#7A04EB'} />
              <OctIcon name={'star'} size={20} color={'#7A04EB'} />
              <AntDesign
                name={'shoppingcart'}
                size={30}
                color={'white'}
                style={{paddingLeft: 20}}
              />
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={{fontSize: 20, color: 'white'}}>HK$ 200.00</Text>
            </View>
          </View>
        </View>
      </View>
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
              onPress={() => navigation.navigate('MerInfo')}>
              iMobile百盈電訊
            </Text>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <Entypo name={'location'} color={'white'} size={20} style={{}} />

              <Text style={{color: 'white', paddingLeft: 5}} numberOfLines={2}>
                好好吃飯粒輭硬適中
              </Text>
            </View>
            <View style={{paddingTop: 5, flexDirection: 'row'}}>
              <Entypo name={'phone'} size={20} color={'white'} />
              <Text style={{color: 'white', paddingLeft: 5}}>88888888</Text>
            </View>
          </View>
          <View
            style={{alignItems: 'flex-end', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <OctIcon name={'star-fill'} size={20} color={'#7A04EB'} />
              <OctIcon name={'star-fill'} size={20} color={'#7A04EB'} />
              <OctIcon name={'star-fill'} size={20} color={'#7A04EB'} />
              <OctIcon name={'star'} size={20} color={'#7A04EB'} />
              <OctIcon name={'star'} size={20} color={'#7A04EB'} />
              <AntDesign
                name={'shoppingcart'}
                size={30}
                color={'white'}
                style={{paddingLeft: 20}}
              />
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={{fontSize: 20, color: 'white'}}>HK$ 200.00</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ConGameInfoScreen;
