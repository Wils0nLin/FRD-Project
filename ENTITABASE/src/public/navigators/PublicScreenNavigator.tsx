/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import ConAppScreen from '../../consumer/navigation/tab/consumer/conAppScreen';
import PublicAdminScreen from '../screens/PublicAdminScreen';
import Login from '../../features/auth/LogIn';
import ConRegister from '../screens/ConRegister';
import MerRegister from '../screens/MerRegister';
import SearchModal from '../../consumer/modals/SearchModal';
import {GameSearchScreen} from '../../consumer/navigation/pages/searchScreen';
import MerchantCenterScreen from '../screens/MerchantCenterScreen';
import ConGameInfoScreen from '../../consumer/navigation/tab/consumer/conGameInfoScreen';
import ConMerInfoScreen from '../../consumer/navigation/tab/consumer/ConMerInfoScreen';
const Stack = createNativeStackNavigator();

const PublicScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PublicHome"
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
        name="PublicAdmin"
        component={PublicAdminScreen}
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
        name="LogIn"
        component={Login}
        options={{
          headerTitle: 'LOG IN',
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
          headerTintColor: '#E4E4E4',
        }}
      />
      <Stack.Screen
        name="ConsumerRegis"
        component={ConRegister}
        options={{
          headerTitle: 'REGISTRATION',
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
          headerTintColor: '#E4E4E4',
        }}
      />
      <Stack.Screen
        name="MerRegister"
        component={MerRegister}
        options={{
          headerTitle: 'REGISTRATION',
          headerStyle: styles.topBarBackground,
          headerTitleStyle: styles.topBarText,
          headerTintColor: '#E4E4E4',
        }}
      />
      <Stack.Screen
        name="MerchantCenter"
        component={MerchantCenterScreen}
        options={{
          headerTitle: 'MERCHANT CENTER',
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

export default PublicScreenNavigator;

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
