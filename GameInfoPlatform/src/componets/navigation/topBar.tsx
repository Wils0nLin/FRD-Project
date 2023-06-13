import React, {ReactNode} from 'react';
import {View, Text, StyleSheet, Button, TouchableHighlight} from 'react-native';
import {GameSearchScreen} from './pages/searchScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {SvgUri} from 'react-native-svg';
import SearchLogoSVG from '../../assets/SearchLogoSVG';

const Stack = createNativeStackNavigator();

export const TopNavigation = ({navigation}: any) => {
  return (
    <View>
      <View style={topBarStyles.container}>
        <Text style={topBarStyles.logo}>ENTITABASE</Text>
        <SearchLogoSVG
          title={'Search'}
          onPress={() => navigation.navigate('Search')}
          width="60%"
          height="60%"
          fill="#E4E4E4"
          style={searchLogoStyle.container}
        />
      </View>
    </View>
  );
};

//try
const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Hello" component={TopNavigation} options={{}} />
      <Stack.Screen name="Search" component={GameSearchScreen} />
    </Stack.Navigator>
  );
};

//

//style
const topBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 40,
    backgroundColor: '#202124',
    borderBottomColor: '#7D7D7D',
    borderWidth: 1,
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
});

export const searchLogoStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 270,
  },
});

//
export default SearchStack;
