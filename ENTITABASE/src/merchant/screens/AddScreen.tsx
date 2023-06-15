/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, ScrollView, StyleSheet, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native';

import AddItemModal from '../modals/AddItemModal';

import ForeheadView from '../../objects/MerchantForeheadView';
import ItemAddCard from '../../objects/ItemAddCard';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function AddScreen({}) {
  const [text, onChangeText] = React.useState('');
  return (
    <ScrollView
      style={{
        backgroundColor: '#2A2E32',
      }}>
      <SafeAreaView style={styles.safeArea}>
        {ForeheadView()}
        <View style={styles.pageTitle}>
          <Text style={{fontSize: 20}}>增加商品</Text>
          <View style={styles.pageTitleLine} />
        </View>
        <View style={styles.subTitle}>
          <Icon name={'cube'} size={20} color={'#E4E4E4'} />
          <Text style={styles.subTitleText}>遊戲</Text>
        </View>
        <View style={{width: 350}}>
          <View style={styles.inputBox}>
            <TextInput
              style={{fontSize: 15, padding: 0}}
              onChangeText={onChangeText}
              value={text}
              placeholder="請輸入遊戲名稱"
            />
            <Icon name={'search'} size={25} color={'#E4E4E4'} />
          </View>
        </View>
        <View style={styles.subTitle}>
          <Icon name={'list'} size={20} color={'#E4E4E4'} />
          <Text style={{width: 80, marginLeft: 10, fontSize: 20}}>項目</Text>
        </View>
        <View>
          {ItemAddCard()}
          {ItemAddCard()}
          {ItemAddCard()}
        </View>
        <View style={{alignItems: 'center', width: 350}}>
          <AddItemModal />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageTitle: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 10,
    paddingLeft: 10,
    width: 350,
    borderLeftWidth: 3,
    borderColor: '#7D7D7D',
  },
  pageTitleLine: {
    position: 'absolute',
    bottom: -3,
    left: 60,
    width: 100,
    borderBottomWidth: 3,
    borderColor: '#7A04EB',
  },
  subTitle: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5,
    marginBottom: 0,
    marginTop: 10,
    paddingLeft: 10,
    width: 350,
  },
  subTitleText: {width: 80, marginLeft: 10, fontSize: 20},
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
    paddingLeft: 10,
    paddingRight: 10,
    height: 45,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
});
