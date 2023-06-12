import React from 'react';
import {Button, Text, View} from 'react-native';
import Alerts from '../../../../utils/testing/alert';

const ConQRCodeScreen = (navigation: any) => {
  return (
    <View>
      <Text>讀取訂單</Text>
      <Button title="test" onPress={Alerts} />
    </View>
  );
};

export default ConQRCodeScreen;
