import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ConsumerTabNavigator from './src/consumer/navigation/ConsumerTabNavigator';
import PublicTabNavigator from './src/public/navigators/PublicTabNavigator';
import MerchantTabNavigator from './src/merchant/navigators/MerchantTabNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
  );
}
