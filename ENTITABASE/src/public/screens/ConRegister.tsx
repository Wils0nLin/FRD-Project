/* eslint-disable react-native/no-inline-styles */
import {Button, Input, Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {Alert, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import {ScrollView} from 'react-native';
import axios from 'axios';

const ConRegister = () => {
  const [Name, setName] = React.useState('');
  const [Username, setUsername] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [ConfrimePass, setConfrimPass] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [Phone, setPhone] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const renderIcon = (): React.ReactElement => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Entypo name="eye-with-line" size={30} color={'rgb(240,240,240)'} />
    </TouchableWithoutFeedback>
  );
  const toggleSecureEntry = (): void => {
    setSecureTextEntry(!setSecureTextEntry);
  };
  const rNumber = Math.floor(Math.random() * 10);

  function makeId(length: any) {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    console.log(result);

    return result;
  }

  const Submit = () => {
    const form = {
      username: Username,
      password: Password,
      email: Email,
      QRcode: makeId(rNumber),
      consumer_name: Name,
      consumer_phone: Phone,
    };
    axios
      .post('http://192.168.160.142:3000/public/conRegister', form)
      .then(function (response) {
        console.log(response);
        Alert.alert('success', `${response}`);
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert('Failed', `${error}`);
      });
    console.log(form);
  };
  return (
    <ScrollView style={{backgroundColor: 'rgb(40,40,40)'}}>
      <Layout style={styles.layout}>
        <Layout style={styles.items}>
          <Text style={styles.text}>姓名：</Text>
          <Input
            value={Name}
            placeholder="Place your password"
            onChangeText={nextValue => setName(nextValue)}
            style={{backgroundColor: 'rgb(40,40,40)'}}
          />
        </Layout>
        <Layout style={styles.items}>
          <Text style={styles.text}>帳號名稱：</Text>
          <Input
            value={Username}
            placeholder="Place your username"
            onChangeText={nextValue => setUsername(nextValue)}
            style={{backgroundColor: 'rgb(40,40,40)'}}
          />
        </Layout>
        <Layout style={styles.items}>
          <Text style={styles.text}>密碼：</Text>
          <Input
            value={Password}
            placeholder="Place your password"
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={nextValue => setPassword(nextValue)}
            style={{backgroundColor: 'rgb(40,40,40)'}}
          />
        </Layout>
        <Layout style={styles.items}>
          <Text style={styles.text}>重新輸入密碼：</Text>
          <Input
            value={ConfrimePass}
            placeholder="Place your password"
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={nextValue => setConfrimPass(nextValue)}
            style={{backgroundColor: 'rgb(40,40,40)'}}
          />
        </Layout>
        <Layout style={styles.items}>
          <Text style={styles.text}>電郵：</Text>
          <Input
            value={Email}
            placeholder="Place your password"
            onChangeText={nextValue => setEmail(nextValue)}
            style={{backgroundColor: 'rgb(40,40,40)'}}
          />
        </Layout>
        <Layout style={styles.items}>
          <Text style={styles.text}>電話：</Text>
          <Input
            value={Phone}
            placeholder="Place your password"
            onChangeText={nextValue => setPhone(nextValue)}
            style={{backgroundColor: 'rgb(40,40,40)'}}
          />
        </Layout>
        <Layout style={styles.row}>
          <Button style={styles.button} onPress={() => Submit()}>
            提交
          </Button>
        </Layout>
      </Layout>
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
