/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {StackParamList} from './StackParamList';
import ConAppScreen from '../../consumer/navigation/tab/consumer/conAppScreen';
import PublicAdminScreen from '../screens/PublicAdminScreen';
import Login from '../screens/LogIn';
import ConRegister from '../screens/ConRegister';
import MerRegister from '../screens/MerRegister';
import SearchModal from '../../consumer/modals/SearchModal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {GameSearchScreen} from '../../consumer/navigation/pages/searchScreen';
import MerchantCenterScreen from '../screens/MerchantCenterScreen';
import ConGameInfoScreen from '../../consumer/navigation/tab/consumer/conGameInfoScreen';
// import MerRegister from '../screens/MerRegister';
import ReverseHeader from '../../consumer/navigation/ReverseHeader';
// import GameInfoScreen from '../../consumer/navigation/tab/consumer/GameInfoScreen';
const Stack = createNativeStackNavigator();

const PublicScreenNavigator = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PublicHome"
        component={ConAppScreen}
        options={{
          headerTitle: 'ENTITÀBASE',
          headerRight: () => {
            console.log('hi');
            return <SearchModal />;
          },
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
        }}
      />
      <Stack.Screen
        name="PublicAdmin"
        component={PublicAdminScreen}
        options={{
          headerBackVisible: false,
          headerTitle: 'CONTACT ADMIN',
          headerRight: () => (
            <TouchableOpacity onPress={navigation.goBack}>
              <Icon name={'arrow-left'} size={30} color={'#E4E4E4'} />
            </TouchableOpacity>
          ),
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
        }}
      />
      <Stack.Screen
        name="GameSearchScreen"
        component={GameSearchScreen}
        options={{
          headerBackVisible: false,
          headerTitle: 'GAME SEARCH',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('PublicHome')}>
              <Icon name={'arrow-left'} size={30} color={'#E4E4E4'} />
            </TouchableOpacity>
          ),
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
        }}
      />
      <Stack.Screen
        name="LogIn"
        component={Login}
        options={{
          headerBackVisible: false,
          headerTitle: 'LOG IN',
          headerRight: () => (
            <TouchableOpacity onPress={navigation.goBack}>
              <Icon name={'arrow-left'} size={30} color={'#E4E4E4'} />
            </TouchableOpacity>
          ),
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
        }}
      />
      {/* <Stack.Screen
        name="MerRegister"
        component={MerRegister}
        options={({}) => ({
          header: () => ReverseHeader('MerRes'),
        })}
      /> */}
      <Stack.Screen
        name="ConsumerRegis"
        component={ConRegister}
        options={{
          headerBackVisible: false,
          headerTitle: 'REGISTRATION',
          headerRight: () => (
            <TouchableOpacity onPress={navigation.goBack}>
              <Icon name={'arrow-left'} size={30} color={'#E4E4E4'} />
            </TouchableOpacity>
          ),
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
        }}
      />
      <Stack.Screen
        name="MerRegister"
        component={MerRegister}
        options={{
          headerBackVisible: false,
          headerTitle: 'REGISTRATION',
          headerRight: () => (
            <TouchableOpacity onPress={navigation.goBack}>
              <Icon name={'arrow-left'} size={30} color={'#E4E4E4'} />
            </TouchableOpacity>
          ),
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
        }}
      />
      <Stack.Screen
        name="MerchantCenter"
        component={MerchantCenterScreen}
        options={{
          headerBackVisible: false,
          headerTitle: 'MERCHANT CENTER',
          headerRight: () => (
            <TouchableOpacity onPress={navigation.goBack}>
              <Icon name={'arrow-left'} size={30} color={'#E4E4E4'} />
            </TouchableOpacity>
          ),
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
        }}
      />
      <Stack.Screen
        name="GameInfo"
        component={ConGameInfoScreen}
        options={{
          headerBackVisible: false,
          headerTitle: 'GAME INFO',
          headerRight: () => (
            <TouchableOpacity onPress={navigation.goBack}>
              <Icon name={'arrow-left'} size={30} color={'#E4E4E4'} />
            </TouchableOpacity>
          ),
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
        }}
      />
    </Stack.Navigator>
  );
};

export default PublicScreenNavigator;

const styles = StyleSheet.create({
  topBarBackground: {
    backgroundColor: '#202124',
  },
  topBarText: {
    color: '#ffffff',
    fontSize: 25,
    fontFamily: 'BrunoAceSC-Regular',
  },
});
