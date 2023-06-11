import React from 'react';
import {Text, View} from 'react-native';
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
