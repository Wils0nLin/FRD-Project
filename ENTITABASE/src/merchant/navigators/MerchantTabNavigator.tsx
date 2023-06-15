/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import MerchantScreenNavigator from './MerchantScreenNavigator';
import {StackParamList} from '../../public/navigators/StackParamList';

import ItemScreen from '../screens/MerchantItemScreen';
import QRScanScreen from '../screens/ScanScreen';
import AddScreen from '../screens/AddScreen';
import OrderInfoScreen from '../screens/MerchantOrderInfoScreen';

import MerchantSettingModal from '../modals/MerchantSettingModal';

import NavigatorButton from '../../objects/NavigatorButton';
import QRIcon from '../../objects/QRIcon';

import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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
            <NavigatorButton icon="store-alt" name="應用探索" />
          ),
        }}>
        {() => <MerchantScreenNavigator />}
      </Tab.Screen>
      <Tab.Screen
        name="Item"
        options={{
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: () => <NavigatorButton icon="cube" name="商品一覽" />,
        }}>
        {() => (
          <Stack.Navigator>
            <Stack.Screen
              name="MerchantItem"
              component={ItemScreen}
              options={{
                headerTitle: 'PRODUCT LIST',
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
        )}
      </Tab.Screen>
      <Tab.Screen
        name="QRScan"
        options={{
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: () => <QRIcon icon="camera" />,
        }}>
        {() => (
          <Stack.Navigator>
            <Stack.Screen
              name="MerchantQRScan"
              component={QRScanScreen}
              options={{
                headerTitle: 'ENTI-CODE SCAN',
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
              name="MerchantOrderInfo"
              component={OrderInfoScreen}
              options={{
                headerBackVisible: false,
                headerTitle: 'ORDER INFO',
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
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Add"
        options={{
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: () => (
            <NavigatorButton icon="plus-square" name="商品上架" />
          ),
        }}>
        {() => (
          <Stack.Navigator>
            <Stack.Screen
              name="MerchantAdd"
              component={AddScreen}
              options={{
                headerTitle: 'PRODUCT RELEASE',
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
        )}
      </Tab.Screen>
      <Tab.Screen
        name="MerchantSetting"
        options={{
          tabBarIcon: () => <MerchantSettingModal />,
          tabBarLabelStyle: {display: 'none'},
        }}>
        {() => <MerchantScreenNavigator />}
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
