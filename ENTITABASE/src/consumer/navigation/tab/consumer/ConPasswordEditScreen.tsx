/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {IRootState} from '../../../../app/store';
import ConsumerForehead from '../../../../objects/ConsumerForeheadView';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ConPasswordEditScreen = ({navigation}: any) => {
  const userId = useSelector((state: IRootState) => state.auth.userId);
  const [name, setName] = useState('');
  const [origin, setOrigin] = useState('');
  const [newPass, setNewPass] = useState('');
  const [conPass, setConPass] = useState('');
  const [secure, setSecure] = useState(true);
  const [secureTwo, setSecureTwo] = useState(true);
  const [secureThree, setSecureThree] = useState(true);

  const getData = async () => {
    const resp = await fetch(
      `http://10.0.2.2:3000/consumer/userInfo/${userId}`,
      {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      },
    );
    const data = await resp.json();
    setName(data[0].consumer_name);
  };
  useEffect(() => {
    getData();
  }, []);

  const Submit = async () => {
    if (!origin || !newPass || !conPass) {
      Alert.alert('密碼有誤', '密碼不能為空白');
    } else if (newPass !== conPass) {
      Alert.alert('密碼有誤', '兩次密碼須一致');
    } else if (newPass === conPass) {
      const form = {
        originPassword: origin,
        newPassword: newPass,
      };
      const resp = await fetch(
        `http://10.0.2.2:3000/consumer/password/edit/${userId}`,
        {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(form),
        },
      );
      const data = await resp.json();
      if (data === true) {
        Alert.alert('修改成功', '已成功更新用戶資料');
        navigation.navigate('ConsumerHome');
      } else {
        Alert.alert('密碼有誤', '現有密碼不正確');
      }
    }
  };

  return (
    <ScrollView style={{backgroundColor: '#2A2E32'}}>
      <SafeAreaView style={styles.safeArea}>
        <ConsumerForehead name={name} />
        <View style={styles.pageTitle}>
          <Text style={{fontSize: 20, color: '#E4E4E4'}}>更改密碼</Text>
          <View style={styles.pageTitleLine} />
        </View>
        <View style={{justifyContent: 'center', width: 350}}>
          <View>
            <View style={styles.subTitle}>
              <FontAwesome5 name={'lock'} size={15} color={'#E4E4E4'} />
              <Text style={styles.subTitleText}>現有密碼</Text>
            </View>
            <View>
              <View style={styles.inputBox}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={nextValue => setOrigin(nextValue)}
                    value={origin}
                    placeholder="請輸入現有密碼"
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
              <Text style={styles.subTitleText}>輸入新密碼</Text>
            </View>
            <View>
              <View style={styles.inputBox}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={nextValue => setNewPass(nextValue)}
                    value={newPass}
                    placeholder="請輸入新密碼"
                    secureTextEntry={secureTwo}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => setSecureTwo(!secureTwo)}
                  style={{width: 35, alignItems: 'center'}}>
                  <FontAwesome5
                    name={secureTwo ? 'eye' : 'eye-slash'}
                    size={25}
                    color={'#E4E4E4'}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{height: 260}}>
            <View style={styles.subTitle}>
              <FontAwesome5 name={'key'} size={15} color={'#E4E4E4'} />
              <Text style={styles.subTitleText}>再次輸入新密碼</Text>
            </View>
            <View>
              <View style={styles.inputBox}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={nextValue => setConPass(nextValue)}
                    value={conPass}
                    placeholder="請再次輸入新密碼"
                    secureTextEntry={secureThree}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => setSecureThree(!secureThree)}
                  style={{width: 35, alignItems: 'center'}}>
                  <FontAwesome5
                    name={secureThree ? 'eye' : 'eye-slash'}
                    size={25}
                    color={'#E4E4E4'}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{alignItems: 'center', width: 350}}>
            <TouchableOpacity
              style={styles.screenButtonFor1}
              onPress={() => Submit()}>
              <Text style={{fontSize: 17, color: '#E4E4E4'}}>提交修改</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default ConPasswordEditScreen;

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
