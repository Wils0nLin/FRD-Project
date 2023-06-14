import {Button, Input, Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet} from 'react-native';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';

const LogIn = ({navigation}: any) => {
  const [value, setValue] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const renderIcon = (): React.ReactElement => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Entypo name="eye-with-line" size={30} color={'rgb(240,240,240)'} />
    </TouchableWithoutFeedback>
  );
  const toggleSecureEntry = (): void => {
    setSecureTextEntry(!setSecureTextEntry);
  };

  return (
    <ScrollView style={{backgroundColor: 'rgb(40,40,40)'}}>
      <Layout style={styles.layout}>
        <Layout style={styles.items}>
          <Text style={styles.text}>帳號名稱：</Text>
          <Input
            value={value}
            placeholder="Place your username"
            onChangeText={nextValue => setValue(nextValue)}
            style={{backgroundColor: 'rgb(40,40,40)'}}
          />
        </Layout>
        <Layout style={styles.items}>
          <Text style={styles.text}>密碼：</Text>
          <Input
            value={value}
            placeholder="Place your password"
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={nextValue => setValue(nextValue)}
            style={{backgroundColor: 'rgb(40,40,40)'}}
          />
        </Layout>
        <Layout style={styles.row}>
          <Button
            style={styles.button}
            onPress={() => navigation.navigate('Tabs')}>
            登入
          </Button>
          <Button
            style={styles.button}
            onPress={() => navigation.navigate('ConRes')}>
            Con登記
          </Button>
          <Button
            style={styles.button}
            onPress={() => navigation.navigate('MerRes')}>
            Mer登記
          </Button>
        </Layout>
      </Layout>
    </ScrollView>
  );
};
export default LogIn;
const styles = StyleSheet.create({
  layout: {
    alignSelf: 'center',
    marginVertical: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(40,40,40)',
    borderColor: 'rgb(121,35,231)',
    borderWidth: 5,
    width: '90%',
    padding: 10,
    paddingBottom: 30,
    borderRadius: 15,
  },
  items: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'rgb(40,40,40)',
    width: '80%',
    marginVertical: 10,
  },
  text: {
    color: '#e4e4e4',
    fontSize: 25,
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'rgb(40,40,40)',
  },
  button: {
    marginTop: 30,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(30,30,30)',
    borderColor: 'rgb(121,35,231)',
  },
});
