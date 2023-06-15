/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function ItemAddCard() {
  const [text, onChangeText] = React.useState('');
  return (
    <View style={{marginBottom: 10}}>
      <Text style={styles.itemName}>寶可夢 朱</Text>
      <View style={styles.itemInfoBox}>
        <View style={styles.itemInfoList}>
          <View style={styles.itemInfoIcon}>
            <Icon name={'dollar-sign'} size={20} color={'#E4E4E4'} />
          </View>
          <Text style={{fontSize: 20}}>目標售價：</Text>
        </View>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Text style={{marginRight: 10, fontSize: 20}}>HK$</Text>
          <View
            style={{
              width: 80,
              borderBottomWidth: 1,
              borderBottomColor: '#B7C1DE',
            }}>
            <TextInput
              style={{fontSize: 20, padding: 0}}
              onChangeText={onChangeText}
              value={text}
              placeholder="0.00"
            />
          </View>
        </View>
      </View>
      <View style={styles.itemInfoBox}>
        <View style={styles.itemInfoList}>
          <View style={styles.itemInfoIcon}>
            <Icon name={'box-open'} size={20} color={'#E4E4E4'} />
          </View>
          <Text style={{fontSize: 20}}>存貨情況：</Text>
        </View>
        <TouchableOpacity style={styles.itemSelectBox}>
          <Text style={{fontSize: 20}}>請選擇</Text>
          <Icon name={'angle-down'} size={20} color={'#E4E4E4'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemName: {fontSize: 20, borderBottomWidth: 3, borderBottomColor: '#7D7D7D'},
  itemInfoBox: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 300,
    marginBottom: 10,
  },
  itemInfoList: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 130,
  },
  itemInfoIcon: {width: 25, alignItems: 'center', justifyContent: 'center'},
  itemInfoPrice: {
    alignItems: 'flex-end',
    width: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#B7C1DE',
  },
  itemSelectBox: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    width: 140,
    backgroundColor: '#202124',
    borderWidth: 2,
    borderColor: '#B7C1DE',
    borderRadius: 10,
  },
});
