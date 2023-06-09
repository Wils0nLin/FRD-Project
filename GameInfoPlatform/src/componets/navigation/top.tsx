import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ProfileScreen, TopNavigation} from './pages/searchScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// const TopNavigation = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.logo}>ENTITABASE</Text>
//       <Text style={styles.search}>Search</Text>
//     </View>
//   );
// };

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Hello"
          component={TopNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Search" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
