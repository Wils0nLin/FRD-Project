/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
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

export const GameSearchScreen = ({navigation}: any) => {
  const [text, onChangeText] = React.useState('');

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
            onChangeText={(text: React.SetStateAction<string>) =>
              onChangeText(text)
            }
            value={text}
            style={{width: 310}}
          />

          <FontAwesome5
            name={'search'}
            size={25}
            color={'#E4E4E4'}
            style={{marginTop: 3}}
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
          <Text style={{color: 'white', fontSize: 20}}>共200種遊戲</Text>
          <View>
            <GameSearchModal />
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
          <TouchableOpacity onPress={() => navigation.navigate('GameInfo')}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                width: 80,
              }}>
              <Image
                style={gameImgStyle.container}
                source={require('../../../assets/images/zelda.jpg')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('GameInfo')}>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 25, color: 'white'}} numberOfLines={1}>
                薩爾達 王國之淚
              </Text>
              <Text style={{fontSize: 17, color: 'white'}}>大量現貨</Text>
            </View>
          </TouchableOpacity>
          <View
            style={{alignItems: 'flex-end', justifyContent: 'space-between'}}>
            <TouchableOpacity>
              <FontAwesome5 name={'heart'} size={35} color={'#7A04EB'} />
            </TouchableOpacity>
            <View style={{alignItems: 'flex-end'}}>
              {/* <Text>HK$ 400.00</Text> */}
              <Text style={{fontSize: 20, color: 'white'}}>現貨發售中</Text>
            </View>
          </View>
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
