/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import ConAppScreen from './tab/consumer/conAppScreen';
import ConWishListScreen from './tab/consumer/conWishListScreen';
import ConQRCodeScreen from './tab/consumer/conQRCodeScreen';
import ConsumerCartScreen from './tab/consumer/conCartScreen';
import ConProfileEditScreen from './tab/consumer/ConProfileEditScreen';
import ConPasswordEditScreen from './tab/consumer/ConPasswordEditScreen';
import {GameSearchScreen} from './pages/searchScreen';
import ConGameInfoScreen from './tab/consumer/conGameInfoScreen';
import ConMerInfoScreen from './tab/consumer/ConMerInfoScreen';
import ConOrderRecord from './tab/consumer/ConOrderRecord';
import AdminContactScreen from './tab/consumer/ConAdminContact';
import SearchModal from '../modals/SearchModal';
import PaymentScreen from './pages/conPaymentPage';

const Stack = createNativeStackNavigator();

const ConsumerScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ConsumerHome"
        component={ConAppScreen}
        options={{
          headerTitle: 'ENTITÀBASE',
          headerRight: () => {
            return <SearchModal />;
          },
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
        }}
      />
      <Stack.Screen
        name="payment"
        component={PaymentScreen}
        options={{
          headerTitle: 'PAY FOR ORDER',
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
          headerTintColor: '#E4E4E4',
        }}
      />
      <Stack.Screen
        name="ConsumerWish"
        component={ConWishListScreen}
        options={{
          headerTitle: 'WISH LIST',
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
          headerTintColor: '#E4E4E4',
        }}
      />
      <Stack.Screen
        name="ConsumerQRCode"
        component={ConQRCodeScreen}
        options={{
          headerTitle: 'MY ENTI-CODE',
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
          headerTintColor: '#E4E4E4',
        }}
      />
      <Stack.Screen
        name="ConsumerCart"
        component={ConsumerCartScreen}
        options={{
          headerTitle: 'MY CART',
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
          headerTintColor: '#E4E4E4',
        }}
      />
      <Stack.Screen
        name="ConsumerInfo"
        component={ConProfileEditScreen}
        options={{
          headerTitle: 'INFO EDIT',
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
          headerTintColor: '#E4E4E4',
        }}
      />
      <Stack.Screen
        name="ConsumerPW"
        component={ConPasswordEditScreen}
        options={{
          headerTitle: 'PASSWORD RESET',
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
          headerTintColor: '#E4E4E4',
        }}
      />
      <Stack.Screen
        name="ConsumerOrder"
        component={ConOrderRecord}
        options={{
          headerTitle: 'ORDER RECORD',
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
          headerTintColor: '#E4E4E4',
        }}
      />
      <Stack.Screen
        name="ConsumerAdmin"
        component={AdminContactScreen}
        options={{
          headerTitle: 'CONTACT ADMIN',
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
          headerTintColor: '#E4E4E4',
        }}
      />
      <Stack.Screen
        name="GameSearchScreen"
        component={GameSearchScreen}
        options={{
          headerTitle: 'GAME SEARCH',
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
          headerTintColor: '#E4E4E4',
        }}
      />
      <Stack.Screen
        name="GameInfo"
        component={ConGameInfoScreen}
        options={{
          headerTitle: 'GAME INFO',
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
          headerTintColor: '#E4E4E4',
        }}
      />
      <Stack.Screen
        name="ShopInfo"
        component={ConMerInfoScreen}
        options={{
          headerTitle: 'SHOP INFO',
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
          headerTintColor: '#E4E4E4',
        }}
      />
    </Stack.Navigator>
  );
};

export default ConsumerScreenNavigator;

const styles = StyleSheet.create({
  topBarBackground: {
    backgroundColor: '#202124',
  },
  topBarText: {
    color: '#ffffff',
    fontSize: 25,
    fontFamily: 'BrunoAceSC-Regular',
  },
});
