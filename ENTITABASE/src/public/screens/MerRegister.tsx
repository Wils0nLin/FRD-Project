/* eslint-disable react-native/no-inline-styles */
import {Button, Input, Layout, Text} from '@ui-kitten/components';
import React, {useState} from 'react';
import {Alert, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import {ScrollView} from 'react-native';
import axios from 'axios';
import {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
const MerRegister = () => {
  const [Name, setName] = React.useState('');
  const [Username, setUsername] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [ConfrimePass, setConfrimPass] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [Phone, setPhone] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [selectedImage, setSelectedImage] =
    useState<ImagePickerResponse | null>(null);

  const renderIcon = (): React.ReactElement => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Entypo name="eye-with-line" size={30} color={'rgb(240,240,240)'} />
    </TouchableWithoutFeedback>
  );
  const toggleSecureEntry = (): void => {
    setSecureTextEntry(!setSecureTextEntry);
  };

  const handleImageSelection = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxHeight: 100,
        maxWidth: 100,
      },
      response => {
        if (response.didCancel) {
          console.log('用户取消了选择');
        } else if (response.errorMessage) {
          console.log('选择图片时出现错误:', response.errorMessage);
        } else {
          // 图片选择成功
          setSelectedImage(response);
          console.log('handle selected data check', selectedImage);
          uploadImage(response);
        }
      },
    );
  };

  const uploadImage = async (response: ImagePickerResponse) => {
    // const folderName = '../../utils/merUpload/';
    const newFileName = `image${Date.now()}.jpg`; // 替换为新的文件名

    console.log('check hi', response);
    const formData = new FormData();
    formData.append('file', {
      uri: response.assets![0].uri,
      type: 'image/jpeg/jpg',
      name: newFileName,
    });

    console.log('formData', formData);

    try {
      // const uploadResponse =
      await fetch('http://192.168.160.142:3000/public/register/merRegister', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      // console.log('Upload successful:', uploadResponse.data);
      Alert.alert('Upload successful', 'Image uploaded successfully');
    } catch (error) {
      console.log('Upload failed:', error);
      Alert.alert('Upload failed', 'Image upload failed');
    }
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
          <Button style={styles.button}>提交</Button>
          <Button onPress={handleImageSelection}>选择图片</Button>
        </Layout>
      </Layout>
    </ScrollView>
  );
};
export default MerRegister;
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
