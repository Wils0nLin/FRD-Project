/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';

import {AppNavigator} from './src/componets/bottom';
import Tabs from './tab';
// import {TopNavigation} from './src/componets/top';

function App(): JSX.Element {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      {/* <TopNavigation /> */}
      <AppNavigator />
      {/* <Tabs /> */}
    </ApplicationProvider>
  );
}
export default App;
