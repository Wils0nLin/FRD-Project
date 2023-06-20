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

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function MerchantCenterScreen() {
  return (
    <ScrollView
      style={{
        backgroundColor: '#2A2E32',
      }}>
      <SafeAreaView style={styles.safeArea}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={styles.foreheadBackground}
            source={require('../../assets/images/merchant_background.jpg')}
          />
          <View style={styles.backgroundCover} />
          <View style={{alignItems: 'center', position: 'absolute', top: 30}}>
            <Text style={{color: '#E4E4E4', fontSize: 25, fontWeight: 'bold'}}>
              嶄新銷售方案
            </Text>
            <Text style={{color: '#E4E4E4', fontSize: 17, fontWeight: 'bold'}}>
              零 售 商 機 一 網 打 盡
            </Text>
          </View>
          <View style={styles.miniSlogan1}>
            <Text style={styles.miniSlogan}>多面向推廣</Text>
            <View style={styles.foreheadCheck}>
              <FontAwesome5 name={'check'} size={20} color={'#000000'} />
            </View>
          </View>
          <View style={styles.miniSlogan2}>
            <Text style={styles.miniSlogan}>創建網店</Text>
            <View style={styles.foreheadCheck}>
              <FontAwesome5 name={'check'} size={20} color={'#000000'} />
            </View>
          </View>
          <View style={styles.miniSlogan3}>
            <Text style={styles.miniSlogan}>網購平台營銷</Text>
            <View style={styles.foreheadCheck}>
              <FontAwesome5 name={'check'} size={20} color={'#000000'} />
            </View>
          </View>
        </View>
        <View style={styles.pageTitle}>
          <Text style={{color: '#E4E4E4', fontSize: 20}}>多面向推廣</Text>
          <View style={styles.pageTitleLine} />
        </View>
        <View style={{width: 350, marginBottom: 20}}>
          <Text style={{color: '#E4E4E4', width: 320, marginLeft: 15}}>
            於格價平台ENTITÀBASE刊登你的產品及店鋪資訊，讓過百萬ENTI用戶搜尋和認識你，帶動店鋪人流。
          </Text>
        </View>
        <View style={styles.pageTitle}>
          <Text style={{color: '#E4E4E4', fontSize: 20}}>創建網店</Text>
          <View style={styles.pageTitleLine} />
        </View>
        <View style={{width: 350, marginBottom: 20}}>
          <Text style={{color: '#E4E4E4', width: 320, marginLeft: 15}}>
            ENTITÀBASE網店工具功能齊備，自動連結支援多種付款方式。$0月費及上架費，讓你零成本建立你的網上銷售王國。
          </Text>
        </View>
        <View style={styles.pageTitle}>
          <Text style={{color: '#E4E4E4', fontSize: 20}}>網購平台營銷</Text>
          <View style={styles.pageTitleLine} />
        </View>
        <View style={{width: 350, marginBottom: 20}}>
          <Text style={{color: '#E4E4E4', width: 320, marginLeft: 15}}>
            於ENTITÀBASE網購平台重點推廣，結合ENTITÀBASE自家宣傳平台和合作夥伴贊助，與你攜手推谷銷量。
          </Text>
        </View>
        <Image
          style={styles.brandBackground}
          source={require('../../assets/images/brand.png')}
        />
        <View style={styles.bigSlogan}>
          <Text style={{color: '#E4E4E4', fontSize: 20}}>
            全港超過10,000個品牌及商戶
          </Text>
          <Text style={{color: '#E4E4E4'}}>皆未有使用ENTITÀBASE</Text>
        </View>
        <View style={{alignItems: 'center', width: 350}}>
          <TouchableOpacity style={styles.screenButtonFor1}>
            <Text style={{fontSize: 17, color: '#E4E4E4'}}>立即體驗</Text>
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
  backgroundCover: {
    position: 'absolute',
    width: 340,
    height: 170,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#rgba(0,0,0,0.3)',
  },
  foreheadBackground: {
    width: 340,
    height: 170,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  brandBackground: {
    width: 335,
    height: 180,
    borderRadius: 10,
  },
  foreheadCheck: {
    position: 'absolute',
    left: -15,
    padding: 5,
    paddingLeft: 6,
    paddingRight: 6,
    backgroundColor: '#ffffff',
    borderRadius: 20,
  },
  miniSlogan: {
    color: '#E4E4E4',
    justifyContent: 'center',
    paddingTop: 3,
    paddingRight: 5,
    paddingLeft: 20,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
  miniSlogan1: {
    height: 30,
    justifyContent: 'center',
    position: 'absolute',
    top: 100,
    left: 30,
  },
  miniSlogan2: {
    height: 30,
    justifyContent: 'center',
    position: 'absolute',
    top: 135,
  },
  miniSlogan3: {
    height: 30,
    justifyContent: 'center',
    position: 'absolute',
    top: 100,
    right: 20,
  },
  bigSlogan: {width: 350, marginTop: 10, alignItems: 'center'},
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
  screenButtonFor1: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    marginTop: 20,
    marginBottom: 100,
    width: 335,
    height: 35,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#7A04EB',
  },
});
