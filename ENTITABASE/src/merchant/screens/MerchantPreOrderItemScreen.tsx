/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, ScrollView, StyleSheet, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native';

import SearchButtonModal from '../modals/MerchantSearchButtonModal';

import ForeheadView from '../../objects/MerchantForeheadView';
import PageView from '../../objects/PageView';
import PreOrderItemCard from '../../objects/MerchantPreOrderItemCard';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function PreOrderItemScreen({navigation}: {navigation: any}) {
  const [text, onChangeText] = React.useState('');
  return (
    <ScrollView
      style={{
        backgroundColor: '#2A2E32',
      }}>
      <SafeAreaView style={styles.safeArea}>
        {ForeheadView()}
        <View style={styles.pageTitle}>
          <Text style={{fontSize: 20}}>預購商品訂單</Text>
          <View style={styles.pageTitleLine} />
        </View>
        <View style={{width: 350}}>
          <View style={styles.inputBox}>
            <TextInput
              style={{fontSize: 15, padding: 0}}
              onChangeText={onChangeText}
              value={text}
              placeholder="請輸入商品名稱"
            />
            <Icon name={'search'} size={25} color={'#E4E4E4'} />
          </View>
        </View>
        <View style={styles.tagSearchBar}>
          <Text style={{fontSize: 17}}>共 200 件商品</Text>
          <SearchButtonModal />
        </View>
        <View style={{width: 350}}>
          {PreOrderItemCard({navigation})}
          {PreOrderItemCard({navigation})}
          {PreOrderItemCard({navigation})}
          {PreOrderItemCard({navigation})}
          {PreOrderItemCard({navigation})}
        </View>
        {PageView()}
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
  tabButtonBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    margin: 5,
    paddingLeft: 10,
    paddingRight: 10,
    width: 350,
  },
  tabButtonTrue: {
    alignItems: 'center',
    width: 40,
    borderBottomWidth: 3,
    borderColor: '#7A04EB',
  },
  tabButtonFalse: {
    alignItems: 'center',
    width: 40,
    borderBottomWidth: 3,
    borderColor: '#2A2E32',
  },
  tagSearchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    width: 335,
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
