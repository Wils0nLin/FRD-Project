import * as React from 'react';
import * as eva from '@eva-design/eva';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ApplicationProvider} from '@ui-kitten/components';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import ConsumerTabNavigator from './src/consumer/navigation/ConsumerTabNavigator';
import MerchantTabNavigator from './src/merchant/navigators/MerchantTabNavigator';
import PublicTabNavigator from './src/public/navigators/PublicTabNavigator';
import {StripeProvider} from '@stripe/stripe-react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
<<<<<<< HEAD
    <StripeProvider
      publishableKey={
        'pk_test_51NDJbNBdCj5k61bSiCg6OEniOlmx3KVuzFDaNeGmaN2bi3DMIaVNrcsfiz5a79OfAnj15uZnWixKGiKmfGTb1xvd00UGuYYvlx'
      }>
      <Provider store={store}>
        <ApplicationProvider {...eva} theme={eva.dark}>
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
      </Provider>
    </StripeProvider>
=======
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.dark}>
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
        {/* 
        <AddScreen /> */}
      </ApplicationProvider>
    </Provider>
>>>>>>> 226f35722613a4440faef1756bfcc52cb611284e
  );
}
