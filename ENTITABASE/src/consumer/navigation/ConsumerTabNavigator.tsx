/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {StackParamList} from '../../public/navigators/StackParamList';
import ConsumerScreenNavigator from './ConsumerScreenNavigator';
import ConsumerSettingModal from '../modals/ConsumerSettingModal';
import ConTabButton from '../../objects/ConTabButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const ConsumerTabNavigator = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
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
            <TouchableOpacity
              style={{alignItems: 'center', marginTop: 10}}
              onPress={() => navigation.navigate('ConsumerHome')}>
              <FontAwesome5
                name={'store-alt'}
                size={30}
                color={'#E4E4E4'}
                solid
              />
              <Text style={{fontSize: 10}}>應用探索</Text>
            </TouchableOpacity>
          ),
        }}>
        {() => <ConsumerScreenNavigator />}
      </Tab.Screen>
      <Tab.Screen
        name="Wish"
        options={{
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: () => (
            <TouchableOpacity
              style={{alignItems: 'center', marginTop: 10}}
              onPress={() => navigation.navigate('ConsumerWish')}>
              <FontAwesome5 name={'heart'} size={30} color={'#E4E4E4'} solid />
              <Text style={{fontSize: 10}}>願望清單</Text>
            </TouchableOpacity>
          ),
        }}>
        {() => ''}
      </Tab.Screen>
      <Tab.Screen
        name="QRcode"
        options={{
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: () => <ConTabButton />,
        }}>
        {() => ''}
      </Tab.Screen>
      <Tab.Screen
        name="cart"
        options={{
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: () => (
            <TouchableOpacity
              style={{alignItems: 'center', marginTop: 10}}
              onPress={() => navigation.navigate('ConsumerCart')}>
              <FontAwesome5
                name={'shopping-cart'}
                size={30}
                color={'#E4E4E4'}
                solid
              />
              <Text style={{fontSize: 10}}>購物車</Text>
            </TouchableOpacity>
          ),
        }}>
        {() => ''}
      </Tab.Screen>
      <Tab.Screen
        name="ConsumerSetting"
        options={{
          tabBarIcon: () => <ConsumerSettingModal />,
          tabBarLabelStyle: {display: 'none'},
        }}>
        {() => ''}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default ConsumerTabNavigator;

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
