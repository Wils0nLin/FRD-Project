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
import { NavigationContainer } from '@react-navigation/native';


// import {TopNavigation} from './src/componets/top';

function App(): JSX.Element {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
       <NavigationContainer>
  <BottomTabBar />
  </NavigationContainer>
    </ApplicationProvider>
  );
}
export default App;
