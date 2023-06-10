import React, {ReactNode} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProductListScreen from '../merchant/productListScreen';
import ProductUploadScreen from '../merchant/productUploadScreen';
import AccScreen from '../merchant/accScreen';
import QrCodeScreen from '../merchant/qrCodeScreen';

import AccScreenSVG from '../../../../assets/AccScreenSVG';
import ScannerSVG from '../../../../assets/ScannerSVG';
import ProductUploadSVG from '../../../../assets/productUploadSVG';
import {View} from 'react-native';
import {Text} from 'react-native-svg';
import {createStackNavigator} from '@react-navigation/stack';
import {TopNavigation} from '../../topBar';
import {ProfileScreen} from '../../pages/searchScreen';

import ReverseHeader from '../../ReverseHeader';
import ConsumerAppScreen from './consumerAppScreen';
import AppScreenSVG from '../../../../assets/AppscreenSVG';
import ConsumerQRcodeSVG from '../../../../assets/consumer/ConsumerAppScreenSVG';
import ConsumerHeart from '../../../../assets/consumer/ConsumerHeartSVG';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const PopUPButton = () => {
  return (
    <View
      style={{
        width: '25%',
        height: '100%',
        padding: 20,
        backgroundColor: 'black',
        alignItems: 'center',
        position: 'relative',
        top: -40,
      }}>
      <ConsumerQRcodeSVG width="60" height="60" fill="#E4E4E4" />
    </View>
  );
};
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
//         component={AccScreen}
//         options={focused => ({
//           tabBarLabelStyle: {
//             color: 'white',
//           },
//           tabBarIcon: ({focused}) => {
//             return <AppScreenSVG width="60%" height="60%" fill="#E4E4E4" />;
//           },
//         })}
//       />
//       <Tab.Screen
//         name="商品一覽"
//         component={ProductListScreen}
//         options={focused => ({
//           tabBarLabelStyle: {
//             color: 'white',
//           },
//           tabBarIcon: ({focused}) => {
//             return <ProductlistSVG width="60%" height="60%" fill="#E4E4E4" />;
//           },
//         })}
//       />
//       <Tab.Screen
//         name="qrCodeScreen"
//         component={QrCodeScreen}
//         options={focused => ({
//           tabBarLabelStyle: {
//             display: 'none',
//             color: 'white',
//           },
//           tabBarButton: () => <PopUPButton />,
//         })}
//       />
//       <Tab.Screen
//         name="商品上架"
//         component={ProductUploadScreen}
//         options={focused => ({
//           tabBarLabelStyle: {
//             color: 'white',
//           },
//           tabBarIcon: ({focused}) => {
//             return <ProductUploadSVG width="60%" height="60%" fill="#E4E4E4" />;
//           },
//         })}
//       />
//       <Tab.Screen
//         name="帳號設定"
//         component={AccScreen}
//         options={focused => ({
//           tabBarLabelStyle: {
//             color: 'white',
//           },
//           tabBarIcon: ({focused}) => {
//             return <AccScreenSVG width="60%" height="60%" fill="#E4E4E4" />;
//           },
//         })}
//       />
//     </Tab.Navigator>
//   );
// };

//try
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
        component={ConsumerAppScreen}
        options={focused => ({
          tabBarLabelStyle: {
            color: 'white',
          },
          tabBarIcon: ({focused}) => {
            return <AppScreenSVG width="60%" height="60%" fill="#E4E4E4" />;
          },
        })}
      />
      <Tab.Screen
        name="商品一覽"
        component={ProductListScreen}
        options={focused => ({
          tabBarLabelStyle: {
            color: 'white',
          },
          tabBarIcon: ({focused}) => {
            return <ConsumerHeart width="70%" height="70%" fill="#E4E4E4" />;
          },
        })}
      />
      <Tab.Screen
        name="qrCodeScreen"
        component={QrCodeScreen}
        options={focused => ({
          tabBarLabelStyle: {
            display: 'none',
            color: 'white',
          },
          tabBarButton: () => <PopUPButton />,
        })}
      />
      <Tab.Screen
        name="商品上架"
        component={ProductUploadScreen}
        options={focused => ({
          tabBarLabelStyle: {
            color: 'white',
          },
          tabBarIcon: ({focused}) => {
            return <ProductUploadSVG width="60%" height="60%" fill="#E4E4E4" />;
          },
        })}
      />
      <Tab.Screen
        name="帳號設定"
        component={AccScreen}
        options={focused => ({
          tabBarLabelStyle: {
            color: 'white',
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

export default ConsumerAppTabNavigator;
