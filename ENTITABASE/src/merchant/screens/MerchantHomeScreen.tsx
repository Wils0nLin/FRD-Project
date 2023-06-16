/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function MerchantHomeScreen({navigation}: {navigation: any}) {
  return (
    <ScrollView
      style={{
        backgroundColor: '#2A2E32',
      }}>
      <SafeAreaView style={styles.safeArea}>
        <View>
          <Image
            style={styles.foreheadBackground}
            source={require('../../assets/images/merchant_background.jpg')}
          />
        </View>
        <View style={styles.foreheadCheck}>
          <Icon name={'check'} size={20} color={'#000000'} />
        </View>
        <View style={styles.merchantLogoBorder}>
          <Image
            style={styles.merchantLogo}
            source={require('../../assets/images/merchant_logo.jpg')}
          />
        </View>
        <View style={{height: 40}} />
        <View style={styles.merchantInfo}>
          <Text style={{fontSize: 20}}>iMobile百盈電訊</Text>
          <Text>88888888</Text>
          <Text>九龍旺角山東街47-51號星際城市305號舖</Text>
        </View>
        <View style={styles.tabButtonBox}>
          <TouchableOpacity style={styles.tabButtonTrue}>
            <Text style={{width: 80, fontSize: 20}}>營業時間</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButtonFalse}>
            <Text style={{width: 80, fontSize: 20}}>商戶公告</Text>
          </TouchableOpacity>
          <View style={{alignItems: 'center', width: 40}}>
            <Text style={{width: 80, fontSize: 20}} />
          </View>
        </View>
        <View style={{width: 350}}>
          <Text style={styles.merchantAnnoText}>
            星期一：11:00 a.m. - 9:00 p.m.
          </Text>
        </View>
        <View style={styles.pageTitle}>
          <Text style={{fontSize: 20}}>商店管理</Text>
          <View style={styles.pageTitleLine} />
        </View>
        <View style={{flexDirection: 'row', width: 350}}>
          <TouchableOpacity
            style={styles.screenButtonFor3}
            onPress={() => navigation.navigate('MerchantPreOrderItem')}>
            <Icon name={'hourglass-half'} size={25} color={'#E4E4E4'} />
            <Text>查看訂單</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.screenButtonFor3}
            onPress={() => navigation.navigate('MerchantItem')}>
            <Icon name={'cubes'} size={25} color={'#E4E4E4'} />
            <Text>商品一覽</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.screenButtonFor3}
            onPress={() => navigation.navigate('MerchantAdd')}>
            <Icon name={'plus-square'} size={25} color={'#E4E4E4'} solid />
            <Text>商品上架</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', width: 350}}>
          <TouchableOpacity
            style={styles.screenButtonFor3}
            onPress={() => navigation.navigate('MerchantTrade')}>
            <Icon name={'hand-holding-usd'} size={25} color={'#E4E4E4'} />
            <Text>過往交易</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.screenButtonFor3}
            onPress={() => navigation.navigate('MerchantComment')}>
            <Icon name={'comment-alt'} size={25} color={'#E4E4E4'} solid />
            <Text>查看評論</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.screenButtonFor3}
            onPress={() => navigation.navigate('MerchantArrive')}>
            <Icon name={'check-square'} size={25} color={'#E4E4E4'} solid />
            <Text>商品到貨</Text>
          </TouchableOpacity>
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
  foreheadBackground: {
    width: 340,
    height: 170,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  foreheadCheck: {
    position: 'absolute',
    top: 10,
    left: 40,
    padding: 5,
    paddingLeft: 6,
    paddingRight: 6,
    backgroundColor: '#ffffff',
    borderRadius: 20,
  },
  merchantLogoBorder: {
    position: 'absolute',
    top: 85,
    backgroundColor: '#2A2E32',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#B7C1DE',
  },
  merchantLogo: {margin: 8, width: 100, height: 100, borderRadius: 5},
  merchantInfo: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  tabButtonBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    margin: 5,
    marginTop: 10,
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
  merchantAnnoText: {
    margin: 8,
    padding: 20,
    paddingTop: 10,
    height: 100,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#B7C1DE',
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
    marginBottom: 10,
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
  screenButtonFor3: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    width: 101,
    height: 55,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
});
