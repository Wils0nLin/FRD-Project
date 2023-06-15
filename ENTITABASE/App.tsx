import * as React from 'react';
import * as eva from '@eva-design/eva';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PublicTabNavigator from './src/public/navigators/PublicTabNavigator';
import {ApplicationProvider} from '@ui-kitten/components';
import MerchantTabNavigator from './src/merchant/navigators/MerchantTabNavigator';
import ConsumerTabNavigator from './src/consumer/navigation/ConsumerTabNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Public" component={PublicTabNavigator} />
          <Stack.Screen name="Consumer" component={ConsumerTabNavigator} />
          <Stack.Screen name="Merchant" component={MerchantTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}
