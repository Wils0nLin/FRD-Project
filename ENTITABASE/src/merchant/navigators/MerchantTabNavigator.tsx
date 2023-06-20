/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {StackParamList} from '../../public/navigators/StackParamList';
import MerchantScreenNavigator from './MerchantScreenNavigator';
import MerchantSettingModal from '../modals/MerchantSettingModal';
import MerTabButton from '../../objects/MerTabButton';

const Tab = createBottomTabNavigator();

const MerchantTabNavigator = () => {
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
              onPress={() => navigation.navigate('MerchantHome')}>
              <FontAwesome5
                name="store-alt"
                size={30}
                color={'#E4E4E4'}
                solid
              />
              <Text style={{fontSize: 10}}>應用探索</Text>
            </TouchableOpacity>
          ),
        }}>
        {() => <MerchantScreenNavigator />}
      </Tab.Screen>
      <Tab.Screen
        name="Item"
        options={{
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: () => (
            <TouchableOpacity
              style={{alignItems: 'center', marginTop: 10}}
              onPress={() => navigation.navigate('MerchantItem')}>
              <FontAwesome5 name="cube" size={30} color={'#E4E4E4'} solid />
              <Text style={{fontSize: 10}}>商品一覽</Text>
            </TouchableOpacity>
          ),
        }}>
        {() => ''}
      </Tab.Screen>
      <Tab.Screen
        name="QRScan"
        options={{
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: () => <MerTabButton />,
        }}>
        {() => ''}
      </Tab.Screen>
      <Tab.Screen
        name="Add"
        options={{
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: () => (
            <TouchableOpacity
              style={{alignItems: 'center', marginTop: 10}}
              onPress={() => navigation.navigate('MerchantAdd')}>
              <FontAwesome5
                name="plus-square"
                size={30}
                color={'#E4E4E4'}
                solid
              />
              <Text style={{fontSize: 10}}>商品上架</Text>
            </TouchableOpacity>
          ),
        }}>
        {() => ''}
      </Tab.Screen>
      <Tab.Screen
        name="MerchantSetting"
        options={{
          tabBarIcon: () => <MerchantSettingModal />,
          tabBarLabelStyle: {display: 'none'},
        }}>
        {() => ''}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default MerchantTabNavigator;

const styles = StyleSheet.create({
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
