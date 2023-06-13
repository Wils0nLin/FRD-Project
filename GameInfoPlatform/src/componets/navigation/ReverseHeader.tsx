import React from 'react';
import {TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import Icons from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const ReverseHeader = (Title: string) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.goBack();
  };
  const BackIcon = <Icons name="back" size={25} color={'white'} />;
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={handlePress} />
  );

  return (
    <TopNavigation
      accessoryLeft={BackAction}
      title={Title}
      style={{backgroundColor: 'black'}}
    />
  );
};

export default ReverseHeader;
