import React from 'react';
import {Text, View} from 'react-native';
import SearchStack from '../topBar';

const AppScreen = (navigation: any) => {
  return (
    <View>
      <SearchStack />
      <Text>App Screen</Text>
      {/* <Button onPress={()=>{()=>Alerts}}>TEST</Button> */}
    </View>
  );
};

export default AppScreen;
