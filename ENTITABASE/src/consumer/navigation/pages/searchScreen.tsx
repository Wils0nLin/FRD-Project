/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {useEffect} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import {} from "../../../assets/imageUpload/imageProduct/"
import {useState} from 'react';
import HomeItemCard from '../../../objects/HomeItemCard';
import {IP_Of_LOCAL} from '../../../../IP';

interface info {
  tagArr: Array<string> | string;
  platformArr: Array<string> | string;
  text: string;
  highest: boolean;
  newest: boolean;
}

interface Product {
  id: number;
  platform_id: number;
  product_image: string;
  product_name: string;
  product_status: boolean;
  product_intro: string;
  release_date: string;
  versions: Array<any>;
  view: number;
}

const imageObject = {
  'Switch_Sport.jpeg': require('../../../assets/imageUpload/imageProduct/Switch_Sport.jpeg'),
  'PKM朱紫.jpeg': require('../../../assets/imageUpload/imageProduct/PKM朱紫.jpeg'),
  '2K23.jpeg': require('../../../assets/imageUpload/imageProduct/2K23.jpeg'),
  'Call_Duty.jpeg': require('../../../assets/imageUpload/imageProduct/Call_Duty.jpeg'),
  'GTA5.jpeg': require('../../../assets/imageUpload/imageProduct/GTA5.jpeg'),
  'Spider_Man_Miles_ps5.jpeg': require('../../../assets/imageUpload/imageProduct/Spider_Man_Miles_ps5.jpeg'),
  'THE_KING_OF_FIGHTERS_XV_XBOX.jpeg': require('../../../assets/imageUpload/imageProduct/THE_KING_OF_FIGHTERS_XV_XBOX.jpeg'),
  '哈利波特_ps.jpeg': require('../../../assets/imageUpload/imageProduct/哈利波特_ps.jpeg'),
  '星之卡比.jpeg': require('../../../assets/imageUpload/imageProduct/星之卡比.jpeg'),
  '薩爾達傳說王國之淚.jpeg': require('../../../assets/imageUpload/imageProduct/薩爾達傳說王國之淚.jpeg'),
  'The_Last_of_Us_Part_I.jpeg': require('../../../assets/imageUpload/imageProduct/The_Last_of_Us_Part_I.jpeg'),
  '動物森友會.jpeg': require('../../../assets/imageUpload/imageProduct/動物森友會.jpeg'),
  // default: require('../../../assets/imageUpload/imageProduct/Call_Duty.jpeg'),
} as Record<string, any>;

