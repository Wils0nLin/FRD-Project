/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {StackParamList} from '../../public/navigators/StackParamList';

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

import Icon from 'react-native-vector-icons/FontAwesome5';

const Stack = createNativeStackNavigator();

const ConsumerScreenNavigator = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ConsumerHome"
        component={ConAppScreen}
        options={{
          headerTitle: 'ENTITÀBASE',
          headerRight: () => (
            <Icon name={'search'} size={30} color={'#E4E4E4'} />
          ),
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
        }}
      />
      <Stack.Screen
        name="ConsumerWish"
        component={ConWishListScreen}
        options={{
          headerBackVisible: false,
          headerTitle: 'WISH LIST',
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
        name="ConsumerQRCode"
        component={ConQRCodeScreen}
        options={{
          headerBackVisible: false,
          headerTitle: 'MY ENTI-CODE',
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
        name="ConsumerCart"
        component={ConsumerCartScreen}
        options={{
          headerBackVisible: false,
          headerTitle: 'MY CART',
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
        name="ConsumerInfo"
        component={ConProfileEditScreen}
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
        name="ConsumerPW"
        component={ConPasswordEditScreen}
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
        name="ConsumerOrder"
        component={ConOrderRecord}
        options={{
          headerBackVisible: false,
          headerTitle: 'ORDER RECORD',
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
        name="ConsumerAdmin"
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
        name="GameSearchScreen"
        component={GameSearchScreen}
        options={{
          headerBackVisible: false,
          headerTitle: 'GAME SEARCH',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('ConsumerHome')}>
              <Icon name={'arrow-left'} size={30} color={'#E4E4E4'} />
            </TouchableOpacity>
          ),
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
        }}
      />
      <Stack.Screen
        name="GameInfo"
        component={ConGameInfoScreen}
        options={{
          headerBackVisible: false,
          headerTitle: 'GAME INFO',
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
        name="ShopInfo"
        component={ConMerInfoScreen}
        options={{
          headerBackVisible: false,
          headerTitle: 'SHOP INFO',
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
