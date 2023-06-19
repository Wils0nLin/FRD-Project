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

import GameSearchModal from '../../modals/GameSearchModal';
import {
  gameImgStyle,
  gameListAreaStyle,
} from '../tab/consumer/conWishListScreen';
import axios from 'axios';
import {useState} from 'react';
import {Layout} from '@ui-kitten/components';
interface info {
  tagArr: Array<any>;
  platformArr: Array<string>;
  text: string;
  highest: boolean;
  newest: boolean;
}
export const GameSearchScreen = ({route, navigation}: any) => {
  const {tagArr, platformArr, text, highest, newest}: info = route.params;
  const [Texting, onChangeText] = React.useState(text);
  const [Tag, setTag] = useState<any>();
  const [Platform, setPlatform] = useState<Array<string>>([]);
  const [High, setHighest] = useState();
  const [News, setNew] = useState();
  const tagSearch = async () => {
    if (tagArr) {
      const tag = await fetch('');
      const tagResult = await tag.json();

      setTag(tagResult);
    } else {
      console.log('bye');
      return;
    }
  };

  const platformSearch = async () => {
    if (platformArr) {
      const clonedPlatformArr = platformArr.slice();
      let a = clonedPlatformArr.toString();
      console.log('Yo man: ', clonedPlatformArr);

      let clonedPlatformPush = Platform.slice();

      clonedPlatformArr.map(async items => {
        const platform = await fetch(
          `http://192.168.160.77:3000/public/filter/platform/${items}`,
        );
        const platformResult = await platform.json();
        console.log('Good fetch: ', platformResult);

        clonedPlatformPush.push(platformResult);
        setPlatform(clonedPlatformPush);
      });

      const clonedplatformRepeat = Platform.slice();
      let uniqueplatformArr = [...new Set(clonedplatformRepeat)];
    } else {
      return;
    }
  };

  const textSearch = async () => {
    if (text) {
      const tag = await fetch('');
      const tagResult = await tag.json();
      setTag(tagResult);
    } else {
      return;
    }
  };
  const hightestSearch = async () => {
    if (highest == null || highest == undefined) {
      return;
    } else if (highest!) {
      const tag = await fetch('');
      const tagResult = await tag.json();
      setTag(tagResult);
    } else if (highest) {
      const tag = await fetch('');
      const tagResult = await tag.json();
      setTag(tagResult);
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
    tagSearch();
    platformSearch();
    textSearch();
    hightestSearch();
    newSearch();
  }, [Texting]);
  // axios.get('http://192.168.160.142:3000/auth/login', form);
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
        <View></View>
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
