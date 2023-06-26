/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCom from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import HomePageSlider from '../../../../objects/HomePageSlider';
import GameTypeSlider from '../../../../objects/GameTypeSlider';
import HomeItemCard from '../../../../objects/HomeItemCard';
import {Switch} from 'react-native-gesture-handler';
import {IP_Of_LOCAL} from '../../../../../IP';

// ---------------------------------------------------------------------------------------------------------
//const variable
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
// ---------------------------------------------------------------------------------------------------------

export default function ConAppScreen({navigation}: any) {
  //try set render times

  //
  const [HotProduct, setHotProduct] = React.useState<Array<any>>([]);
  const [GetAllProduct, setGetAllProduct] = React.useState<Array<any>>([]);
  const [ComingProduct, setComingProduct] = React.useState<Array<any>>([]);
  const [count, setCount] = useState(0);

  const [select, setSelect] = useState('熱門遊戲');
  const [list, setList] = useState(HotProduct);

  const isSelect = (button: string) => {
    if (button === '熱門遊戲') {
      setList(HotProduct);
      setSelect('熱門遊戲');
    } else if (button === '即將發行') {
      setList(ComingProduct);
      setSelect('即將發行');
    }
    return [list, select];
  };

  const findSwitchGames = async () => {
    try {
      const process = await fetch(
        `http://${IP_Of_LOCAL}/public/filter/platform/?platformId=${1}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const result = await process.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  // ---------------------------------------------------------------------------------------------------------

  function comingProduct() {
    const currentDate = new Date();
    const comingProduct = GetAllProduct.filter(product => {
      const releaseDate = new Date(product.release_date);

      return releaseDate >= currentDate;
    });
    setComingProduct(comingProduct);
  }

  function getHot() {
    const hotProduct = GetAllProduct.filter(product => product.hot === true);

    setHotProduct(hotProduct);
  }

  // ---------------------------------------------------------------------------------------------------------
  useEffect(() => {
    const getAllProduct = async () => {
      const getAllProduct = await fetch(
        `http://${IP_Of_LOCAL}/consumer/product/allProduct`,
      );
      const productList = await getAllProduct.json();

      setGetAllProduct(productList);
      getHot();
      comingProduct();
    };
    getAllProduct();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // ---------------------------------------------------------------------------------------------------------
  return (
    <ScrollView
      style={{
        backgroundColor: '#2A2E32',
      }}>
      <SafeAreaView style={styles.safeArea}>
        <HomePageSlider />

        <View style={{flexDirection: 'row', width: 350, marginTop: 10}}>
          <TouchableOpacity
            style={styles.SwitchButton}
            onPress={() => {
              navigation.navigate('GameSearchScreen', {
                platformArr: ['Switch'],
              });
            }}>
            <MaterialCom name={'nintendo-switch'} size={25} color={'#E4E4E4'} />
            <Text style={{color: '#E4E4E4', fontSize: 12}}>SWITCH</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.PlayStatButton}
            onPress={() => {
              navigation.navigate('GameSearchScreen', {
                platformArr: ['PlayStation'],
              });
            }}>
            <Fontisto name={'playstation'} size={25} color={'#E4E4E4'} />
            <Text style={{color: '#E4E4E4', fontSize: 12}}>PLAYSTATION</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.XboxButton}
            onPress={() => {
              navigation.navigate('GameSearchScreen', {
                platformArr: ['XBOX'],
              });
            }}>
            <MaterialCom name={'microsoft-xbox'} size={25} color={'#E4E4E4'} />
            <Text style={{color: '#E4E4E4', fontSize: 12}}>XBOX</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.gameTypeBox}>
          <View style={{marginRight: 5}}>
            <FontAwesome5 name={'chevron-left'} size={25} color={'#E4E4E4'} />
          </View>
          <GameTypeSlider navigation={navigation} />
          <View style={{marginLeft: 5}}>
            <FontAwesome5 name={'chevron-right'} size={25} color={'#E4E4E4'} />
          </View>
        </View>
        <View style={styles.tabButtonBox}>
          <TouchableOpacity
            style={
              select === '熱門遊戲'
                ? styles.tabButtonTrue
                : styles.tabButtonFalse
            }
            onPress={() => {
              isSelect('熱門遊戲');
            }}>
            <Text style={{width: 80, fontSize: 20, color: '#E4E4E4'}}>
              熱門遊戲
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              select === '即將發行'
                ? styles.tabButtonTrue
                : styles.tabButtonFalse
            }
            onPress={() => {
              isSelect('即將發行');
            }}>
            <Text style={{width: 80, fontSize: 20, color: '#E4E4E4'}}>
              即將發行
            </Text>
          </TouchableOpacity>
          <View style={{alignItems: 'center', width: 40}}>
            <Text style={{width: 80, fontSize: 20}} />
          </View>
        </View>

        {/* try */}

        <View style={{width: 350, marginBottom: 100}}>
          {select === '熱門遊戲'
            ? HotProduct.map(items => (
                <HomeItemCard
                  key={items.id}
                  product_name={items.product_name}
                  product_image={
                    <Image
                      style={{width: 80, height: 80, borderRadius: 5}}
                      source={imageObject[items.product_image]}
                    />
                  }
                  release_date={items.release_date}
                  product_status={items.product_status}
                  product_intro={items.product_intro}
                  id={items.id}
                />
              ))
            : select === '即將發行'
            ? ComingProduct.map(items => (
                <HomeItemCard
                  key={items.id}
                  product_name={items.product_name}
                  product_image={
                    <Image
                      style={{width: 80, height: 80, borderRadius: 5}}
                      source={imageObject[items.product_image]}
                    />
                  }
                  release_date={items.release_date}
                  product_status={items.product_status}
                  product_intro={items.product_intro}
                  id={items.id}
                />
              ))
            : null}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameTypeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 330,
  },
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
  SwitchButton: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    width: 101,
    height: 55,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FF2A6D',
  },
  PlayStatButton: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    width: 101,
    height: 55,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#05D9E8',
  },
  XboxButton: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    width: 101,
    height: 55,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#65DC98',
  },
});
// const HotArr = [
//   {
//     image: (
//       <Image
//         style={{
//           width: 80,
//           height: 80,
//           borderRadius: 5,
//         }}
//         source={require('../../../../assets/images/splatoon3.png')}
//       />
//     ),
//     name: '斯普拉遁 3',
//     date: '2022年9月9日',
//     status: '現貨發售中',
//   },
//   {
//     image: (
//       <Image
//         style={{
//           width: 80,
//           height: 80,
//           borderRadius: 5,
//         }}
//         source={require('../../../../assets/images/Kirby.jpg')}
//       />
//     ),
//     name: '星之卡比 探索發現',
//     date: '2022年3月25日',
//     status: '現貨發售中',
//   },
//   {
//     image: (
//       <Image
//         style={{
//           width: 80,
//           height: 80,
//           borderRadius: 5,
//         }}
//         source={require('../../../../assets/images/arceus.jpg')}
//       />
//     ),
//     name: '寶可夢傳說 阿爾宙斯',
//     date: '2022年1月28日',
//     status: '現貨發售中',
//   },
// ];
// const ComingArr = [
//   {
//     image: (
//       <Image
//         style={{
//           width: 80,
//           height: 80,
//           borderRadius: 5,
//         }}
//         source={require('../../../../assets/images/pikmin4.jpg')}
//       />
//     ),
//     name: '皮克敏 4',
//     date: '2023年7月21日',
//     status: '預購進行中',
//   },
//   {
//     image: (
//       <Image
//         style={{
//           width: 80,
//           height: 80,
//           borderRadius: 5,
//         }}
//         source={require('../../../../assets/images/island.jpg')}
//       />
//     ),
//     name: '迪士尼奇幻島：米奇與好朋友大冒險',
//     date: '2023年7月28日',
//     status: '預購進行中',
//   },
//   {
//     image: (
//       <Image
//         style={{
//           width: 80,
//           height: 80,
//           borderRadius: 5,
//         }}
//         source={require('../../../../assets/images/zelda.jpg')}
//       />
//     ),
//     name: '薩爾達傳說 王國之淚',
//     date: '2023年5月12日',
//     status: '預購進行中',
//   },
// ];
// const getHot = async () => {
//   const getProduct = await fetch(
//     `http://${IP_Of_LOCAL}/consumer/product/hot`,
//   );
//   const hotList = await getProduct.json();

//   setHotList(hotList);
// };
