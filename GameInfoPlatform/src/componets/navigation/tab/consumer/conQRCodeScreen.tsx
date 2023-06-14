import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';

import ConsumerInfoHeader from '../../ConsumerInfoHeader';
import QRcodeSVG from '../../../../assets/consumerSVG/ConsumerQRcodeSVG';
import {consumerPageStyle} from './conAppScreen';

const ConQRCodeScreen = () => {
  const Name = 'Hello World';
  return (
    <ScrollView>
      <View style={{backgroundColor: '#202124', height: 600}}>
        <ConsumerInfoHeader Name={Name} />
        <View style={{marginLeft: 25, marginTop: 10, flexDirection: 'row'}}>
          <View
            style={{
              borderColor: '#7D7D7D',
              borderWidth: 3,
              width: 5,
              height: 35,
            }}></View>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 20,
              marginLeft: 10,
              marginBottom: 20,
            }}>
            我的 ENTICODE
          </Text>
        </View>

        <View style={{marginLeft: 20, marginRight: 20}}>
          <View
            style={{
              borderColor: '#B7C1DE',
              borderWidth: 2,
              paddingTop: 50,
              paddingRight: 30,
              paddingLeft: 30,
              paddingBottom: 50,
            }}>
            <QRcodeSVG style={{alignSelf: 'center'}} />
          </View>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 20,
              marginTop: 20,
              textAlign: 'center',
            }}>
            取貨時，請將上方ENTICODE展示予商戶
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ConQRCodeScreen;
