import React from 'react';
import ConsumerInfoHeader from '../../ConsumerInfoHeader';
import {ScrollView, Text} from 'react-native';
const ConProfileEditScreen = () => {
  return (
    <ScrollView style={{backgroundColor: 'rgb(40,40,40)'}}>
      {ConsumerInfoHeader('YO')}
      <Text>title wait for wilson</Text>
      
    </ScrollView>
  );
};
export default ConProfileEditScreen;
