import React from 'react';
import {Button, Text, View} from 'react-native';
import Alerts from '../../../../utils/testing/alert';

const QrCodeScreen = (navigation: any) => {
  return (
    <View>
      <Text>qr code</Text>
      <Button title="test" onPress={Alerts} />
    </View>
  );
};

export default QrCodeScreen;
