import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

// export const TopNavigation = ({navigation}: any) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.logo}>ENTITABASE</Text>
//       <Button title={'Search'} onPress={() => navigation.navigate('Search')} />
//     </View>
//   );
// };

export const GameSearchScreen = () => {
  return <Text>遊戲搜尋</Text>;
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
