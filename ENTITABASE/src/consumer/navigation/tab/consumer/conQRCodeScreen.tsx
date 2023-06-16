/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import QRCodeStyled from 'react-native-qrcode-styled';

import ForeheadView from '../../../../objects/ConsumerForeheadView';

const ConQRCodeScreen = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: '#2A2E32',
      }}>
      <SafeAreaView style={styles.safeArea}>
        {ForeheadView()}
        <View style={styles.pageTitle}>
          <Text style={{fontSize: 20}}>我的 ENTI-CODE</Text>
          <View style={styles.pageTitleLine} />
        </View>
        <TouchableOpacity style={styles.QRCodeBox}>
          <View style={styles.ORCodeBorder}>
            <QRCodeStyled
              data={'KA HEUNG LIN'}
              padding={15}
              pieceSize={10}
              color={'#000'}
              isPiecesGlued
              pieceBorderRadius={3}
              innerEyesOptions={{
                borderRadius: 5,
                color: '#000',
              }}
              outerEyesOptions={{
                borderRadius: 12,
                color: '#7A04EB',
              }}
              logo={{
                href: require('../../../../assets/images/ENTI_logo.png'),
                padding: 4,
                scale: 1.2,
              }}
            />
          </View>
          <Text style={{color: '#e4e4e4', fontSize: 18, marginTop: 25}}>
            取貨時，請將上方ENTI-CODE展示予商戶
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ConQRCodeScreen;

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
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 60,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#B7C1DE',
  },
  ORCodeBorder: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 270,
    height: 270,
    justifyContent: 'center',
    alignItems: 'center',
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
