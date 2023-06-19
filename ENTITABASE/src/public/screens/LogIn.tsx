/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  Alert,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import axios from 'axios';

import {SafeAreaView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PublicForehead from '../../objects/PublicForeheadView';

export default function LogIn({navigation}: any) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);

  const Submit = () => {
    const form = {
      username: username,
      password: password,
    };
    axios
      .post('http://192.168.160.142:3000/public/login', form)
      .then(function (response) {
        console.log(response);
        Alert.alert('success', `${response}`);
        navigation.navigate('Consumer');
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert('Failed', `${error}`);
      });
    console.log(form);
  };

  return (
    <ScrollView
      style={{
        backgroundColor: '#2A2E32',
      }}>
      <SafeAreaView style={styles.safeArea}>
        <PublicForehead />
        <View style={styles.pageTitle}>
          <Text style={{fontSize: 20, color: '#E4E4E4'}}>用戶登入</Text>
          <View style={styles.pageTitleLine} />
        </View>
        <View style={styles.loginBox}>
          <View style={{width: 320}}>
            <View style={styles.inputBox}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{alignItems: 'center', width: 20}}>
                  <FontAwesome5
                    name={'user-lock'}
                    size={15}
                    color={'#E4E4E4'}
                  />
                </View>
                <TextInput
                  style={styles.inputText}
                  onChangeText={nextValue => setUsername(nextValue)}
                  value={username}
                  placeholder="帳戶號碼"
                />
              </View>
            </View>
          </View>
          <View style={{width: 320}}>
            <View style={styles.inputBox}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{alignItems: 'center', width: 20}}>
                  <FontAwesome5 name={'key'} size={15} color={'#E4E4E4'} />
                </View>
                <TextInput
                  style={styles.inputText}
                  onChangeText={nextValue => setPassword(nextValue)}
                  value={password}
                  placeholder="密碼"
                  secureTextEntry={secure}
                />
              </View>
              <TouchableOpacity
                onPress={() => setSecure(!secure)}
                style={{width: 35, alignItems: 'center'}}>
                <FontAwesome5
                  name={secure ? 'eye' : 'eye-slash'}
                  size={25}
                  color={'#E4E4E4'}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{alignItems: 'flex-end', paddingHorizontal: 10}}>
              <Text style={{color: '#E4E4E4'}}>忘記密碼？</Text>
            </TouchableOpacity>
          </View>
          <View style={{width: 320}}>
            <TouchableOpacity
              style={styles.modalButtonFor1}
              onPress={() => {
                navigation.navigate('Consumer');
              }}>
              <Text style={{fontSize: 17, color: '#E4E4E4'}}>登入</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButtonFor1}
              onPress={() => Submit()}>
              <Text style={{fontSize: 17, color: '#E4E4E4'}}>REAL 登入</Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                paddingHorizontal: 10,
              }}>
              <Text style={{color: '#E4E4E4'}}>新用戶？</Text>
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#E4E4E4',
                    borderBottomWidth: 1,
                    borderBottomColor: '#E4E4E4',
                  }}
                  onPress={() => navigation.navigate('ConsumerRegis')}>
                  註冊
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{width: 320, alignItems: 'center'}}>
            <View style={styles.divLine} />
            <Text style={styles.divText}>或</Text>
          </View>
          <View style={{width: 320, marginTop: 10}}>
            <TouchableOpacity
              style={styles.modalButtonFor1}
              onPress={() => {
                navigation.navigate('Merchant');
              }}>
              <Ionicons name={'logo-google'} size={20} color={'#E4E4E4'} />
              <Text style={{marginLeft: 10, fontSize: 17, color: '#E4E4E4'}}>
                GOOGLE 登入
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageTitle: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 10,
    paddingLeft: 10,
    width: 350,
    borderLeftWidth: 3,
    borderColor: '#7D7D7D',
  },
  pageTitleLine: {
    position: 'absolute',
    bottom: -3,
    left: 60,
    width: 100,
    borderBottomWidth: 3,
    borderColor: '#7A04EB',
  },
  subTitle: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5,
    marginBottom: 0,
    marginTop: 10,
    paddingLeft: 10,
    width: 350,
  },
  loginBox: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 30,
    width: 340,
    backgroundColor: '#2A2E32',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#B7C1DE',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 8,
    paddingHorizontal: 10,
    height: 45,
    borderBottomWidth: 2,
    borderColor: '#B7C1DE',
  },
  modalButtonFor1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    marginVertical: 15,
    height: 35,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#7A04EB',
  },
  inputText: {
    fontSize: 17,
    marginLeft: 10,
    padding: 0,
    color: '#E4E4E4',
    width: 200,
  },
  divLine: {
    width: 200,
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: '#E4E4E4',
  },
  divText: {
    position: 'absolute',
    top: 26,
    fontSize: 17,
    paddingHorizontal: 10,
    backgroundColor: '#2A2E32',
  },
});
