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

import ForeheadView from '../../objects/MerchantForeheadView';

export default function ScanScreen({navigation}: {navigation: any}) {
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
          <View style={styles.QRCodeBorder}>
            <TouchableOpacity
              onPress={() => navigation.navigate('MerchantOrderInfo')}>
              <Image
                style={{
                  width: 200,
                  height: 200,
                }}
                source={require('../../assets/images/qr-code.jpg')}
              />
            </TouchableOpacity>
          </View>
          <Text style={{margin: 10, fontSize: 20}}>
            請將顧客QR Code放進框內掃描
          </Text>
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
  QRCodeBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 550,
  },
  QRCodeBorder: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    paddingLeft: 10,
    paddingRight: 10,
    width: 250,
    height: 250,
    borderStyle: 'dashed',
    borderRadius: 10,
    borderWidth: 8,
    borderColor: '#B7C1DE',
  },
});
