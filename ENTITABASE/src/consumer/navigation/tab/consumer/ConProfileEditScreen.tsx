/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import ConsumerInfoHeader from '../../ConsumerInfoHeader';
import {ScrollView, StyleSheet, Text} from 'react-native';
import * as eva from '@eva-design/eva';
import {Button, Layout, ApplicationProvider} from '@ui-kitten/components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {InputAccessories} from '../../inputHidden';
import Feather from 'react-native-vector-icons/Feather';

const ConProfileEditScreen = () => {
  return (
    <ScrollView style={{backgroundColor: 'rgb(40,40,40)'}}>
      <ApplicationProvider {...eva} theme={eva.light}>
        {ConsumerInfoHeader('YO')}
        <Text>title wait for wilson</Text>
        <Layout style={styles.left}>
          <Layout style={styles.row}>
            <FontAwesome
              name="user"
              size={30}
              color={'#e4e4e4'}
              style={{paddingTop: 2}}
            />
            <Text style={styles.text}>用戶名稱</Text>
          </Layout>
          <Layout style={{width: '100%', marginTop: 10}}>
            {InputAccessories()}
          </Layout>
        </Layout>
        <Layout style={styles.left}>
          <Layout style={styles.row}>
            <FontAwesome
              name="phone"
              size={30}
              color={'#e4e4e4'}
              style={{paddingTop: 2}}
            />
            <Text style={styles.text}>電話</Text>
          </Layout>
          <Layout style={{width: '100%', marginTop: 10}}>
            {InputAccessories()}
          </Layout>
        </Layout>
        <Layout style={styles.left}>
          <Layout style={styles.row}>
            <Feather
              name="key"
              size={30}
              color={'#e4e4e4'}
              style={{paddingTop: 2}}
            />
            <Text style={styles.text}>請再次輸入新密碼</Text>
          </Layout>
          <Layout style={{width: '100%', marginTop: 10}}>
            {InputAccessories()}
          </Layout>
        </Layout>
        <Layout style={{backgroundColor: 'rgb(40,40,40,)', paddingTop: 50}}>
          <Button style={styles.button} appearance="ghost" status="control">
            提交修改
          </Button>
        </Layout>
      </ApplicationProvider>
    </ScrollView>
  );
};
export default ConProfileEditScreen;

const styles = StyleSheet.create({
  row: {
    backgroundColor: 'rgb(40,40,40)',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  left: {
    marginTop: 30,
    backgroundColor: 'rgb(40,40,40)',
    alignItems: 'flex-start',
    width: '90%',
    alignSelf: 'center',
  },
  text: {
    color: '#e4e4e4',
    paddingLeft: 10,
    fontSize: 25,
  },
  button: {
    alignSelf: 'center',
    color: '#e4e4e4',
    width: '50%',
    borderWidth: 5,
    borderColor: 'rgb(106,31,203)',
  },
});