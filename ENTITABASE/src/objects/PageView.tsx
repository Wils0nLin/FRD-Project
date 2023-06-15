/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function PageView() {
  return (
    <View style={styles.pageBox}>
      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{marginHorizontal: 5}}>上一頁</Text>
        <Icon name={'chevron-left'} size={25} color={'#E4E4E4'} />
      </TouchableOpacity>
      <Text style={{marginHorizontal: 10}}>1</Text>
      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name={'chevron-right'} size={25} color={'#E4E4E4'} />
        <Text style={{marginHorizontal: 5}}>下一頁</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  pageBox: {flexDirection: 'row', alignItems: 'center', marginBottom: 100},
});
