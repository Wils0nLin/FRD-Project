import React, {ReactNode, useRef, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AccScreenSVG from '../../../../assets/AccScreenSVG';
import {View, Animated, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {TopNavigation} from '../../topBar';
import {ProfileScreen} from '../../pages/searchScreen';

import ReverseHeader from '../../ReverseHeader';

import AppScreenSVG from '../../../../assets/AppscreenSVG';
import ConsumerQRcodeSVG from '../../../../assets/consumerSVG/ConsumerAppScreenSVG';
import ConsumerHeart from '../../../../assets/consumerSVG/ConsumerHeartSVG';
import ConsumerCartSVG from '../../../../assets/consumerSVG/ConsumerCartSVG';
import ConsumerCartScreen from './conCartScreen';

//style sheet
import {bottomBarStyles} from '../../../../assets/styleSheets/BottomBarStyleSheet';
import ConAppScreen from './conAppScreen';
import ConWishListScreen from './conWishListScreen';
import ConQRCodeScreen from './conQRCodeScreen';
import ConAccScreen from './conAccScreen';
//

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const PopUPButton = () => {
  return (
    <View style={bottomBarStyles.container}>
      <ConsumerQRcodeSVG
        width="60"
        height="60"
        fill="#E4E4E4"
        style={{top: -45}}
      />
    </View>
  );
};

// 包住BottomTabBar and TopNavigation，做search轉頁
const ConsumerAppTabNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <TopNavigation {...props} />,
      }}>
      <Stack.Screen name="Tabs" component={BottomTabBar} />
      <Stack.Screen
        name="Search"
        component={ProfileScreen}
        options={({route}) => ({
          header: () => ReverseHeader('Search'),
        })}
      />
    </Stack.Navigator>
  );
};
//

// try下拉上效果
const BottomTabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
        },
      })}>
      <Tab.Screen
        name="應用探索"
        component={ConAppScreen}
        options={focused => ({
          tabBarLabelStyle: {
            color: '#E4E4E4',
          },
          tabBarIcon: ({focused}) => {
            return <AppScreenSVG width="60%" height="60%" fill="#E4E4E4" />;
          },
        })}
      />
      <Tab.Screen
        name="願望清單"
        component={ConWishListScreen}
        options={focused => ({
          tabBarLabelStyle: {
            color: '#E4E4E4',
          },
          tabBarIcon: ({focused}) => {
            return <ConsumerHeart width="70%" height="70%" fill="#E4E4E4" />;
          },
        })}
      />
      <Tab.Screen
        name="qrCodeScreen"
        component={ConQRCodeScreen}
        options={focused => ({
          tabBarLabelStyle: {
            display: 'none',
          },
          tabBarButton: () => <PopUPButton />,
        })}
      />
      <Tab.Screen
        name="購物車"
        component={ConsumerCartScreen}
        options={focused => ({
          tabBarLabelStyle: {
            color: '#E4E4E4',
          },
          tabBarIcon: ({focused}) => {
            return <ConsumerCartSVG width="60%" height="60%" fill="#E4E4E4" />;
          },
        })}
      />
      <Tab.Screen
        name="帳號設定"
        component={ConAccScreen}
        options={focused => ({
          tabBarLabelStyle: {
            color: '#E4E4E4',
          },
          tabBarIcon: ({focused}) => {
            return <AccScreenSVG width="60%" height="60%" fill="#E4E4E4" />;
          },
        })}
      />
    </Tab.Navigator>
  );
};

//

// const BottomTabBar = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         headerShown: false,
//         tabBarStyle: {
//           backgroundColor: 'black',
//         },
//       })}>
//       <Tab.Screen
//         name="應用探索"
//         component={ConAppScreen}
//         options={focused => ({
//           tabBarLabelStyle: {
//             color: '#E4E4E4',
//           },
//           tabBarIcon: ({focused}) => {
//             return <AppScreenSVG width="60%" height="60%" fill="#E4E4E4" />;
//           },
//         })}
//       />
//       <Tab.Screen
//         name="願望清單"
//         component={ConWishListScreen}
//         options={focused => ({
//           tabBarLabelStyle: {
//             color: '#E4E4E4',
//           },
//           tabBarIcon: ({focused}) => {
//             return <ConsumerHeart width="70%" height="70%" fill="#E4E4E4" />;
//           },
//         })}
//       />
//       <Tab.Screen
//         name="qrCodeScreen"
//         component={ConQRCodeScreen}
//         options={focused => ({
//           tabBarLabelStyle: {
//             display: 'none',
//           },
//           tabBarButton: () => <PopUPButton />,
//         })}
//       />
//       <Tab.Screen
//         name="購物車"
//         component={ConsumerCartScreen}
//         options={focused => ({
//           tabBarLabelStyle: {
//             color: '#E4E4E4',
//           },
//           tabBarIcon: ({focused}) => {
//             return <ConsumerCartSVG width="60%" height="60%" fill="#E4E4E4" />;
//           },
//         })}
//       />

//       <Tab.Screen
//         name="帳號設定"
//         component={ConAccScreen}
//         options={focused => ({
//           tabBarLabelStyle: {
//             color: '#E4E4E4',
//           },
//           tabBarIcon: ({focused}) => {
//             return <AccScreenSVG width="60%" height="60%" fill="#E4E4E4" />;
//           },
//         })}
//       />
//     </Tab.Navigator>
//   );
// };

export default ConsumerAppTabNavigator;
