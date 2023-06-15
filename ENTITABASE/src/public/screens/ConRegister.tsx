/* eslint-disable react-native/no-inline-styles */
import {
  Button,
  Input,
  Layout,
  Text,
  ApplicationProvider,
} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import React from 'react';
import {StyleSheet, TouchableWithoutFeedback} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import {ScrollView} from 'react-native';

const ConRegister = ({navigation}: any) => {
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
      <ApplicationProvider {...eva} theme={eva.light}>
        <Layout style={styles.layout}>
          <Layout style={styles.items}>
            <Text style={styles.text}>姓名：</Text>
            <Input
              value={value}
              placeholder="Place your password"
              onChangeText={nextValue => setValue(nextValue)}
              style={{backgroundColor: 'rgb(40,40,40)'}}
            />
          </Layout>
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
          <Layout style={styles.items}>
            <Text style={styles.text}>重新輸入密碼：</Text>
            <Input
              value={value}
              placeholder="Place your password"
              accessoryRight={renderIcon}
              secureTextEntry={secureTextEntry}
              onChangeText={nextValue => setValue(nextValue)}
              style={{backgroundColor: 'rgb(40,40,40)'}}
            />
          </Layout>
          <Layout style={styles.items}>
            <Text style={styles.text}>電油：</Text>
            <Input
              value={value}
              placeholder="Place your password"
              onChangeText={nextValue => setValue(nextValue)}
              style={{backgroundColor: 'rgb(40,40,40)'}}
            />
          </Layout>
          <Layout style={styles.items}>
            <Text style={styles.text}>電話：</Text>
            <Input
              value={value}
              placeholder="Place your password"
              onChangeText={nextValue => setValue(nextValue)}
              style={{backgroundColor: 'rgb(40,40,40)'}}
            />
          </Layout>
          <Layout style={styles.row}>
            <Button
              style={styles.button}
              onPress={() => navigation.navigate('Public')}>
              提交
            </Button>
          </Layout>
        </Layout>
      </ApplicationProvider>
    </ScrollView>
  );
};
export default ConRegister;
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
