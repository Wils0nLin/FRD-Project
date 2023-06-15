/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

import ItemReleaseModal from '../merchant/modals/ItemReleaseModal';

export default function ItemArriveCard() {
  return (
    <View style={styles.screenCardBackground}>
      <View style={styles.screenCardLine} />
      <View style={styles.screenCardImage}>
        <Image
          style={{
            width: 49.41,
            height: 80,
          }}
          source={require('../assets/images/pokemon_purple.png')}
        />
      </View>
      <View style={{flex: 1}}>
        <Text style={{width: 165, fontSize: 20}} numberOfLines={1}>
          寶可夢 紫
        </Text>
        <Text style={styles.screenCardText}>發行日：2023年6月3日</Text>
      </View>
      <View
        style={{
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}>
        <ItemReleaseModal />
        <Text style={{fontSize: 20}}>HK$ 200.00</Text>
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
