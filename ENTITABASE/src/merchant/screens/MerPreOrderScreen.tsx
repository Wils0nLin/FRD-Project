/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native';

import MerOrderRecordModal from '../modals/MerOrderRecordModal';

import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import MerchantForehead from '../../objects/MerchantForeheadView';
import {IRootState} from '../../app/store';
import {IP_Of_LOCAL} from '../../../IP';

export default function MerPreOrderScreen({route}: any) {
  const userId = useSelector((state: IRootState) => state.auth.userId);
  const {itemId} = route.params;
  const [name, setName] = useState('');
  const [list, setList] = useState<Array<any>>([]);

  useEffect(() => {
    const getData = async () => {
      await fetch(`http://${IP_Of_LOCAL}/merchant/userInfo/${userId}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      })
        .then(response => response.json())
        .then(data => {
          setName(data[0].merchant_name);
        });

      await fetch(`http://${IP_Of_LOCAL}/merchant/preOrderRecord/${itemId}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      })
        .then(response => response.json())
        .then(data => {
          setList(data);
        });
    };
    getData();
  }, []);

  return (
    <ScrollView
      style={{
        backgroundColor: '#2A2E32',
      }}>
      <SafeAreaView style={styles.safeArea}>
        <MerchantForehead name={name} />
        <View style={styles.pageTitle}>
          <Text style={{fontSize: 20}}>預購訂單</Text>
          <View style={styles.pageTitleLine} />
        </View>
        <View style={{width: 350, marginBottom: 100}}>
          {list.map(items => (
            <MerOrderRecordModal
              consumer={items.consumer_name}
              name={items.full_name}
              amount={items.amount}
              date={items.create_time}
            />
          ))}
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
