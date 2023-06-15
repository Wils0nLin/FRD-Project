/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import {View, Text, Image, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function ForeheadView() {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Image
        style={styles.foreheadBackground}
        source={require('../assets/images/merchant_background.jpg')}
      />
      <View style={styles.nameBox}>
        <Icon name={'store-alt'} size={20} color={'#000000'} />
        <Text style={styles.nameText}>iMobile百盈電訊</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  foreheadBackground: {
    width: 340,
    height: 60,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  nameBox: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    width: 300,
    padding: 3,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  nameText: {marginLeft: 10, fontSize: 20, color: '#000000'},
});
