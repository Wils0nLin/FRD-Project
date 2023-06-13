import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {
  gameImgStyle,
  gameListAreaStyle,
} from '../tab/consumer/conWishListScreen';

const GameInfo = ({navigation, image, name, amount, status, logo}: any) => {
  return (
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
          <Image source={image} style={{width: 80, height: 80}}></Image>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('GameInfo')}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 25, color: 'white'}} numberOfLines={1}>
            {name}
          </Text>
          <Text style={{fontSize: 17, color: 'white'}}>{amount}</Text>
        </View>
      </TouchableOpacity>
      <View style={{alignItems: 'flex-end', justifyContent: 'space-between'}}>
        <TouchableOpacity>
          <View>{logo}</View>
        </TouchableOpacity>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={{fontSize: 20, color: 'white'}}>{status}</Text>
        </View>
      </View>
    </View>
  );
};

export default GameInfo;
