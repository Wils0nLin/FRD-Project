import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
} from '@ui-kitten/components';
import {View, StyleSheet} from 'react-native';

const {Navigator, Screen} = createBottomTabNavigator();

const AppScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category="h1"></Text>
  </Layout>
);

const ProductListScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category="h1"></Text>
  </Layout>
);
const QRcodeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category="h1"></Text>
  </Layout>
);
const ProductUploadScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category="h1"></Text>
  </Layout>
);
const AccScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category="h1"></Text>
  </Layout>
);

const BottomTabBar = ({navigation, state}: any) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="應用探索" />
    <BottomNavigationTab title="商品一覽" />
    <BottomNavigationTab title="QRcode" />
    <BottomNavigationTab title="商品上架" />
    <BottomNavigationTab title="帳號設定" />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name="應用探索" component={AppScreen} />
    <Screen name="商品一覽" component={ProductListScreen} />
    <Screen name="QRcode" component={QRcodeScreen} />
    <Screen name="商品上架" component={ProductUploadScreen} />
    <Screen name="帳號設定" component={AccScreen} />
  </Navigator>
);

// import React from 'react';

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
