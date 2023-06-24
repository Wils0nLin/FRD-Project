/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

type cardInfo = {
  name: string;
  amount: number;
  date: string;
};

export default function PreOrderRecordCard(props: cardInfo) {
  return (
    <View style={styles.screenCardBackground}>
      <View style={styles.screenCardLine} />
      <View style={styles.screenCardImage}>
        <FontAwesome5
          name={'hourglass-half'}
          size={25}
          color={'#E4E4E4'}
          solid
        />
      </View>
      <View style={{flex: 1, marginLeft: 10}}>
        <Text
          style={{width: 165, fontSize: 18, color: '#E4E4E4'}}
          numberOfLines={1}>
          {props.name}
        </Text>
        <View style={styles.screenLine1}>
          <View style={{width: 15, alignItems: 'center'}}>
            <FontAwesome5 name={'cube'} size={15} color={'#E4E4E4'} solid />
          </View>
          <Text style={styles.screenCardText1}>共 1 件商品</Text>
        </View>
        <View style={styles.screenLine2}>
          <View style={{width: 15, alignItems: 'center'}}>
            <FontAwesome5
              name={'dollar-sign'}
              size={15}
              color={'#E4E4E4'}
              solid
            />
          </View>
          <Text style={styles.screenCardText2}>
            已收訂金 HK$ {props.amount}.00
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 12}}>{('' + props.date).slice(0, 10)}</Text>
        <View style={{height: 1}} />
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
  screenLine1: {
    position: 'absolute',
    top: 30,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  screenLine2: {
    position: 'absolute',
    top: 50,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  screenCardText1: {
    marginLeft: 10,
    width: 260,
    fontSize: 13,
    color: '#E4E4E4',
  },
  screenCardText2: {
    marginLeft: 10,
    width: 260,
    fontSize: 13,
    color: '#E4E4E4',
  },
});
