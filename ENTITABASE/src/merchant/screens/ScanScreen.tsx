/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {StackNavigationProp} from '@react-navigation/stack';

import {StackParamList} from '../../public/navigators/StackParamList';

import ForeheadView from '../../objects/MerchantForeheadView';
interface scanner {
  scanner: any;
}

function QRScanScreen(this: scanner) {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  return (
    <ScrollView
      style={{
        backgroundColor: '#2A2E32',
      }}>
      <SafeAreaView style={styles.safeArea}>
        {ForeheadView()}
        <View style={styles.pageTitle}>
          <Text style={{fontSize: 20}}>讀取訂單</Text>
          <View style={styles.pageTitleLine} />
        </View>
        <View style={styles.QRCodeBox}>
          <View style={{height: 80}} />

          <QRCodeScanner
            ref={node => {
              this.scanner = node;
            }}
            onRead={() => {
              navigation.navigate('MerchantOrderInfo');
            }}
          />
          <View style={styles.QRCodeScanner} />
          <View style={styles.ORCodeBorder} />
          <Text style={{fontSize: 20}}>請將顧客ENTI-Code放進框內掃描</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default QRScanScreen;

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
  QRCodeBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
  },
  QRCodeScanner: {
    position: 'absolute',
    top: 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    width: 530,
    height: 530,
    borderWidth: 115,
    borderRadius: 130,
    borderColor: '#2A2E32',
  },
  ORCodeBorder: {
    position: 'absolute',
    top: 125,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    paddingLeft: 10,
    paddingRight: 10,
    width: 270,
    height: 270,
    borderStyle: 'dashed',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#B7C1DE',
  },
});
