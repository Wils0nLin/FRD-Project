import React, {ReactNode} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ProfileScreen} from './pages/searchScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const TopNavigation = ({navigation}: any) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.logo}>ENTITABASE</Text>
        <Button
          title={'Search'}
          onPress={() => navigation.navigate('Search')}
        />
      </View>
    </View>
  );
};

// const SearchStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Hello"
//         component={TopNavigation}
//         options={{
//           headerShown: false,
//         }}
//       />
//       <Stack.Screen name="Search" component={ProfileScreen} />
//     </Stack.Navigator>
//   );
// };

//try
const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Hello" component={TopNavigation} options={{}} />
      <Stack.Screen name="Search" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

//
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 60,
    backgroundColor: '#202124',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  search: {
    fontSize: 16,
    color: '#000000',
  },
});

export default SearchStack;
