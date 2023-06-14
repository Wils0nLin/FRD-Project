import React from 'react';
import {TouchableWithoutFeedback, StyleSheet, View} from 'react-native';
import {Icon, Input, Text} from '@ui-kitten/components';
import Entypo from 'react-native-vector-icons/Entypo';

export const InputAccessories = (): React.ReactElement => {
  const [value, setValue] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = (): void => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props: any): React.ReactElement => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Entypo name="eye-with-line" size={30} color={'rgb(240,240,240)'} />
    </TouchableWithoutFeedback>
  );

  return (
    <Input
      value={value}
      placeholder="Place your Text"
      accessoryRight={renderIcon}
      secureTextEntry={secureTextEntry}
      onChangeText={nextValue => setValue(nextValue)}
      style={{backgroundColor: 'rgb(40,40,40)'}}
    />
  );
};
