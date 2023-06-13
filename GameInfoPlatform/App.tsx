/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
// import BottomTabBar from './src/componets/navigation/tab/merchant/merFootBar';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import ConsumerAppTabNavigator from './src/componets/navigation/tab/consumer/conBottomTabBar';

// import FullScreenModal from './src/componets/navigation/tab/consumer/test';

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
export default App;
