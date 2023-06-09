import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const TopNavigation = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.logo}>ENTITABASE</Text>
        <Text style={styles.search}>Search</Text>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 60,
    backgroundColor: '#ffffff',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  search: {
    fontSize: 16,
    color: '#000000',
  },
});

export default TopNavigation;
