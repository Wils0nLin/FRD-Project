/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
// import BottomTabBar from './src/componets/navigation/tab/merchant/merFootBar';
import {NavigationContainer} from '@react-navigation/native';

import {View, StyleSheet} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ConsumerAppTabNavigator from './src/componets/navigation/tab/consumer/conBottomTabBar';
// import FullScreenModal from './src/componets/navigation/tab/consumer/test';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// function App(): JSX.Element {
//   return <FullScreenModal />;
// }

function App(): JSX.Element {
  return (
    // <Test com={<Test1 />} />
    <ApplicationProvider {...eva} theme={eva.dark}>
      <NavigationContainer>
        <ConsumerAppTabNavigator />
      </NavigationContainer>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
  },
});

export default App;
