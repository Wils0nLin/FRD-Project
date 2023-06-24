/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native';
import {useState, useEffect} from 'react';
import PaymentConfirmModal from '../modals/PaymentConfirmModal';

import {useSelector} from 'react-redux';
import MerchantForehead from '../../objects/MerchantForeheadView';
import {IRootState} from '../../app/store';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function OrderInfoScreen() {
  const userId = useSelector((state: IRootState) => state.auth.userId);
  const [name, setName] = useState('');

  const getData = async () => {
    const resp = await fetch(
      `http://13.213.207.204/merchant/userInfo/${userId}`,
      {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      },
    );
    const data = await resp.json();
    console.log(data);
    setName(data[0].merchant_name);
  };
  useEffect(() => {
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
          <Text style={{fontSize: 20}}>訂單詳情</Text>
          <View style={styles.pageTitleLine} />
        </View>
        <View style={styles.subTitle}>
          <Icon name={'shopping-bag'} size={15} color={'#E4E4E4'} />
          <Text style={styles.subTitleText}>買家</Text>
        </View>
        <TouchableOpacity style={styles.modalUpdateName}>
          <Text style={styles.updateNameText}>KA HEUNG LIN</Text>
        </TouchableOpacity>
        <View style={styles.doubleSupTitle}>
          <View style={styles.miniTitle}>
            <Icon name={'cube'} size={15} color={'#E4E4E4'} />
            <Text style={styles.subTitleText}>商品項目</Text>
          </View>
          <View style={styles.miniTitle}>
            <Icon name={'dollar-sign'} size={15} color={'#E4E4E4'} />
            <Text style={styles.subTitleText}>金額</Text>
          </View>
        </View>
        <View style={{marginBottom: 5}}>
          <View style={styles.modalItemBox}>
            <Text style={styles.orderItemText}>寶可夢 朱</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name={'times'} size={10} color={'#E4E4E4'} />
              <Text style={styles.orderInfoText}>1</Text>
            </View>
            <Text style={styles.orderInfoText}>200.00</Text>
          </View>
          <View style={styles.modalItemBox}>
            <Text style={styles.orderItemText}>寶可夢 紫</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name={'times'} size={10} color={'#E4E4E4'} />
              <Text style={styles.orderInfoText}>1</Text>
            </View>
            <Text style={styles.orderInfoText}>200.00</Text>
          </View>
          <View style={styles.modalItemBox}>
            <Text style={styles.orderItemText}>寶可夢 朱／紫 雙包裝</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name={'times'} size={10} color={'#E4E4E4'} />
              <Text style={styles.orderInfoText}>1</Text>
            </View>
            <Text style={styles.orderInfoText}>200.00</Text>
          </View>
          <View style={styles.modalOrderBox}>
            <Text style={styles.orderMainText}>總金額：</Text>
            <Text style={styles.orderMainText}>HK$ 600.00</Text>
          </View>
        </View>
        <View style={styles.pageTitle}>
          <Text style={{fontSize: 20}}>收款方式</Text>
          <View style={styles.pageTitleLine} />
        </View>
        <View style={{flexDirection: 'row', width: 350}}>
          <PaymentConfirmModal />
          <TouchableOpacity style={styles.screenButtonFor3}>
            <Icon name={'cubes'} size={25} color={'#E4E4E4'} />
            <Text>信用卡</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.screenButtonFor3}>
            <Icon name={'plus-square'} size={25} color={'#E4E4E4'} solid />
            <Text>銀行過數</Text>
          </TouchableOpacity>
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
  updateNameText: {marginLeft: 8, fontSize: 20},
  subTitle: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5,
    marginBottom: 0,
    marginTop: 10,
    paddingLeft: 10,
    width: 350,
  },
  doubleSupTitle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5,
    marginTop: 10,
    width: 350,
    paddingLeft: 5,
  },
  miniTitle: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5,
    marginBottom: 0,
    marginTop: 10,
    width: 255,
  },
  subTitleText: {width: 80, marginLeft: 10, fontSize: 20},
  modalUpdateName: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 10,
    marginHorizontal: 8,
    paddingHorizontal: 10,
    width: 350,
    height: 45,
    borderBottomWidth: 2,
    borderColor: '#7D7D7D',
  },
  modalItemBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
    marginHorizontal: 30,
    width: 300,
  },
  modalOrderBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 3,
    marginBottom: 20,
    marginHorizontal: 8,
    paddingHorizontal: 20,
    width: 350,
    borderTopWidth: 2,
    borderTopColor: '#7D7D7D',
  },
  orderItemText: {marginLeft: 3, width: 170, fontSize: 15},
  orderInfoText: {marginLeft: 3, fontSize: 15},
  orderMainText: {marginLeft: 3, fontSize: 25},
  screenButtonFor3: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    width: 101,
    height: 55,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
});
