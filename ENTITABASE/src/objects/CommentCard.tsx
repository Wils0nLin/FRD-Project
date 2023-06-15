/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import OctIcon from 'react-native-vector-icons/Octicons';

export default function CommentCard() {
  return (
    <View style={styles.screenCardBackground}>
      <View style={styles.screenCardLine} />
      <View style={styles.screenCardIcon}>
        <Icon name={'comment-alt'} size={25} color={'#E4E4E4'} solid />
      </View>
      <View>
        <Text style={{width: 165, fontSize: 20}} numberOfLines={1}>
          KA HEUNG LIN
        </Text>
        <Text style={styles.commentText} numberOfLines={2}>
          好好吃飯粒輭硬適中，落鑊炒幾分鐘就食得，很方便!
        </Text>
      </View>
      <View style={{alignItems: 'flex-end', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', paddingTop: 5}}>
          <OctIcon name={'star-fill'} size={20} color={'#7A04EB'} />
          <OctIcon name={'star-fill'} size={20} color={'#7A04EB'} />
          <OctIcon name={'star-fill'} size={20} color={'#7A04EB'} />
          <OctIcon name={'star'} size={20} color={'#7A04EB'} />
          <OctIcon name={'star'} size={20} color={'#7A04EB'} />
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text>2023年6月3日</Text>
        </View>
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
  screenCardIcon: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    width: 30,
    paddingTop: 5,
  },
  commentText: {
    position: 'absolute',
    top: 30,
    left: 5,
    width: 260,
    fontSize: 15,
  },
});
