import {Button} from '@ui-kitten/components';
import React from 'react';
import {Text, View} from 'react-native';
import Alerts from '../../../utils/testing/alert';
import SearchStack, {TopNavigation} from '../topBar';

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
