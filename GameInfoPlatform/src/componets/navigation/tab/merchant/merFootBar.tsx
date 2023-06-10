import React, {ReactNode} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AppScreen from './tab/appScreen';
import ItemListScreen from './itemListScreen';
import ItemAddScreen from './itemAddScreen';
import MerAccScreen from './merAccScreen';
import QrCodeScreen from './tab/qrCodeScreen';

import ProductlistSVG from '../../../../assets/ProductlistSVG';
import AccScreenSVG from '../../../../assets/AccScreenSVG';
import AppScreenSVG from '../../../../assets/AppscreenSVG';
import ScannerSVG from '../../../../assets/ScannerSVG';
import ProductUploadSVG from '../../../../assets/productUploadSVG';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {View} from 'react-native';
import {Text} from 'react-native-svg';
import SearchStack from '../../topBar';
import test1 from '../../../../utils/testing/test1';
import {createStackNavigator} from '@react-navigation/stack';
import {TopNavigation} from '../../topBar';
import {ProfileScreen} from '../../pages/searchScreen';
import Test1 from '../../../../utils/testing/test1';
import ReverseHeader from '../../ReverseHeader';
import ConsumerAppScreen from '../consumer/consumerAppScreen';
import ConsumerAppScreenSVG from '../../../../assets/consumer/ConsumerAppScreenSVG';

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
      <ScannerSVG width="60" height="60" fill="#E4E4E4" />
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
const AppTabNavigator = () => {
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
        component={ItemListScreen}
        options={focused => ({
          tabBarLabelStyle: {
            color: 'white',
          },
          tabBarIcon: ({focused}) => {
            return <ProductlistSVG width="60%" height="60%" fill="#E4E4E4" />;
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
        component={ItemAddScreen}
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
        component={MerAccScreen}
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

export default AppTabNavigator;
