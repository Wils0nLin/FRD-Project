/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {IRootState} from '../app/store';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCom from 'react-native-vector-icons/MaterialCommunityIcons';

type cardInfo = {
  id: number;
  name: string;
  platform: string;
  version: string;
  status: string;
  price: string;
};

export default function ConShopItemCard(props: cardInfo) {
  const userId = useSelector((state: IRootState) => state.auth.userId);
  const [modalVisible, setModalVisible] = useState(false);
  const [QRcode, setQRcode] = useState('');

  const getData = async () => {
    const resp = await fetch(
      `http://13.213.207.204/consumer/userInfo/${userId}`,
      {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      },
    );
    const data = await resp.json();
    setQRcode(data[0].QRcode);
  };

  useEffect(() => {
    getData();
  }, []);

  const Submit = async () => {
    const form = {
      QRcode: QRcode,
      item_id: props.id,
      price: props.price,
    };
    console.log(form);
    setModalVisible(true);
    // const resp = await fetch(
    //   `http://13.213.207.204/merchant/update/${props.id}`,
    //   {
    //     method: 'PUT',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify(form),
    //   },
    // );
    // const data = await resp.json();
    // if (data === true) {
    //   Alert.alert('更新成功', '已成功更新商品資料');
    //   setModalVisible(!modalVisible);
    //   navigation.replace('MerchantItem');
    // } else {
    //   Alert.alert('更新失敗', '請核對商品資料');
    // }
  };

  return (
    <View style={styles.screenCardBackground}>
      <View style={styles.screenCardLine} />
      <View style={styles.screenCardImage}>
        <Image
          style={{
            width: 49.41,
            height: 80,
          }}
          source={require('../assets/images/pokemon_purple.png')}
        />
      </View>
      <View style={{flex: 1, marginLeft: 10}}>
        <Text
          style={{width: 165, fontSize: 18, color: '#E4E4E4'}}
          numberOfLines={1}>
          {props.name + ' ' + props.version}
        </Text>
        <Text style={styles.screenCardText1}>遊玩平台：{props.platform}</Text>
        <Text style={styles.screenCardText2}>{props.status}</Text>
      </View>
      <View style={{alignItems: 'flex-end', justifyContent: 'space-between'}}>
        {props.status === '預購中' ? (
          <View>
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

            <TouchableOpacity onPress={() => Submit()}>
              <MaterialCom
                name={'cart-arrow-down'}
                size={30}
                color={'#E4E4E4'}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{height: 10}} />
        )}

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
  screenCardImage: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: 80,
  },
  screenCardText1: {
    position: 'absolute',
    top: 25,
    width: 260,
    fontSize: 13,
    color: '#E4E4E4',
  },
  screenCardText2: {
    position: 'absolute',
    top: 45,
    fontSize: 13,
    color: '#E4E4E4',
    backgroundColor: '#202124',
    padding: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  screenCardState: {
    fontSize: 15,
    backgroundColor: '#202124',
    padding: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
    color: '#E4E4E4',
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
});
