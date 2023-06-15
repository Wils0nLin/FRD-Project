/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import ConsumerScreenNavigator from './ConsumerScreenNavigator';
import {StackParamList} from '../../public/navigators/StackParamList';

import ConWishListScreen from './tab/consumer/conWishListScreen';
import ConQRCodeScreen from './tab/consumer/conQRCodeScreen';
import ConsumerCartScreen from './tab/consumer/conCartScreen';

import ConsumerSettingModal from '../modals/ConsumerSettingModal';

import NavigatorButton from '../../objects/NavigatorButton';
import QRMatIcon from '../../objects/QRMatIcon';

import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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
            <NavigatorButton icon="store-alt" name="應用探索" />
          ),
        }}>
        {() => <ConsumerScreenNavigator />}
      </Tab.Screen>
      <Tab.Screen
        name="Wish"
        options={{
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: () => <NavigatorButton icon="heart" name="願望清單" />,
        }}>
        {() => (
          <Stack.Navigator>
            <Stack.Screen
              name="ConsumerWish"
              component={ConWishListScreen}
              options={{
                headerTitle: 'WISH LIST',
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
        name="QRcode"
        options={{
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: () => <QRMatIcon icon="qrcode" />,
        }}>
        {() => (
          <Stack.Navigator>
            <Stack.Screen
              name="ConsumerQRCode"
              component={ConQRCodeScreen}
              options={{
                headerTitle: 'MY ENTI-CODE',
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
        name="cart"
        options={{
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: () => (
            <NavigatorButton icon="shopping-cart" name="購物車" />
          ),
        }}>
        {() => (
          <Stack.Navigator>
            <Stack.Screen
              name="ConsumerCart"
              component={ConsumerCartScreen}
              options={{
                headerTitle: 'MY CART',
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
        name="ConsumerSetting"
        options={{
          tabBarIcon: () => <ConsumerSettingModal />,
          tabBarLabelStyle: {display: 'none'},
        }}>
        {() => <ConsumerScreenNavigator />}
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
