import React from 'react';
import {Text, View} from 'react-native';
import {consumerPageStyle} from './conAppScreen';

const ConWishListScreen = (navigation: any) => {
  return (
    <View style={consumerPageStyle.container}>
      <View
        style={{
          backgroundColor: 'red',
          width: 300,
          height: 100,
          marginLeft: 55,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        }}>
        <View style={{backgroundColor: 'blue', width: 100, height: 50}}></View>
      </View>
      <Text>願望清單</Text>
    </View>
  );
};

export default ConWishListScreen;
