/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {StarRatingDisplay} from 'react-native-star-rating-widget';

import {IRootState} from '../app/store';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCom from 'react-native-vector-icons/MaterialCommunityIcons';

type cardInfo = {
  id: number;
  merId: number;
  merName: string;
  proName: string;
  version: string;
  status: string;
  price: number;
};

export default function ProductItemCard(props: cardInfo) {
  const navigation = useNavigation<any>();
  const login = useSelector((state: IRootState) => state.auth.isAuth);
  const userId = useSelector((state: IRootState) => state.auth.userId);
  const [loginVisible, setLoginVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [conId, setConId] = useState('');
  const [QRcode, setQRcode] = useState('');

  const Submit = async () => {
    if (!login) {
      setLoginVisible(true);
    } else {
      const form = {
        consumer_id: conId,
        itemId: props.id,
        QRcode: QRcode,
        amount: props.price,
        order_status: false,
        payment: false,
        create_time: ('' + new Date().toISOString()).slice(0, 10),
      };
      console.log(form);
      const resp = await fetch('http://13.213.207.204/consumer/order/create', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form),
      });
      const data = await resp.json();
      if (data === true) {
        setModalVisible(true);
      } else {
        Alert.alert('加入失敗', '請核對商品資料');
      }
    }
  };

  useEffect(() => {
    const getData = async () => {
      await fetch(`http://13.213.207.204/consumer/userInfo/${userId}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      })
        .then(response => response.json())
        .then(data => {
          setConId(data[0].id);
          setQRcode(data[0].QRcode);
        });
    };

    getData();
  }, []);

  return (
    <View style={styles.screenCardBackground}>
      <View style={styles.screenCardLine} />
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{fontSize: 18, color: '#E4E4E4', width: 150}}
            numberOfLines={1}>
            {props.merName}
          </Text>
          <StarRatingDisplay rating={5} starSize={20} color={'#defe47'} />
        </View>
        <View style={styles.screenCardInfo}>
          <FontAwesome5 name={'cube'} size={15} color={'#E4E4E4'} />
          <Text style={styles.screenCardText1} numberOfLines={1}>
            {props.proName + ' ' + props.version}
          </Text>
        </View>

        <Text style={styles.screenCardText2}>{props.status}</Text>
      </View>
      <View style={{alignItems: 'flex-end', justifyContent: 'space-between'}}>
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={loginVisible}
            onRequestClose={() => {
              setLoginVisible(!loginVisible);
            }}>
            <View style={styles.modalBackground}>
              <View style={styles.modalStyle}>
                <View>
                  <View style={styles.pageTitle}>
                    <Text style={{fontSize: 20, color: '#E4E4E4'}}>登入</Text>
                    <View style={styles.pageTitleLine} />
                  </View>
                  <View style={styles.modalSimple}>
                    <View style={styles.modalWarningIcon}>
                      <FontAwesome5
                        name={'exclamation'}
                        size={50}
                        color={'#E4E4E4'}
                      />
                    </View>
                    <Text style={styles.modalMainText}>請先登入</Text>
                  </View>
                  <View style={styles.modalButtonBox}>
                    <TouchableOpacity
                      style={styles.modalButtonConfirm}
                      onPress={() => {
                        setLoginVisible(!modalVisible);
                        navigation.navigate('LogIn');
                      }}>
                      <FontAwesome5
                        name={'check'}
                        size={20}
                        color={'#E4E4E4'}
                      />
                      <Text style={styles.buttonTextWithIcon}>確認</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.modalButtonCancel}
                      onPress={() => setLoginVisible(!loginVisible)}>
                      <FontAwesome5
                        name={'times'}
                        size={20}
                        color={'#E4E4E4'}
                      />
                      <Text style={styles.buttonTextWithIcon}>取消</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.modalBackground}>
              <View style={styles.modalStyle}>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={styles.pageTitle}>
                      <Text style={{fontSize: 20}}>成功加入</Text>
                      <View style={styles.pageTitleLine} />
                    </View>
                    <TouchableOpacity
                      style={{margin: 5, marginHorizontal: 10}}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <FontAwesome5
                        name={'times'}
                        size={40}
                        color={'#E4E4E4'}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.modalSimple}>
                    <View style={styles.modalWarningIcon}>
                      <FontAwesome5
                        name={'check'}
                        size={50}
                        color={'#E4E4E4'}
                      />
                    </View>
                    <Text style={styles.modalMainText}>已成功加入購物車</Text>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
          {props.status === '預購中' ? (
            <TouchableOpacity onPress={() => Submit()}>
              <MaterialCom
                name={'cart-arrow-down'}
                size={30}
                color={'#E4E4E4'}
              />
            </TouchableOpacity>
          ) : (
            <View style={{height: 1}} />
          )}
        </View>
        <Text style={{fontSize: 20}}>HK$ {props.price}.00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenCardBackground: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 8,
    padding: 5,
    paddingHorizontal: 10,
    height: 90,
    borderRadius: 10,
    backgroundColor: '#rgba(255,255,255,0.25)',
  },
  screenCardLine: {
    position: 'absolute',
    bottom: 6,
    left: 50,
    width: 150,
    borderBottomWidth: 3,
    borderColor: '#7A04EB',
  },
  screenCardInfo: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    top: 26,
    left: 10,
    width: 260,
  },
  screenCardText1: {marginLeft: 5, fontSize: 13, color: '#E4E4E4'},
  screenCardText2: {
    position: 'absolute',
    top: 48,
    left: 15,
    fontSize: 13,
    color: '#E4E4E4',
    backgroundColor: '#202124',
    padding: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
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
  pageTitle: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 10,
    paddingLeft: 10,
    borderLeftWidth: 3,
    borderColor: '#7D7D7D',
  },
  modalSimple: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 320,
    marginLeft: 5,
  },
  pageTitleLine: {
    position: 'absolute',
    bottom: -3,
    left: 60,
    width: 100,
    borderBottomWidth: 3,
    borderColor: '#7A04EB',
  },
  modalMainText: {
    fontSize: 17,
    margin: 10,
    marginBottom: 20,
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
});
