/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {StarRatingDisplay} from 'react-native-star-rating-widget';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

type cardInfo = {
  name: string;
  star: number;
  comment: string;
  date: Date;
};

export default function CommentCard(props: cardInfo) {
  return (
    <View style={styles.screenCardBackground}>
      <View style={styles.screenCardLine} />
      <View style={styles.screenCardImage}>
        <FontAwesome5 name={'comment-alt'} size={25} color={'#E4E4E4'} solid />
      </View>
      <View style={{flex: 1, marginLeft: 10}}>
        <Text
          style={{width: 165, fontSize: 18, color: '#E4E4E4'}}
          numberOfLines={1}>
          {props.name}
        </Text>
        <Text style={styles.screenCardText1}>{props.comment}</Text>
      </View>
      <View
        style={{
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}>
        <StarRatingDisplay
          rating={props.star}
          starSize={20}
          color={'#defe47'}
        />
        <Text style={{fontSize: 15}}>{('' + props.date).slice(0, 10)}</Text>
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
    justifyContent: 'flex-start',
    position: 'relative',
    width: 30,
    paddingTop: 10,
  },
  screenCardText1: {
    position: 'absolute',
    top: 25,
    left: 10,
    width: 260,
    fontSize: 15,
    color: '#E4E4E4',
  },
});
