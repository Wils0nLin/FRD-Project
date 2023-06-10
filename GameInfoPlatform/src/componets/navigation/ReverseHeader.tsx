import React from 'react';
import {View, Button, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ReverseHeader = (Title: string) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };
  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <Button title="i am a BTN" onPress={handlePress} />
      <Text>{Title}</Text>
    </View>
  );
};

export default ReverseHeader;
