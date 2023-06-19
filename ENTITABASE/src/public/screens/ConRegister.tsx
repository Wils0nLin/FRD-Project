/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCom from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import PublicForehead from '../../objects/PublicForeheadView';

export default function ConRegister({navigation}: any) {
  const [Name, setName] = React.useState('');
  const [Username, setUsername] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [ConfirmPass, setConfirmPass] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [Phone, setPhone] = React.useState('');
  const [secure, setSecure] = useState(true);
  const [secureAgain, setSecureAgain] = useState(true);

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
      .post('http://192.168.160.78:3000/public/register/conRegister', form)
      .then(function (response) {
        console.log(response);
        Alert.alert('success', `${response}`);
        navigation.navigate('LogIn');
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
          <Text style={{fontSize: 20, color: '#E4E4E4'}}>用戶註冊</Text>
          <View style={styles.pageTitleLine} />
        </View>
        <View style={{justifyContent: 'center', width: 350}}>
          <View>
            <View style={styles.subTitle}>
              <FontAwesome5 name={'signature'} size={15} color={'#E4E4E4'} />
              <Text style={styles.subTitleText}>姓名</Text>
            </View>
            <View>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={nextValue => setName(nextValue)}
                  value={Name}
                  placeholder="請輸入姓名"
                />
              </View>
            </View>
          </View>
          <View>
            <View style={styles.subTitle}>
              <FontAwesome5 name={'user-lock'} size={15} color={'#E4E4E4'} />
              <Text style={styles.subTitleText}>帳戶號碼</Text>
            </View>
            <View>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={nextValue => setUsername(nextValue)}
                  value={Username}
                  placeholder="請輸入帳戶號碼"
                />
              </View>
            </View>
          </View>
          <View>
            <View style={styles.subTitle}>
              <FontAwesome5 name={'key'} size={15} color={'#E4E4E4'} />
              <Text style={styles.subTitleText}>密碼</Text>
            </View>
            <View>
              <View style={styles.inputBox}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={nextValue => setPassword(nextValue)}
                    value={Password}
                    placeholder="請輸入密碼"
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
            </View>
          </View>
          <View>
            <View style={styles.subTitle}>
              <FontAwesome5 name={'key'} size={15} color={'#E4E4E4'} />
              <Text style={styles.subTitleText}>再次輸入密碼</Text>
            </View>
            <View>
              <View style={styles.inputBox}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={nextValue => setConfirmPass(nextValue)}
                    value={ConfirmPass}
                    placeholder="請再次輸入密碼"
                    secureTextEntry={secureAgain}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => setSecureAgain(!secureAgain)}
                  style={{width: 35, alignItems: 'center'}}>
                  <FontAwesome5
                    name={secureAgain ? 'eye' : 'eye-slash'}
                    size={25}
                    color={'#E4E4E4'}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.subTitle}>
              <FontAwesome5 name={'phone-alt'} size={15} color={'#E4E4E4'} />
              <Text style={styles.subTitleText}>電話號碼</Text>
            </View>
            <View>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={nextValue => setPhone(nextValue)}
                  value={Phone}
                  placeholder="請輸入電話號碼"
                />
              </View>
            </View>
          </View>
          <View>
            <View style={styles.subTitle}>
              <MaterialCom name={'email-outline'} size={20} color={'#E4E4E4'} />
              <Text style={styles.subTitleText}>電郵地址</Text>
            </View>
            <View>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={nextValue => setEmail(nextValue)}
                  value={Email}
                  placeholder="請輸入電郵地址"
                />
              </View>
            </View>
          </View>
          <View style={{alignItems: 'center', width: 350}}>
            <TouchableOpacity
              style={styles.screenButtonFor1}
              onPress={() => Submit()}>
              <Text style={{fontSize: 17, color: '#E4E4E4'}}>註冊</Text>
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
  subTitleText: {marginLeft: 10, fontSize: 17, color: '#E4E4E4'},
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
    paddingLeft: 10,
    paddingRight: 10,
    height: 45,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
  screenButtonFor1: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    marginTop: 20,
    marginBottom: 100,
    width: 335,
    height: 35,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#7A04EB',
  },
  textInput: {fontSize: 17, padding: 0, color: '#E4E4E4', width: 250},
});
