/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function PreOrderItemCard({navigation}: {navigation: any}) {
  return (
    <View style={styles.screenCardBackground}>
      <View style={styles.screenCardLine} />
      <View style={styles.screenCardImage}>
        <Image
          style={{
            width: 49.41,
            height: 80,
          }}
          source={require('../assets/images/pokemon_red.png')}
        />
      </View>
      <View style={{flex: 1}}>
        <Text style={{width: 165, fontSize: 20}} numberOfLines={1}>
          寶可夢 朱
        </Text>
        <View style={styles.screenCardText}>
          <Text style={{fontSize: 17}}>發行日：2023年6月3日</Text>
          <Text style={{fontSize: 17}}>共 30 人預訂</Text>
        </View>
      </View>
      <View style={{alignItems: 'flex-end', justifyContent: 'flex-start'}}>
        <TouchableOpacity onPress={() => navigation.navigate('PreOrder')}>
          <Icon name={'arrow-right'} size={25} color={'#E4E4E4'} solid />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenCardBackground: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 8,
    padding: 5,
    paddingHorizontal: 10,
    height: 90,
    borderRadius: 10,
    backgroundColor: '#rgba(255,255,255,0.25)',
  },
  screenCardLine: {
    position: 'absolute',
    bottom: 6,
    left: 50,
    width: 150,
    borderBottomWidth: 3,
    borderColor: '#7A04EB',
  },
  screenCardImage: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: 80,
  },
  screenCardText: {position: 'absolute', top: 30, width: 260, fontSize: 17},
});
