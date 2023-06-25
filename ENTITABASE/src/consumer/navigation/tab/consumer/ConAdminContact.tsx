/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';

import ForeheadView from '../../../../objects/MerchantForeheadView';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function AdminContactScreen({ }) {
  return (
    <ScrollView
      style={{
        backgroundColor: '#2A2E32',
      }}>
      <SafeAreaView style={styles.safeArea}>
        {ForeheadView({ name: "user" })}
        <View style={styles.pageTitle}>
          <Text style={{ fontSize: 20 }}>聯絡網站管理員</Text>
          <View style={styles.pageTitleLine} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Icon name={'lightbulb'} size={20} color={'#E4E4E4'} solid />
          <Text style={{ fontSize: 15, marginLeft: 10 }}>
            如有任何疑問，歡迎透過電郵聯絡網站管理員
          </Text>
        </View>
        <View style={{ marginTop: 50, alignItems: 'center' }}>
          <Icon name={'headphones'} size={50} color={'#E4E4E4'} solid />
          <Text style={{ fontSize: 25 }}>adminemail@gmail.com</Text>
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
});
