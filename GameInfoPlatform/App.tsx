/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';

// import {TabNavigator} from './src/componets/navigation/bottom';
// import Tabs from './tab';
// import TopNavigation from './src/componets/navigation/top';
import {View, StyleSheet} from 'react-native';
import MyStack from './src/componets/navigation/top';

function App(): JSX.Element {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <View style={styles.container}>
        <MyStack />
        {/* <TabNavigator /> */}
        {/* <Tabs /> */}
      </View>
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
