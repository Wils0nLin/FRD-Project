/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {StackNavigationProp} from '@react-navigation/stack';

import {StackParamList} from '../../public/navigators/StackParamList';

import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import MerchantForehead from '../../objects/MerchantForeheadView';
import {IRootState} from '../../app/store';
import {IP_Of_LOCAL} from '../../../IP';

interface scanner {
  scanner: any;
}

function QRScanScreen(this: scanner) {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const userId = useSelector((state: IRootState) => state.auth.userId);
  const [name, setName] = useState('');

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch(
        `http://${IP_Of_LOCAL}:3000/merchant/userInfo/${userId}`,
        {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        },
      );
      const data = await resp.json();
      console.log(data);
      setName(data[0].merchant_name);
    };
    getData();
  }, []);

  return (
    <ScrollView
      style={{
        backgroundColor: '#2A2E32',
      }}>
      <SafeAreaView style={styles.safeArea}>
        <MerchantForehead name={name} />
        <View style={styles.pageTitle}>
          <Text style={{fontSize: 20}}>讀取訂單</Text>
          <View style={styles.pageTitleLine} />
        </View>
        <View style={styles.QRCodeBox}>
          <View style={{height: 55}} />

          {/* <QRCodeScanner
            ref={node => {
              this.scanner = node;
            }}
            onRead={e => {
              console.log(e.data);
              navigation.navigate('MerchantOrderInfo', {QRcode e.data});
              this.scanner.reactivate();
            }}
          /> */}
          <View style={styles.QRCodeScanner} />
          <View style={styles.ORCodeBorder} />
          <View style={styles.errorBackground1} />
          <View style={styles.errorBackground2} />
          <Text style={{position: 'absolute', bottom: 20, fontSize: 20}}>
            請將顧客ENTI-Code放進框內掃描
          </Text>
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
    justifyContent: 'flex-start',
    width: 350,
  },
  QRCodeScanner: {
    position: 'absolute',
    top: -10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    width: 460,
    height: 460,
    borderWidth: 80,
    borderRadius: 100,
    borderColor: '#2A2E32',
  },
  ORCodeBorder: {
    position: 'absolute',
    top: 78,
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
    borderColor: '#7A04EB',
  },
  errorBackground1: {
    position: 'absolute',
    top: -10,
    width: 500,
    height: 50,
    backgroundColor: '#2A2E32',
  },
  errorBackground2: {
    position: 'absolute',
    top: 430,
    width: 500,
    height: 50,
    backgroundColor: '#2A2E32',
  },
});
