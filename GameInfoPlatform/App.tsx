/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import BottomTabBar from './src/componets/navigation/bottomTabBar';
import {NavigationContainer} from '@react-navigation/native';

// import {TabNavigator} from './src/componets/navigation/bottom';
// import Tabs from './tab';
// import TopNavigation from './src/componets/navigation/top';
import {View, StyleSheet} from 'react-native';
import SearchStack, {TopNavigation} from './src/componets/navigation/topBar';
import Test1 from './src/utils/testing/test1';
import Test from './src/utils/testing/test';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProfileScreen} from './src/componets/navigation/pages/searchScreen';
import AppTabNavigator from './src/componets/navigation/bottomTabBar';
import ConsumerAppTabNavigator from './src/componets/navigation/tab/consumer/ConsumerBottomTabBar';
import Sharedstyle from './src/assets/styleSheets/StyleSheet';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// function App(): JSX.Element {
//   return (
//     // <Test com={<Test1 />} />
//     <ApplicationProvider {...eva} theme={eva.light}>
//       <NavigationContainer>
//         <AppTabNavigator />
//       </NavigationContainer>
//     </ApplicationProvider>
//   );
// }

//try
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
//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
  },
});

export default App;
