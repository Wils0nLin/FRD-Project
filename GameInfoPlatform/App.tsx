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

function App(): JSX.Element {
  return (
    // <Test com={<Test1 />} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <ConsumerAppTabNavigator />
      </NavigationContainer>
    </ApplicationProvider>
  );
}
export default App;
