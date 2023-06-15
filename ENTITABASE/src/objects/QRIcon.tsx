/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import LogoIcon from 'react-native-vector-icons/MaterialCommunityIcons';

type QRIcon = {
  icon: string;
};

export default function QRIcon(props: QRIcon) {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.errorBackground} />
      <View style={styles.QRCodeBox}>
        <LogoIcon name={'scan-helper'} size={55} color={'#E4E4E4'} />
        <View style={{position: 'absolute', backgroundColor: '#202124'}}>
          <Icon name={props.icon} size={35} color={'#E4E4E4'} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  errorBackground: {
    position: 'absolute',
    bottom: 68,
    width: 1000,
    height: 32,
    backgroundColor: '#2A2E32',
  },
  QRCodeBox: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    width: 80,
    height: 80,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#7A04EB',
  },
});
