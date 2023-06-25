/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import AddScreen from '../screens/AddScreen';
import ArriveScreen from '../screens/ArriveScreen';
import CommentScreen from '../screens/CommentScreen';
import MerchantHomeScreen from '../screens/MerchantHomeScreen';
import ItemScreen from '../screens/MerchantItemScreen';
import PreOrderItemScreen from '../screens/MerchantPreOrderItemScreen';
import MerPreOrderScreen from '../screens/MerPreOrderScreen';
import TradeScreen from '../screens/MerchantTradeScreen';
import InfoEditScreen from '../screens/MerchantInfoEditScreen';
import AnnoEditScreen from '../screens/AnnoEditScreen';
import BREditScreen from '../screens/BREditScreen';
import PasswordScreen from '../screens/MerchantPasswordScreen';
import AdminContactScreen from '../screens/MerchantAdminScreen';
import QRScanScreen from '../screens/ScanScreen';
import OrderInfoScreen from '../screens/MerchantOrderInfoScreen';

import SearchModal from '../modals/MerchantSearchModal';

const Stack = createNativeStackNavigator();

const MerchantScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MerchantHome"
        component={MerchantHomeScreen}
        options={{
          headerTitle: 'ENTITÀBASE',
          headerRight: () => <SearchModal />,
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
        }}
      />
      <Stack.Screen
        name="MerchantItem"
        component={ItemScreen}
        options={{
          headerTitle: 'PRODUCT LIST',
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
          headerTintColor: '#E4E4E4',
        }}
      />
      <Stack.Screen
        name="MerchantAdd"
        component={AddScreen}
        options={{
          headerTitle: 'RELEASE',
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
          headerTintColor: '#E4E4E4',
        }}
      />
      <Stack.Screen
        name="MerchantTrade"
        component={TradeScreen}
        options={{
          headerTitle: 'TRADE RECORD',
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
          headerTintColor: '#E4E4E4',
        }}
      />
      <Stack.Screen
        name="MerchantPreOrderItem"
        component={PreOrderItemScreen}
        options={{
          headerTitle: 'PRE-ORDER ITEM',
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
          headerTintColor: '#E4E4E4',
        }}
      />
      <Stack.Screen
        name="MerchantPreOrder"
        component={MerPreOrderScreen}
        options={{
          headerTitle: 'PRE-ORDER',
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
          headerTintColor: '#E4E4E4',
        }}
      />
      <Stack.Screen
        name="MerchantComment"
        component={CommentScreen}
        options={{
          headerTitle: 'COMMENT',
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
          headerTintColor: '#E4E4E4',
        }}
      />
      <Stack.Screen
        name="MerchantArrive"
        component={ArriveScreen}
        options={{
          headerTitle: 'NEW ARRIVE',
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
          headerTintColor: '#E4E4E4',
        }}
      />
      <Stack.Screen
        name="MerchantInfo"
        component={InfoEditScreen}
        options={{
          headerTitle: 'INFO EDIT',
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
          headerTintColor: '#E4E4E4',
        }}
      />
      <Stack.Screen
        name="Announcement"
        component={AnnoEditScreen}
        options={{
          headerTitle: 'ANNOUNCEMENT',
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
          headerTintColor: '#E4E4E4',
        }}
      />
      <Stack.Screen
        name="MerchantBR"
        component={BREditScreen}
        options={{
          headerTitle: 'BUSINESS EDIT',
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
          headerTintColor: '#E4E4E4',
        }}
      />
      <Stack.Screen
        name="MerchantPW"
        component={PasswordScreen}
        options={{
          headerTitle: 'PASSWORD RESET',
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
          headerTintColor: '#E4E4E4',
        }}
      />
      <Stack.Screen
        name="MerchantAdmin"
        component={AdminContactScreen}
        options={{
          headerTitle: 'CONTACT ADMIN',
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
          headerTintColor: '#E4E4E4',
        }}
      />
      <Stack.Screen
        name="MerchantQRScan"
        component={QRScanScreen}
        options={{
          headerTitle: 'ENTI-CODE SCAN',
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
          headerTintColor: '#E4E4E4',
        }}
      />
      <Stack.Screen
        name="MerchantOrderInfo"
        component={OrderInfoScreen}
        options={{
          headerTitle: 'ORDER INFO',
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
          headerTintColor: '#E4E4E4',
        }}
      />
    </Stack.Navigator>
  );
};

export default MerchantScreenNavigator;

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
