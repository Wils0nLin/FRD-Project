/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {useEffect} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {useState} from 'react';
import {Layout} from '@ui-kitten/components';
interface info {
  tagArr: Array<string> | string;
  platformArr: Array<string> | string;
  text: string;
  highest: boolean;
  newest: boolean;
}
interface products {
  id: number;
  platform_id: number;
  product_image: string;
  product_name: string;
  product_status: boolean;
  release_date: string;
  versions: Array<any>;
  view: number;
}
export const GameSearchScreen = ({route, navigation}: any) => {
  const {tagArr, platformArr, text, highest, newest}: info = route.params;
  const [Texting, onChangeText] = React.useState(text);
  const [Tag, setTag] = useState<any>();
  const [Platform, setPlatform] = useState<Array<any>>([]);
  //未拆到個array object
  const [High, setHighest] = useState<
    {
      original_price: number;
      version_image: string;
      end_date: string;
      stock_status: string;
      product_name: string;
      version: string;
    }[]
  >([]);
  const unique = (value: any, index: number, array: Array<any>) => {
    return array.indexOf(value) === index;
  };

  const [News, setNew] = useState();

  //game types search
  const tagSearch = async () => {
    if (tagArr) {
      const tagParams = tagArr
        .map(tag => `tag=${encodeURIComponent(tag)}`)
        .join('&');
      const tag = await fetch(
        'http://192.168.160.77:3000/public/filter/tag?${tagParams}',
      );
      const tagResult = await tag.json();
      console.log('Hi tag: ', tagResult);
      setTag(tagResult);
    } else {
      console.log('bye');
      return;
    }
  };

  //platform search
  const platformSearch = async () => {
    let platformArrPush: Array<any> = Platform.slice();
    if (platformArr == undefined) {
      console.log(platformArr);
      return;
    } else if (platformArr) {
      if (Array.isArray(platformArr)) {
        for (let i = 0; i <= platformArr.length; i++) {
          fetch(`http://10.0.2.2:3000/public/filter/platform/${platformArr[i]}`)
            .then(response => {
              return response.json();
            })
            .then(data => {
              data[0].products.map((items: products) => {
                platformArrPush.push(items);
                let result = platformArrPush.filter(unique);
                console.log(result);
                setPlatform(result);
              });
            })
            .then(async () => {
              await console.log(Platform);
            });
        }
      } else if (Array.isArray(platformArr) == false) {
        console.log('notarray');
        fetch(`http://10.0.2.2:3000/public/filter/platform/${platformArr}`)
          .then(response => {
            return response.json();
          })
          .then(data => {
            data[0].products.map((items: products) => {
              platformArrPush.push(items);
              let result = platformArrPush.filter(unique);
              console.log(result);
              setPlatform(result);
            });
          })
          .then(async () => {
            await console.log(Platform);
          });
      }
    }
  };

  //search bar text
  const textSearch = async () => {
    if (text) {
      const tag = await fetch('');
      const tagResult = await tag.json();
      setTag(tagResult);
    } else {
      return;
    }
  };
  //price
  const hightestSearch = async () => {
    if (highest == null || highest == undefined) {
      return;
    } else if (!highest) {
      const tag = await fetch(
        'http://192.168.160.77:3000/public/filter/version/priceasce',
      );
      const lowerPrice = await tag.json();
      console.log('lower price: ', lowerPrice);

      setHighest(lowerPrice);
    } else if (highest) {
      const tag = await fetch(
        'http://192.168.160.77:3000/public/filter/version/pricedesc',
      );

      const higherPrice = await tag.json();
      console.log('higher price: ', higherPrice);
      setHighest(higherPrice);
    }
  };

  const newSearch = async () => {
    if (newest == null || newest == undefined) {
      return;
    } else if (newest!) {
      const tag = await fetch('');
      const tagResult = await tag.json();
      setTag(tagResult);
    } else if (newest) {
      const tag = await fetch('');
      const tagResult = await tag.json();
      setTag(tagResult);
    }
  };
  const clear = () => {};
  useEffect(() => {
    platformSearch();
    clear();
  }, []);
  useEffect(() => {}, [Platform]);

  return (
    <ScrollView style={{backgroundColor: '#202124', height: 600}}>
      <View>
        <View style={pageTitle.container}>
          <Text style={{fontSize: 20, color: 'white'}}>遊戲搜尋</Text>
          <View
            style={{
              position: 'absolute',
              bottom: -5,
              left: 60,
              width: 100,
              borderBottomWidth: 3,
              borderColor: '#7A04EB',
            }}
          />
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
            onChangeText={(nextValue: React.SetStateAction<string>) =>
              onChangeText(nextValue)
            }
            value={Texting}
            style={{width: 310, color: '#e4e4e4'}}
          />

          <FontAwesome5
            name={'search'}
            size={25}
            color={'#E4E4E4'}
            style={{marginTop: 3}}
          />
        </View>

        {/* higher or lower price render */}
        <View>
          {/* {High.map((item, index) => {
            return (
              <View key={index}>
                <View>
                  <Text>{item.original_price}</Text>
                  <Text>{item.stock_status}</Text>
                  <Text>{item.version_image}</Text>
                  <Text>{item.end_date}</Text>
                  <Text>{item.product_name}</Text>
                </View>
              </View>
            );
          })} */}
        </View>
        <View>
          {Platform.map((items: products) => (
            <Text style={{color: 'white'}}>{items.product_name}</Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const pageTitle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 30,
    paddingLeft: 10,
    borderLeftWidth: 3,
    borderColor: '#7D7D7D',
  },
});
