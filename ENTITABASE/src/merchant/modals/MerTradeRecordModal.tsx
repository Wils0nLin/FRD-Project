/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Modal, Text, View, TouchableOpacity, StyleSheet} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TradeRecordCard from '../../objects/TradeRecordCard';

type cardInfo = {
  name: string;
  order: number;
  amount: number;
  date: string;
  recordArr: any;
};

export default function MerTradeRecordModal(props: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [list, setList] = useState<Array<any>>(props.recordArr);

  return (
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
                  <Text style={{fontSize: 20, color: '#E4E4E4'}}>交易詳情</Text>
                  <View style={styles.pageTitleLine} />
                </View>
                <TouchableOpacity
                  style={{margin: 5, marginHorizontal: 10}}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <FontAwesome5 name={'times'} size={40} color={'#E4E4E4'} />
                </TouchableOpacity>
              </View>
              <View style={styles.subTitle}>
                <FontAwesome5
                  name={'shopping-bag'}
                  size={15}
                  color={'#E4E4E4'}
                />
                <Text style={styles.subTitleText}>買家</Text>
              </View>
              <TouchableOpacity style={styles.modalUpdateName}>
                <Text style={styles.updateNameText}>{props.name}</Text>
              </TouchableOpacity>
              <View style={styles.doubleSupTitle}>
                <View style={styles.miniTitle}>
                  <FontAwesome5 name={'cube'} size={15} color={'#E4E4E4'} />
                  <Text style={styles.subTitleText}>商品項目</Text>
                </View>
                <View style={styles.miniTitle}>
                  <FontAwesome5
                    name={'dollar-sign'}
                    size={15}
                    color={'#E4E4E4'}
                  />
                  <Text style={styles.subTitleText}>金額</Text>
                </View>
              </View>
              <View style={{marginBottom: 5}}>
                {props.recordArr ? (
                  props.recordArr.map((items: any) => (
                    <View style={styles.modalItemBox}>
                      <Text style={styles.orderItemText}>
                        {items.product_name + ' ' + items.version}
                      </Text>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <FontAwesome5
                          name={'times'}
                          size={10}
                          color={'#E4E4E4'}
                        />
                        <Text style={styles.orderInfoText}>1</Text>
                      </View>
                      <Text style={styles.orderInfoText}>
                        {items.amount}.00
                      </Text>
                    </View>
                  ))
                ) : (
                  <></>
                )}
                <View style={styles.modalOrderBox}>
                  <Text style={styles.orderMainText}>總金額：</Text>
                  <Text style={styles.orderMainText}>
                    HK$ {props.amount}.00
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <TradeRecordCard
          name={props.name}
          order={props.order}
          amount={props.amount}
          date={props.date}
        />
      </TouchableOpacity>
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
  screenCardIcon: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    width: 30,
    paddingTop: 5,
  },
  screenCardInfo: {position: 'absolute', bottom: 6, left: 5, width: 300},
  screenCardList: {alignItems: 'center', flexDirection: 'row'},
  screenCardListIcon: {alignItems: 'center', width: 20, marginRight: 5},
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
    paddingLeft: 10,
  },
  subTitleText: {width: 80, marginLeft: 10, fontSize: 17, color: '#E4E4E4'},
  doubleSupTitle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5,
    marginTop: 10,
    width: 300,
    paddingLeft: 5,
  },
  miniTitle: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5,
    marginBottom: 0,
    marginTop: 10,
    width: 240,
  },
  modalItemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 3,
    marginHorizontal: 30,
    width: 280,
  },
  modalItemList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    width: 280,
  },
  modalItemName: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 10,
    width: 300,
    height: 45,
    borderBottomWidth: 2,
    borderColor: '#7D7D7D',
  },
  modalUpdateName: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 3,
    marginBottom: 10,
    marginHorizontal: 8,
    paddingHorizontal: 10,
    width: 320,
    height: 45,
    borderBottomWidth: 2,
    borderColor: '#7D7D7D',
  },
  modalOrderBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 3,
    marginBottom: 20,
    marginHorizontal: 8,
    paddingHorizontal: 20,
    width: 320,
    borderTopWidth: 2,
    borderTopColor: '#7D7D7D',
  },
  buttonTextWithIcon: {fontSize: 15, marginLeft: 8},
  updateNameText: {marginLeft: 8, fontSize: 20, color: '#E4E4E4'},
  orderItemText: {marginLeft: 3, width: 170, fontSize: 13, color: '#E4E4E4'},
  orderInfoText: {marginLeft: 3, fontSize: 15, color: '#E4E4E4'},
  orderMainText: {marginLeft: 3, fontSize: 25, color: '#E4E4E4'},
});
