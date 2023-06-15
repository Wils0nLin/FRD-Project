/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

type NavButton = {
  icon: string;
  name: string;
};

export default function NavigatorButton(props: NavButton) {
  return (
    <View style={{alignItems: 'center', marginTop: 10}}>
      <Icon name={props.icon} size={30} color={'#E4E4E4'} solid />
      <Text style={{fontSize: 10}}>{props.name}</Text>
    </View>
  );
}
