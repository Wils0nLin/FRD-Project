import {Button} from '@ui-kitten/components';
import React from 'react';
import {Text, View} from 'react-native';
import SearchStack, {TopNavigation} from '../../topBar';
import Sharedstyle from '../../../../assets/styleSheets/StyleSheet';
const ConsumerAppScreen = (navigation: any) => {
  return (
    <View style={Sharedstyle.container}>
      <Text>Consumer App Screen</Text>
      {/* <Button onPress={()=>{()=>Alerts}}>TEST</Button> */}
    </View>
  );
};

export default ConsumerAppScreen;