export const GameSearchScreen = ({route, navigation}: any) => {
  const {tagArr, platformArr, text, highest, newest}: info = route.params;
  const [Texts, onChangeTexts] = React.useState(text);
  const [result, setResult] = useState<Product[]>([]);
  console.log(result);

  //未拆到個array object

  const unique = (arr: Array<any>, track = new Set()) =>
    arr.filter(({product_name}) =>
      track.has(product_name) ? false : track.add(product_name),
    );

  //game types search

  //search bar text

  useEffect(() => {
    const tagSearch = async () => {
      let tagArrPush: Array<any> = result.slice();

      if (Array.isArray(tagArr)) {
        for (let i = 0; i < tagArr.length; i++) {
          await fetch(`http://${IP_Of_LOCAL}/public/filter/tag/${tagArr[i]}`)
            .then(response => response.json())
            .then(data => {
              data.map((items: Product) => {
                tagArrPush.push(items);
              });
            });
        }
      }

      if (Array.isArray(platformArr)) {
        for (let i = 0; i < platformArr.length; i++) {
          await fetch(
            `http://${IP_Of_LOCAL}/public/filter/platform/${platformArr[i]}`,
          )
            .then(response => response.json())
            .then(data => {
              console.log(data);
              data[0].products.forEach((items: Product) => {
                tagArrPush.push(items);
              });
            });
        }
      }
      try {
        await fetch(`http:/${IP_Of_LOCAL}/public/filter/search/${Texts}`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            data.map((items: Product) => {
              tagArrPush.push(items);
            });
          });
      } catch (error) {
        console.log(error);
      }
      console.log(tagArrPush);
      setResult(unique(tagArrPush));
    };
    const clear = async () => {
      console.log('clean');
      setResult([]);
    };

    clear().finally(() => tagSearch());
    return () => {
      clear();
    };
  }, [Texts]);

  return (
    <ScrollView style={{backgroundColor: 'rgb(40,40,40)'}}>
      <View id="search">
        <View style={styles.pageTitle}>
          <Text style={{fontSize: 20, color: '#E4E4E4'}}>搜尋商品</Text>
          <View style={styles.pageTitleLine} />
        </View>
        <View style={{alignSelf: 'center'}}>
          <View style={styles.modalInput}>
            <TextInput
              style={{fontSize: 20, padding: 0, color: '#E4E4E4'}}
              onChangeText={value => {
                onChangeTexts(value);
                setResult([]);
              }}
              value={Texts}
              placeholder="請輸入關鍵字"
            />
            <Icon name={'search'} size={25} color={'#E4E4E4'} />
          </View>
        </View>
      </View>
      <View id="Result" style={{alignSelf: 'center'}}>
        {result.map((items: Product) => (
          <View style={{width: 350}}>
            <HomeItemCard
              product_name={items.product_name}
              product_image={
                <Image
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 5,
                  }}
                  source={imageObject[items.product_image]}
                />
              }
              release_date={items.release_date}
              product_status={'pre-order'}
              product_intro={items.product_intro}
              id={items.id}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#rgba(0,0,0,0.8)',
  },
  modalStyle: {
    backgroundColor: '#2A2E32',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 3,
    borderColor: '#ffffff',
    width: 350,
  },
  pageTitle: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 10,
    paddingLeft: 10,
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
  subTitle: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  subTitleText: {width: 80, marginLeft: 10, fontSize: 17, color: '#E4E4E4'},
  modalButtonBox: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginTop: 3,
    marginBottom: 10,
    marginHorizontal: 8,
    width: 320,
  },
  modalButtonFor1: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    marginVertical: 15,
    width: 320,
    height: 35,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#7A04EB',
  },
  modalButtonFor2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 155,
    height: 35,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
  modalButtonFor2Select: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 155,
    height: 35,
    backgroundColor: '#b57acf',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
  modalButtonFor3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 35,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
  modalButtonFor3Select: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 35,
    backgroundColor: '#b57acf',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
  buttonTextWithIcon: {fontSize: 15, marginLeft: 8, color: '#E4E4E4'},
  modalButtonSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 35,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FF2A6D',
  },
  modalButtonSwitchSelect: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 35,
    backgroundColor: '#FF2A6D',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FF2A6D',
  },
  modalButtonPSX: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 35,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#05D9E8',
  },
  modalButtonPSXSelect: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 35,
    backgroundColor: '#05D9E8',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#05D9E8',
  },
  modalButtonXBOX: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 35,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#65DC98',
  },
  modalButtonXBOXSelect: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 35,
    backgroundColor: '#65DC98',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#65DC98',
  },
  modalInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 3,
    marginBottom: 10,
    marginHorizontal: 8,
    paddingHorizontal: 10,
    width: 320,
    height: 45,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
});

//   let platformArrPush: Array<any> = Platform.slice();
//   if (platformArr == undefined) {
//     console.log(platformArr);
//     return;
//   } else if (platformArr) {
//     if (Array.isArray(platformArr)) {
//       for (let i = 0; i <= platformArr.length; i++) {
//         fetch(
//           `http://10.0.2.2/public/filter/platform/${platformArr[i]}`,
//         )
//           .then(response => {
//             return response.json();
//           })
//           .then(data => {
//             data[0].products.map((items: products) => {
//               platformArrPush.push(items);
//               let result = platformArrPush.filter(unique);
//               console.log(result);
//               setPlatform(result);
//             });
//           })
//           .then(async () => {
//             await console.log(Platform);
//           });
//       }
//     } else if (Array.isArray(platformArr) == false) {
//       console.log('notarray');
//       fetch(`http://10.0.2.2/public/filter/platform/${platformArr}`)
//         .then(response => {
//           return response.json();
//         })
//         .then(data => {
//           data[0].products.map((items: products) => {
//             platformArrPush.push(items);
//             let result = platformArrPush.filter(unique);
//             console.log(result);
//             setPlatform(result);
//           });
//         })
//         .then(async () => {
//           await console.log(Platform);
//         });
//     }
//   }
// };

// platformSearch();
