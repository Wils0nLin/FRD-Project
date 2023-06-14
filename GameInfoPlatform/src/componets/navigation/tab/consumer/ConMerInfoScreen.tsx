import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native';

import SearchLogoSVG from '../../../../assets/SearchLogoSVG';
import {gameImgStyle, gameListAreaStyle} from './conWishListScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import OctIcon from 'react-native-vector-icons/Octicons';
import {Button, Layout} from '@ui-kitten/components';
import {useState} from 'react';
import CommentModal from '../../../modals/Comment';

export default function ConMerInfoScreen({navigation}: {navigation: any}) {
  const [search, onChangeText] = React.useState('');
  const [comment, onChangeComment] = React.useState('撰寫商戶評論');
  const [select, setSelect] = useState('現貨商品');
  const [list, setList] = useState(() => InStock);
  function InStock() {
    return (
      <Layout>
        <View
          id="search"
          style={{
            flexDirection: 'row',
            borderColor: '#B7C1DE',
            borderWidth: 2,
            marginLeft: 30,
            width: 340,
            borderRadius: 5,
            marginTop: 10,
            height: 40,
          }}>
          <TextInput
            onChangeText={(text: React.SetStateAction<string>) =>
              onChangeText(text)
            }
            value={search}
            style={{width: 300}}
          />
          <SearchLogoSVG
            width="10%"
            height="80%"
            fill="#E4E4E4"
            style={{
              marginTop: 3,
            }}
          />
        </View>

        <View id="items" style={gameListAreaStyle.container}>
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
                width: 80,
              }}>
              <Image
                style={gameImgStyle.container}
                source={require('../../../../assets/images/zelda.jpg')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 25, color: 'white'}} numberOfLines={1}>
                薩爾達 王國之淚
              </Text>
              <Text style={{fontSize: 17, color: 'white'}}>大量現貨</Text>
            </View>
          </TouchableOpacity>

          <View
            style={{
              alignItems: 'flex-end',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity></TouchableOpacity>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={{fontSize: 20, color: 'white'}}>HK$ 200.00</Text>
            </View>
          </View>
        </View>
      </Layout>
    );
  }

  function PreOrder() {
    return (
      <Layout>
        <View
          style={{
            flexDirection: 'row',
            borderColor: '#B7C1DE',
            borderWidth: 2,
            marginLeft: 30,
            width: 340,
            borderRadius: 5,
            marginTop: 10,
            height: 40,
          }}>
          <TextInput
            onChangeText={(text: React.SetStateAction<string>) =>
              onChangeText(text)
            }
            value={search}
            style={{width: 300}}
          />
          <SearchLogoSVG
            width="10%"
            height="80%"
            fill="#E4E4E4"
            style={{
              marginTop: 3,
            }}
          />
        </View>

        <View
          id="total-amount"
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 10,
          }}>
          <View style={{flexDirection: 'row', marginLeft: 30}}>
            <Text style={{color: 'white', fontSize: 20}}>共</Text>
            <Text style={{color: 'white', fontSize: 20}}>200</Text>
            <Text style={{color: 'white', fontSize: 20}}>件商品</Text>
          </View>

          <View
            style={{
              borderColor: '#B7C1DE',
              borderWidth: 2,
              borderRadius: 5,
              marginRight: 30,
            }}>
            <Text style={{color: 'white', padding: 5}}>標籤搜尋</Text>
          </View>
        </View>

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
                width: 80,
              }}>
              <Image
                style={gameImgStyle.container}
                source={require('../../../../assets/images/zelda.jpg')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 25, color: 'white'}} numberOfLines={1}>
                薩爾達 王國之淚
              </Text>
              <Text style={{fontSize: 17, color: 'white'}}>
                2023年6月3日截訂
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              alignItems: 'flex-end',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity></TouchableOpacity>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={{fontSize: 20, color: 'white'}}>HK$ 200.00</Text>
            </View>
          </View>
        </View>
      </Layout>
    );
  }
  function FeedBack() {
    return (
      <Layout>
        <View
          style={{
            width: 400,
            height: 50,
            alignItems: 'center',
          }}>
          <CommentModal />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '80%',
            paddingTop: 10,
          }}>
          <View style={{flexDirection: 'row', marginLeft: 20}}>
            <Text style={{color: 'white', fontSize: 20}}>共</Text>
            <Text style={{color: 'white', fontSize: 20}}>200</Text>
            <Text style={{color: 'white', fontSize: 20}}>則評論</Text>
          </View>
        </View>
        <View>
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
              <View style={{flexDirection: 'row'}}>
                <Entypo name={'chat'} size={25} color={'white'} />
                <Text
                  style={{
                    width: 235,
                    fontSize: 20,
                    color: 'white',
                    paddingLeft: 5,
                  }}
                  numberOfLines={1}>
                  CONSUMER NAME
                </Text>
              </View>

              <View style={{flexDirection: 'row', paddingTop: 5}}>
                <Text
                  style={{color: 'white', paddingLeft: 5}}
                  numberOfLines={2}>
                  好好吃飯粒輭硬適中
                </Text>
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
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <Text style={{fontSize: 15, color: 'white'}}>2023年6月3日</Text>
              </View>
            </View>
          </View>
        </View>
      </Layout>
    );
  }

  const isSelect = (button: string) => {
    if (button == '現貨商品') {
      setList(() => InStock);
      setSelect('現貨商品');
    } else if (button == '預購商品') {
      setList(() => PreOrder);
      setSelect('預購商品');
    } else if (button == '顧客反饋') {
      setList(() => FeedBack);
      setSelect('顧客反饋');
    }
    return [list, select];
  };

  return (
    <ScrollView
      style={{
        backgroundColor: '#2A2E32',
      }}>
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <Image
            style={{
              width: 340,
              height: 170,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
            source={require('../../../../assets/images/merchant_background.jpg')}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            top: 85,
            backgroundColor: '#2A2E32',
            borderRadius: 10,
            borderWidth: 3,
            borderColor: '#B7C1DE',
          }}>
          <Image
            style={{
              margin: 8,
              width: 100,
              height: 100,
              borderRadius: 5,
            }}
            source={require('../../../../assets/images/merchant_logo.jpg')}
          />
        </View>
        <View
          style={{
            height: 40,
          }}
        />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 20, color: 'white'}}>iMobile百盈電訊</Text>
          <Text style={{color: 'white'}}>88888888</Text>
          <Text style={{color: 'white'}}>
            九龍旺角山東街47-51號星際城市305號舖
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
            margin: 5,
            marginTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
            width: 350,
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              width: 40,
              borderBottomWidth: 3,
              borderColor: '#7A04EB',
            }}>
            <Text style={{width: 80, fontSize: 20, color: 'white'}}>
              營業時間
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              width: 40,
              borderBottomWidth: 3,
              borderColor: '#2A2E32',
            }}>
            <Text style={{width: 80, fontSize: 20, color: 'white'}}>
              商戶公告
            </Text>
          </TouchableOpacity>
          <View
            style={{
              alignItems: 'center',
              width: 40,
            }}>
            <Text style={{width: 80, fontSize: 20}} />
          </View>
        </View>
        <View style={{width: 350}}>
          <Text
            style={{
              margin: 8,
              padding: 20,
              paddingTop: 10,
              height: 100,
              borderRadius: 10,
              borderWidth: 3,
              borderColor: '#B7C1DE',
              color: 'white',
            }}>
            星期一：11:00 a.m. - 9:00 p.m.
          </Text>
        </View>

        <Layout id="selectButton" style={styles.row}>
          <Button
            style={select == '現貨商品' ? styles.buttonSelect : styles.button}
            appearance="ghost"
            status="control"
            onPress={() => isSelect('現貨商品')}>
            現貨商品
          </Button>
          <Button
            style={select == '預購商品' ? styles.buttonSelect : styles.button}
            appearance="ghost"
            status="control"
            onPress={() => isSelect('預購商品')}>
            預購商品
          </Button>
          <Button
            style={select == '顧客反饋' ? styles.buttonSelect : styles.button}
            appearance="ghost"
            status="control"
            onPress={() => isSelect('顧客反饋')}>
            顧客反饋
          </Button>
        </Layout>
        <Layout style={styles.layout}>{list()}</Layout>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  layout: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '90%',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#2A2E32',
  },
  button: {
    marginHorizontal: 1,
  },
  buttonSelect: {
    marginHorizontal: 1,
    borderWidth: 0,
    borderColor: 'rgb(121,35,231)',
    borderBottomColor: 'rgb(121,35,231)',
    borderBottomWidth: 5,
  },
});
