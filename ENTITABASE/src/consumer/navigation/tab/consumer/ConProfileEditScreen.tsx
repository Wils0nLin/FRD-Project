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
import MaterialCom from 'react-native-vector-icons/MaterialCommunityIcons';

const ConProfileEditScreen = ({navigation}: any) => {
  const userId = useSelector((state: IRootState) => state.auth.userId);
  const [conId, setConId] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [formName, setFormName] = useState('');

  const getData = async () => {
    const resp = await fetch(
      `http://13.213.207.204/consumer/userInfo/${userId}`,
      {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      },
    );
    const data = await resp.json();
    setConId(data[0].id);
    setName(data[0].consumer_name);
    setFormName(data[0].consumer_name);
    setPhone(data[0].consumer_phone);
    setEmail(data[0].email);
  };
  useEffect(() => {
    getData();
  }, []);

  const Submit = async () => {
    const userForm = {
      email: email,
    };
    const conForm = {
      name: formName,
      phone: phone,
    };
    const userResp = await fetch(
      `http://13.213.207.204/consumer/userProfile/edit/${userId}`,
      {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userForm),
      },
    );
    const conResp = await fetch(
      `http://13.213.207.204/consumer/conProfile/edit/${conId}`,
      {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(conForm),
      },
    );
    const userData = await userResp.json();
    const conData = await conResp.json();
    if (userData === true && conData === true) {
      Alert.alert('修改成功', '已成功更新用戶資料');
      navigation.navigate('ConsumerHome');
    } else {
      Alert.alert('資料有誤', '未能更新用戶資料');
    }
  };

  return (
    <ScrollView
      style={{
        backgroundColor: '#2A2E32',
      }}>
      <SafeAreaView style={styles.safeArea}>
        <ConsumerForehead name={name} />
        <View style={styles.pageTitle}>
          <Text style={{fontSize: 20, color: '#E4E4E4'}}>修改用戶資料</Text>
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
                  onChangeText={nextValue => setFormName(nextValue)}
                  value={formName}
                  placeholder={formName}
                />
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
                  value={phone}
                  placeholder={phone}
                />
              </View>
            </View>
          </View>
          <View style={{height: 260}}>
            <View style={styles.subTitle}>
              <MaterialCom name={'email-outline'} size={20} color={'#E4E4E4'} />
              <Text style={styles.subTitleText}>電郵地址</Text>
            </View>
            <View>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={nextValue => setEmail(nextValue)}
                  value={email}
                  placeholder={email}
                />
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
export default ConProfileEditScreen;

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
