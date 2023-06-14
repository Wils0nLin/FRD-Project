import {StyleSheet} from 'react-native';

export const bottomBarStyles = StyleSheet.create({
  container: {
    width: '25%',
    height: '100%',
    paddingBottom: 28,
    paddingTop: 55,
    paddingLeft: 45,
    paddingRight: 45,
    backgroundColor: 'black',
    alignItems: 'center',
    position: 'relative',
    // top: -25, (搬左去BottomTabBar.tsx嘅qrCodeScreen)
    borderWidth: 4,
    borderColor: '#7a04eb',
    borderRadius: 10,
  },
});
