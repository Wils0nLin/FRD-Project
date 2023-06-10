import {StyleSheet} from 'react-native';

const Sharedstyle = StyleSheet.create({
  container: {
    padding: 5,
    display: 'flex',
    flexDirection: 'column',
  },
  block: {
    borderColor: 'E4E4E4',
    borderWidth: 2,
    padding: 5,
  },
  buttonTrue: {
    borderColor: 'rbg(79,152,111)',
    borderWidth: 1,
    padding: 5,
  },
  buttonFalse: {
    borderColor: 'rbg(169,41,82)',
    borderWidth: 1,
    padding: 5,
  },
});

export default Sharedstyle;
