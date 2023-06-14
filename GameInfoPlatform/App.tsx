/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';

import {NavigationContainer} from '@react-navigation/native';

import ConsumerAppTabNavigator from './src/componets/navigation/tab/consumer/conBottomTabBar';

import ConQRCodeScreen from './src/componets/navigation/tab/consumer/conQRCodeScreen';

function App(): JSX.Element {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <NavigationContainer>
        <ConsumerAppTabNavigator />
        {/* <ConQRCodeScreen /> */}
      </NavigationContainer>
    </ApplicationProvider>
  );
}
export default App;
