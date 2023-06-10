import {Button} from '@ui-kitten/components';
import React from 'react';
import {Text, View} from 'react-native';
import Alerts from '../../../utils/testing/alert';
import SearchStack, {TopNavigation} from '../topBar';

const AppScreen = (navigation: any) => {
  return (
    <View>
      <SearchStack />
      <Text>App Screen</Text>
      {/* <Button onPress={()=>{()=>Alerts}}>TEST</Button> */}
    </View>
  );
};

export default AppScreen;

// try
// import React from 'react';
// import {Text, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import SearchStack, {TopNavigation} from '../topBar';

// const Stack = createStackNavigator();

// const AppScreen = () => {
//   return (
//     <NavigationContainer independent={true}>
//       <Stack.Navigator
//         screenOptions={{
//           header: props => <TopNavigation {...props} />,
//         }}>
//         <Stack.Screen
//           name="Home"
//           component={SearchStack}
//           options={{
//             headerShown: false,
//           }}
//         />
//       </Stack.Navigator>
//       <View>
//         <Text>App Screen</Text>
//       </View>
//     </NavigationContainer>
//   );
// };

// export default AppScreen;

//
