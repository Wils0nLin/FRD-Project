/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

import ItemUpdateModal from '../merchant/modals/ItemUpdateModal';

type cardInfo = {
  id: number;
  name: string;
  platform: string;
  version: string;
  status: string;
  price: string;
  date: Date;
};

export default function MerchantItemCard(props: cardInfo) {
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
      <View style={{flex: 1, marginLeft: 10}}>
        <Text
          style={{width: 165, fontSize: 18, color: '#E4E4E4'}}
          numberOfLines={1}>
          {props.name + ' ' + props.version}
        </Text>
        <Text style={styles.screenCardText1}>遊玩平台：{props.platform}</Text>
        <Text style={styles.screenCardText2}>{props.status}</Text>
      </View>
      <View
        style={{
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}>
        <ItemUpdateModal
          id={props.id}
          name={props.name}
          version={props.version}
          status={props.status}
          price={props.price}
          date={props.date}
        />
        <Text style={{fontSize: 20}}>HK$ {props.price}.00</Text>
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
  screenCardText1: {
    position: 'absolute',
    top: 25,
    width: 260,
    fontSize: 13,
    color: '#E4E4E4',
  },
  screenCardText2: {
    position: 'absolute',
    top: 45,
    fontSize: 13,
    color: '#E4E4E4',
    backgroundColor: '#202124',
    padding: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
});
