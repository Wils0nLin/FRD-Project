/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {StackParamList} from '../../public/navigators/StackParamList';

import AddScreen from '../screens/AddScreen';
import ArriveScreen from '../screens/ArriveScreen';
import CommentScreen from '../screens/CommentScreen';
import HomeScreen from '../screens/MerchantHomeScreen';
import ItemScreen from '../screens/MerchantItemScreen';
import PreOrderItemScreen from '../screens/MerchantPreOrderItemScreen';
import PreOrderScreen from '../screens/MerchantPreOrderScreen';
import TradeScreen from '../screens/MerchantTradeScreen';
import InfoEditScreen from '../screens/MerchantInfoEditScreen';
import AnnoEditScreen from '../screens/AnnoEditScreen';
import BREditScreen from '../screens/BREditScreen';
import PasswordScreen from '../screens/MerchantPasswordScreen';
import AdminContactScreen from '../screens/MerchantAdminContactScreen';
import QRScanScreen from '../screens/ScanScreen';
import OrderInfoScreen from '../screens/MerchantOrderInfoScreen';

import SearchModal from '../modals/MerchantSearchModal';

import Icon from 'react-native-vector-icons/FontAwesome5';

const Stack = createNativeStackNavigator();

const MerchantScreenNavigator = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MerchantHome"
        component={HomeScreen}
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
          headerBackVisible: false,
          headerTitle: 'PRODUCT LIST',
          headerRight: () => (
            <TouchableOpacity onPress={navigation.goBack}>
              <Icon name={'arrow-left'} size={30} color={'#E4E4E4'} />
            </TouchableOpacity>
          ),
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
        }}
      />
      <Stack.Screen
        name="MerchantAdd"
        component={AddScreen}
        options={{
          headerBackVisible: false,
          headerTitle: 'PRODUCT RELEASE',
          headerRight: () => (
            <TouchableOpacity onPress={navigation.goBack}>
              <Icon name={'arrow-left'} size={30} color={'#E4E4E4'} />
            </TouchableOpacity>
          ),
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
        }}
      />
      <Stack.Screen
        name="MerchantTrade"
        component={TradeScreen}
        options={{
          headerBackVisible: false,
          headerTitle: 'TRADE RECORD',
          headerRight: () => (
            <TouchableOpacity onPress={navigation.goBack}>
              <Icon name={'arrow-left'} size={30} color={'#E4E4E4'} />
            </TouchableOpacity>
          ),
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
        }}
      />
      <Stack.Screen
        name="MerchantPreOrderItem"
        component={PreOrderItemScreen}
        options={{
          headerBackVisible: false,
          headerTitle: 'PRE-ORDER ITEM',
          headerRight: () => (
            <TouchableOpacity onPress={navigation.goBack}>
              <Icon name={'arrow-left'} size={30} color={'#E4E4E4'} />
            </TouchableOpacity>
          ),
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
        }}
      />
      <Stack.Screen
        name="MerchantPreOrder"
        component={PreOrderScreen}
        options={{
          headerBackVisible: false,
          headerTitle: 'PRE-ORDER',
          headerRight: () => (
            <TouchableOpacity onPress={navigation.goBack}>
              <Icon name={'arrow-left'} size={30} color={'#E4E4E4'} />
            </TouchableOpacity>
          ),
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
        }}
      />
      <Stack.Screen
        name="MerchantComment"
        component={CommentScreen}
        options={{
          headerBackVisible: false,
          headerTitle: 'COMMENT',
          headerRight: () => (
            <TouchableOpacity onPress={navigation.goBack}>
              <Icon name={'arrow-left'} size={30} color={'#E4E4E4'} />
            </TouchableOpacity>
          ),
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
        }}
      />
      <Stack.Screen
        name="MerchantArrive"
        component={ArriveScreen}
        options={{
          headerBackVisible: false,
          headerTitle: 'NEW ARRIVE',
          headerRight: () => (
            <TouchableOpacity onPress={navigation.goBack}>
              <Icon name={'arrow-left'} size={30} color={'#E4E4E4'} />
            </TouchableOpacity>
          ),
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
        }}
      />
      <Stack.Screen
        name="MerchantInfo"
        component={InfoEditScreen}
        options={{
          headerBackVisible: false,
          headerTitle: 'INFO EDIT',
          headerRight: () => (
            <TouchableOpacity onPress={navigation.goBack}>
              <Icon name={'arrow-left'} size={30} color={'#E4E4E4'} />
            </TouchableOpacity>
          ),
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
        }}
      />
      <Stack.Screen
        name="Announcement"
        component={AnnoEditScreen}
        options={{
          headerBackVisible: false,
          headerTitle: 'ANNOUNCEMENT',
          headerRight: () => (
            <TouchableOpacity onPress={navigation.goBack}>
              <Icon name={'arrow-left'} size={30} color={'#E4E4E4'} />
            </TouchableOpacity>
          ),
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
        }}
      />
      <Stack.Screen
        name="MerchantBR"
        component={BREditScreen}
        options={{
          headerBackVisible: false,
          headerTitle: 'BUSINESS EDIT',
          headerRight: () => (
            <TouchableOpacity onPress={navigation.goBack}>
              <Icon name={'arrow-left'} size={30} color={'#E4E4E4'} />
            </TouchableOpacity>
          ),
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
        }}
      />
      <Stack.Screen
        name="MerchantPW"
        component={PasswordScreen}
        options={{
          headerBackVisible: false,
          headerTitle: 'PASSWORD RESET',
          headerRight: () => (
            <TouchableOpacity onPress={navigation.goBack}>
              <Icon name={'arrow-left'} size={30} color={'#E4E4E4'} />
            </TouchableOpacity>
          ),
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
        }}
      />
      <Stack.Screen
        name="MerchantAdmin"
        component={AdminContactScreen}
        options={{
          headerBackVisible: false,
          headerTitle: 'CONTACT ADMIN',
          headerRight: () => (
            <TouchableOpacity onPress={navigation.goBack}>
              <Icon name={'arrow-left'} size={30} color={'#E4E4E4'} />
            </TouchableOpacity>
          ),
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
        }}
      />
      <Stack.Screen
        name="MerchantQRScan"
        component={QRScanScreen}
        options={{
          headerTitle: 'ENTI-CODE SCAN',
          headerRight: () => (
            <TouchableOpacity onPress={navigation.goBack}>
              <Icon name={'arrow-left'} size={30} color={'#E4E4E4'} />
            </TouchableOpacity>
          ),
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
        }}
      />
      <Stack.Screen
        name="MerchantOrderInfo"
        component={OrderInfoScreen}
        options={{
          headerBackVisible: false,
          headerTitle: 'ORDER INFO',
          headerRight: () => (
            <TouchableOpacity onPress={navigation.goBack}>
              <Icon name={'arrow-left'} size={30} color={'#E4E4E4'} />
            </TouchableOpacity>
          ),
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
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
