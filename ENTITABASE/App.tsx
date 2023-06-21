import * as React from 'react';
import * as eva from '@eva-design/eva';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ApplicationProvider} from '@ui-kitten/components';
import {NavigationContainer} from '@react-navigation/native';

import ConsumerTabNavigator from './src/consumer/navigation/ConsumerTabNavigator';
import MerchantTabNavigator from './src/merchant/navigators/MerchantTabNavigator';
import PublicTabNavigator from './src/public/navigators/PublicTabNavigator';
import AddItemModal from './src/merchant/modals/AddItemModal';
import AddScreen from './src/merchant/screens/AddScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <NavigationContainer>
        {/* <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}> */}
        {/* <Stack.Screen name="Public" component={PublicTabNavigator} />
          <Stack.Screen name="Consumer" component={ConsumerTabNavigator} />
          <Stack.Screen name="Merchant" component={MerchantTabNavigator} /> */}

        <AddScreen />
        {/* </Stack.Navigator> */}
      </NavigationContainer>
    </ApplicationProvider>
  );
}
