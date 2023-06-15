/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Modal, Text, View, TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function TradeRecordModal() {
  const [modalVisible, setModalVisible] = useState(false);

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
                  <Text style={{fontSize: 20}}>交易詳情</Text>
                  <View style={styles.pageTitleLine} />
                </View>
                <TouchableOpacity
                  style={{margin: 5, marginHorizontal: 10}}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Icon name={'times'} size={40} color={'#E4E4E4'} />
                </TouchableOpacity>
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
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.screenCardBackground}>
          <View style={styles.screenCardLine} />
          <View style={styles.screenCardIcon}>
            <Icon name={'receipt'} size={25} color={'#E4E4E4'} solid />
          </View>
          <View>
            <Text style={{width: 165, fontSize: 20}} numberOfLines={1}>
              KA HEUNG LIN
            </Text>
            <View style={styles.screenCardInfo}>
              <View style={styles.screenCardList}>
                <View style={styles.screenCardListIcon}>
                  <Icon name={'cube'} size={15} color={'#E4E4E4'} solid />
                </View>
                <Text style={{fontSize: 17}}>共 3 件商品</Text>
              </View>
              <View style={styles.screenCardList}>
                <View style={styles.screenCardListIcon}>
                  <Icon
                    name={'dollar-sign'}
                    size={15}
                    color={'#E4E4E4'}
                    solid
                  />
                </View>
                <Text style={{fontSize: 17}}>已收金額 HK$ 2,000.00</Text>
              </View>
            </View>
          </View>
          <Text style={{paddingTop: 5}}>2023年6月3日</Text>
        </View>
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
  subTitleText: {width: 80, marginLeft: 10, fontSize: 17},
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
  updateNameText: {marginLeft: 8, fontSize: 20},
  orderItemText: {marginLeft: 3, width: 170, fontSize: 15},
  orderInfoText: {marginLeft: 3, fontSize: 15},
  orderMainText: {marginLeft: 3, fontSize: 25},
});
