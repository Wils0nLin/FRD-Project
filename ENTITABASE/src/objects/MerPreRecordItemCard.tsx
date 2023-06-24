/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

type cardInfo = {
  id: number;
  name: string;
  date: Date;
  order: number;
};

export default function MerPreRecordItemCard(props: cardInfo) {
  const navigation = useNavigation<StackNavigationProp<any>>();
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
          {props.name}
        </Text>
        <Text style={styles.screenCardText1}>發行日：{'' + props.date}</Text>
        <Text style={styles.screenCardText2}>共 {props.order} 人預訂</Text>
      </View>
      <View
        style={{
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('MerchantPreOrder', {itemId: props.id})
          }>
          <FontAwesome5 name={'arrow-right'} size={25} color={'#E4E4E4'} />
        </TouchableOpacity>
        <View style={{height: 5}} />
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
  },
  screenCardState: {
    fontSize: 15,
    backgroundColor: '#202124',
    padding: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
    color: '#E4E4E4',
  },
});
