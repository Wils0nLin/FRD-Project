/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Modal,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';

import {IRootState} from '../../app/store';
import {StackParamList} from '../../public/navigators/StackParamList';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MerchantForehead from '../../objects/MerchantForeheadView';

export default function OrderInfoScreen({route}: any) {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const userId = useSelector((state: IRootState) => state.auth.userId);
  const {QRcode} = route.params;
  const [name, setName] = useState('');
  const [consumer, setConsumer] = useState('');
  const [list, setList] = useState<Array<any>>([]);
  const [price, setPrice] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  let itemPrice = 0;

  const Submit = async () => {
    for (let item of list) {
      const resp = await fetch(
        `http://10.0.2.2:3000/merchant/updateOrder/${item.id}`,
        {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
        },
      );
      const data = await resp.json();
      console.log(data);
    }
    navigation.navigate('MerchantQRScan');
  };

  useEffect(() => {
    const getData = async () => {
      let id: any;
      await fetch(`http://10.0.2.2:3000/merchant/userInfo/${userId}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      })
        .then(response => response.json())
        .then(data => {
          setName(data[0].merchant_name);
          id = data[0].id;
        });

      let form = {
        QRcode: QRcode,
        merId: id,
      };
      await fetch('http://10.0.2.2:3000/merchant/orderInfo/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form),
      })
        .then(response => response.json())
        .then(data => {
          setList(data);
          setConsumer(data[0].consumer_name);
          for (let item of data) {
            itemPrice += item.amount;
          }
          setPrice(itemPrice);
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
          <Text style={{fontSize: 20, color: '#E4E4E4'}}>訂單詳情</Text>
          <View style={styles.pageTitleLine} />
        </View>
        <View style={styles.subTitle}>
          <FontAwesome5 name={'shopping-bag'} size={15} color={'#E4E4E4'} />
          <Text style={styles.subTitleText}>買家</Text>
        </View>
        <TouchableOpacity style={styles.modalUpdateName}>
          <Text style={styles.updateNameText}>{consumer}</Text>
        </TouchableOpacity>
        <View style={styles.doubleSupTitle}>
          <View style={styles.miniTitle}>
            <FontAwesome5 name={'cube'} size={15} color={'#E4E4E4'} />
            <Text style={styles.subTitleText}>商品項目</Text>
          </View>
          <View style={styles.miniTitle}>
            <FontAwesome5 name={'dollar-sign'} size={15} color={'#E4E4E4'} />
            <Text style={styles.subTitleText}>金額</Text>
          </View>
        </View>
        <View style={{marginBottom: 5}}>
          {list.map(items => (
            <View style={styles.modalItemBox}>
              <Text style={styles.orderItemText}>{items.full_name}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesome5 name={'times'} size={10} color={'#E4E4E4'} />
                <Text style={styles.orderInfoText}>1</Text>
              </View>
              <View style={{width: 60, alignItems: 'flex-end'}}>
                <Text style={styles.orderInfoText}>{items.amount}.00</Text>
              </View>
            </View>
          ))}
          <View style={styles.modalOrderBox}>
            <Text style={styles.orderMainText}>總金額：</Text>
            <Text style={styles.orderMainText}>HK$ {price}.00</Text>
          </View>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.modalBackground}>
            <View style={styles.modalStyle}>
              <View style={{alignItems: 'center'}}>
                <View style={{marginLeft: 20}}>
                  <View style={styles.pageTitle}>
                    <Text style={{fontSize: 20, color: '#E4E4E4'}}>
                      確認交易
                    </Text>
                    <View style={styles.pageTitleLine} />
                  </View>
                </View>
                <View style={styles.modalSimple}>
                  <View style={styles.modalWarningIcon}>
                    <FontAwesome5
                      name={'question'}
                      size={50}
                      color={'#E4E4E4'}
                    />
                  </View>
                  <Text style={styles.modalWarningText}>
                    共 {list.length} 件商品，總數：HK$ {price}.00
                  </Text>
                  <Text style={styles.modalMainText}>是否確認客人已取貨？</Text>
                </View>
                <View style={styles.modalButtonBox}>
                  <TouchableOpacity
                    style={styles.modalButtonConfirm}
                    onPress={() => {
                      Submit();
                      setModalVisible(!modalVisible);
                    }}>
                    <FontAwesome5 name={'check'} size={20} color={'#E4E4E4'} />
                    <Text style={styles.buttonTextWithIcon}>確認</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalButtonCancel}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <FontAwesome5 name={'times'} size={20} color={'#E4E4E4'} />
                    <Text style={styles.buttonTextWithIcon}>取消</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>

        <TouchableOpacity
          style={styles.screenButtonFor1}
          onPress={() => setModalVisible(true)}>
          <Text style={{fontSize: 17}}>完成交易</Text>
        </TouchableOpacity>
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
  subTitleText: {width: 80, marginLeft: 10, fontSize: 20, color: '#E4E4E4'},
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
    alignItems: 'center',
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
  orderItemText: {marginLeft: 3, width: 170, fontSize: 13, color: '#E4E4E4'},
  orderInfoText: {
    marginLeft: 3,
    fontSize: 15,
    color: '#E4E4E4',
  },
  orderMainText: {marginLeft: 3, fontSize: 25, color: '#E4E4E4'},
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#rgba(0,0,0,0.8)',
  },
  modalStyle: {
    backgroundColor: '#2A2E32',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 3,
    borderColor: '#ffffff',
    width: 350,
  },
  modalSimple: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 320,
    marginLeft: 5,
  },
  modalMainText: {
    fontSize: 15,
    margin: 10,
    marginBottom: 20,
    color: '#E4E4E4',
  },
  modalWarningText: {
    fontSize: 18,
    marginTop: 10,
    color: '#E4E4E4',
  },
  modalWarningIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: 80,
    height: 80,
    borderColor: '#E4E4E4',
    borderWidth: 5,
    borderRadius: 10,
  },
  modalButtonBox: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginTop: 3,
    marginBottom: 10,
    marginHorizontal: 8,
    width: 320,
  },
  modalButtonConfirm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 155,
    height: 40,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#65DC98',
  },
  modalButtonCancel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 155,
    height: 40,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FF2A6D',
  },
  buttonTextWithIcon: {fontSize: 20, marginLeft: 8, color: '#E4E4E4'},
  screenButtonFor1: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    marginTop: 50,
    marginBottom: 100,
    width: 340,
    height: 35,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#7A04EB',
  },
});
