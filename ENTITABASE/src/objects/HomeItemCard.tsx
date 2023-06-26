/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
// import {} from "../assets"
import Ionicons from 'react-native-vector-icons/Ionicons';
import {IP_Of_LOCAL} from '../../IP';
import {useSelector} from 'react-redux';
import {IRootState} from '../app/store';

type cardInfo = {
  product_name: string;
  product_image: any;
  release_date: string;
  product_status: string;
  product_intro: string;
  id: number;
};

export default function HomeItemCard(props: cardInfo) {
  //use orange juice get user info
  const userId = useSelector((state: IRootState) => state.auth.userId);
  const [Name, setName] = useState('');

  //
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [wish, setWish] = useState(false);

  // ---------------------------------------------------------------------------------------------------------
  // fetch function
  //get user info

  const createWishlist = async () => {
    // const getUserData = async () => {
    //   const resp = await fetch(
    //     `http://${IP_Of_LOCAL}/consumer/userInfo/${userId}`,
    //     {
    //       method: 'GET',
    //       headers: {'Content-Type': 'application/json'},
    //     },
    //   );
    //   const data = await resp.json();
    //   // console.log('你的數據: ', data);

    //   setName(data[0].consumer_name);
    //   getConsumerId(data[0].id);
    // };

    //get consumer info
    const getConsumerId = async () => {
      const resp = await fetch(
        `http://${IP_Of_LOCAL}/consumer/consumerInfo/${userId}`,
        {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        },
      );
      const conData = await resp.json();

      postWishlist(conData[0].id);
    };

    // ---------------------------------------------------------------------------------------------------------
    //post to wishlist
    const postWishlist = async (consumerId: any) => {
      try {
        const resp = await fetch(
          `http://${IP_Of_LOCAL}/consumer/wishlist/upload`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              consumerId: consumerId,
              productId: props.id,
            }),
          },
        );
        return resp;

        // if (!resp.ok) {
        //   throw new Error('Failed to create wishlist');
        // }

        // deleteWishlist(wishlistId);

        console.log('Wishlist created successfully');
      } catch (error) {
        console.error('Error:', error);
      }
    };
    setWish(true);
    getConsumerId();
  };

  useEffect(() => {});

  // ---------------------------------------------------------------------------------------------------------
  // delete wishlist

  // const handlePress = async () => {};

  // const deleteWishlist = async (id: number) => {
  //   await fetch(`http://${IP_Of_LOCAL}/consumer/wishlist/delete/${id}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       setWish(false);
  //       console.log(data);
  //     });
  //   setWish(false);
  // };

  // ---------------------------------------------------------------------------------------------------------

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
        {/* try */}
        <TouchableOpacity onPress={createWishlist}>
          <Ionicons
            name={wish ? 'heart' : 'heart-outline'}
            size={40}
            color={'#7700A6'}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => setWish(!wish)}>
          <Ionicons
            name={wish ? 'heart' : 'heart-outline'}
            size={40}
            color={'#7700A6'}
          />
        </TouchableOpacity> */}
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
