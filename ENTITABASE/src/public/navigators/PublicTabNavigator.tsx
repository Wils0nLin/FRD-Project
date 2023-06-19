/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {StackParamList} from './StackParamList';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LogIn from '../screens/LogIn';
import NavigatorButton from '../../objects/NavigatorButton';
import PublicLoginModal from '../modals/PublicLoginModal';
import PublicScreenNavigator from './PublicScreenNavigator';
import PublicSettingModal from '../modals/PublicSettingModal';
import PublicTabButton from '../../objects/PublicTabButton';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const PublicTabNavigator = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  React.useEffect(() =>
    navigation.addListener('beforeRemove', e => {
      e.preventDefault();
    }),
  );
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarBackground,
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: () => (
            <NavigatorButton icon="store-alt" name="應用探索" />
          ),
        }}>
        {() => <PublicScreenNavigator />}
      </Tab.Screen>
      <Tab.Screen
        name="Wish"
        options={{
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: () => <PublicLoginModal icon="heart" name="願望清單" />,
        }}>
        {() => ''}
      </Tab.Screen>
      <Tab.Screen
        name="NULL"
        options={{
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: () => <PublicTabButton />,
        }}>
        {() => (
          <Stack.Navigator>
            <Stack.Screen
              name="LogIn"
              component={LogIn}
              options={{
                headerBackVisible: false,
                headerTitle: 'LOG IN',
                headerRight: () => (
                  <TouchableOpacity onPress={navigation.goBack}>
                    <FontAwesome5
                      name={'arrow-left'}
                      size={30}
                      color={'#E4E4E4'}
                    />
                  </TouchableOpacity>
                ),
                headerStyle: styles.topBarBackground,
                headerTitleStyle: styles.topBarText,
              }}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen
        name="cart"
        options={{
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: () => (
            <PublicLoginModal icon="shopping-cart" name="購物車" />
          ),
        }}>
        {() => ''}
      </Tab.Screen>
      <Tab.Screen
        name="PublicSetting"
        options={{
          tabBarIcon: () => <PublicSettingModal />,
          tabBarLabelStyle: {display: 'none'},
        }}>
        {() => ''}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default PublicTabNavigator;

const styles = StyleSheet.create({
  errorBackground: {
    position: 'absolute',
    bottom: 68,
    width: 1000,
    height: 32,
    backgroundColor: '#2A2E32',
  },
  QRCodeBox: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    width: 80,
    height: 80,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#7A04EB',
  },
  tabBarBackground: {
    height: 65,
    backgroundColor: '#202124',
    justifyContent: 'center',
    position: 'absolute',
  },
  topBarBackground: {
    backgroundColor: '#202124',
  },
  topBarText: {
    color: '#ffffff',
    fontSize: 25,
    fontFamily: 'BrunoAceSC-Regular',
  },
});
