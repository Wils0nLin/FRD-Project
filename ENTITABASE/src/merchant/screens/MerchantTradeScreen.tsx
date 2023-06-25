/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native';

import MerTradeRecordModal from '../modals/MerTradeRecordModal';

import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import MerchantForehead from '../../objects/MerchantForeheadView';
import {IRootState} from '../../app/store';
import {IP_Of_LOCAL} from '../../../IP';

interface record {
  amount: number;
  product_name: string;
  version: string;
}

export default function TradeScreen({}) {
  const userId = useSelector((state: IRootState) => state.auth.userId);
  const [name, setName] = useState('');
  const [list, setList] = useState<Array<any>>([]);
  const [infoList, setInfoList] = useState<Array<record>>([]);

  let tradeItem: Array<any> = [];

  useEffect(() => {
    const getData = async () => {
      let dataArr: any;
      let id: any;
      console.log(userId);
      await fetch(`http://${IP_Of_LOCAL}:3000/merchant/userInfo/${userId}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      })
        .then(response => response.json())
        .then(data => {
          setName(data[0].merchant_name);
          id = data[0].id;
          console.log(id);
        });

      await fetch(`http://${IP_Of_LOCAL}:3000/merchant/orderRecord/${id}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      })
        .then(response => response.json())
        .then(data => {
          setList(data);
          dataArr = data;
        });

      for (let item of dataArr) {
        let form = {
          conId: item.id,
          merId: id,
          create_time: item.create_time,
        };

        await fetch(`http://${IP_Of_LOCAL}:3000/merchant/tradeInfo/`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(form),
        })
          .then(r => r.json())
          .then(d => tradeItem.push(d));
      }

      setInfoList(tradeItem);

      console.log(infoList);
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
          <Text style={{fontSize: 20}}>過往交易</Text>
          <View style={styles.pageTitleLine} />
        </View>
        <View style={{width: 350, marginBottom: 100}}>
          {list.map(items => (
            <MerTradeRecordModal
              recordArr={infoList[list.indexOf(items)]}
              name={items.consumer_name}
              order={items.numberoforders}
              amount={items.amountoforders}
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
