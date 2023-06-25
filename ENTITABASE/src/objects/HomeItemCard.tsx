/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
// import {} from "../assets"
import Ionicons from 'react-native-vector-icons/Ionicons';

type cardInfo = {
  product_name: string;
  product_image: any;
  release_date: string;
  product_status: string;
  product_intro: string;
  id: number;
};

export default function HomeItemCard(props: cardInfo) {
  console.log('Yo props: ', props);

  const navigation = useNavigation<StackNavigationProp<any>>();
  const [wish, setWish] = useState(false);

  return (
    <TouchableOpacity
      style={styles.screenCardBackground}
      onPress={() => navigation.navigate('GameInfo', {product_id: props.id})}>
      <View style={styles.screenCardLine} />
      <View style={styles.screenCardImage}>{props.product_image}</View>
      <View style={{flex: 1, marginLeft: 10}}>
        <Text
          style={{width: 165, fontSize: 18, color: '#E4E4E4'}}
          numberOfLines={1}>
          {props.product_name}
        </Text>
        <Text style={styles.screenCardText}>發行日：{props.release_date}</Text>
      </View>
      <View
        style={{
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => setWish(!wish)}>
          <Ionicons
            name={wish ? 'heart' : 'heart-outline'}
            size={40}
            color={'#7700A6'}
          />
        </TouchableOpacity>
        <Text style={styles.screenCardState}>{props.product_status}</Text>
      </View>
    </TouchableOpacity>
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
  screenCardText: {
    position: 'absolute',
    top: 25,
    width: 260,
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
