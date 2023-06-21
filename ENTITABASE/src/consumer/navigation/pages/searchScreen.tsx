import * as React from 'react';
import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useState} from 'react';
import {tags} from 'react-native-svg/lib/typescript/xml';
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
  const [Texts, onChangeTexts] = React.useState(text);
  const [Tag, setTag] = useState<Array<any>>([]);
  const [Platform, setPlatform] = useState<Array<any>>([]);
  const [News, setNew] = useState();
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
  //未拆到個array object

  const unique = (value: any, index: number, array: Array<any>) => {
    return array.indexOf(value) === index;
  };

  //game types search
  const tagSearch = async () => {
    let tagArrPush: Array<any> = Tag.slice();
    if (tagArr == undefined) {
      console.log(tagArr);
      return;
    } else if (tagArr) {
      if (Array.isArray(tagArr)) {
        for (let i = 0; i <= tagArr.length; i++) {
          fetch(`http://192.168.160.77:3000/public/filter/tag/${tagArr[i]}`)
            .then(response => {
              return response.json();
            })
            .then(data => {
              console.log(data);
              data.map((items: products) => {
                tagArrPush.push(items);
                let result = tagArrPush.filter(unique);
                console.log(result);
                setTag(result);
              });
            });
        }
      } else if (Array.isArray(platformArr) == false) {
        console.log('notarray');
        fetch(`http://192.168.160.77:3000/public/filter/tag/${platformArr}`)
          .then(response => {
            return response.json();
          })
          .then(data => {
            console.log(data);

            data.map((items: products) => {
              tagArrPush.push(items);
              let result = tagArrPush.filter(unique);
              console.log(result);
              setTag(result);
            });
          });
      }
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
          fetch(
            `http://192.168.160.77:3000/public/filter/platform/${platformArr[i]}`,
          )
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
        fetch(
          `http://192.168.160.77:3000/public/filter/platform/${platformArr}`,
        )
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
  const textSearch = async () => {};

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
  useEffect(() => {
    platformSearch();
    tagSearch();
  }, []);

  return (
    <View>
      <View>
        {Platform.map((items: products) => (
          <Text style={{color: 'black'}}>{items.product_name}</Text>
        ))}
      </View>
      <View>
        {Tag.map((items: products) => (
          <Text style={{color: 'black'}}>{items.product_name}</Text>
        ))}
      </View>
    </View>
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
