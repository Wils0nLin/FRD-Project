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
import {GameSearchScreen} from './src/consumer/navigation/pages/searchScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
  );
}
