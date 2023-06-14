/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Modal,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function AddItemModal() {
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
                  <Text style={{fontSize: 20}}>商品確認</Text>
                  <View style={styles.pageTitleLine} />
                </View>
                <Pressable
                  style={{margin: 5, marginHorizontal: 10}}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Icon name={'times'} size={40} color={'#E4E4E4'} />
                </Pressable>
              </View>
              <View style={styles.subTitle}>
                <Icon name={'list'} size={15} color={'#E4E4E4'} />
                <Text style={styles.subTitleText}>遊戲名稱</Text>
              </View>
              <TouchableOpacity style={styles.modalUpdateName}>
                <Icon name={'gamepad'} size={20} color={'#E4E4E4'} />
                <Text style={styles.updateNameText}>寶可夢 朱／紫</Text>
              </TouchableOpacity>
              <View style={styles.subTitle}>
                <Icon name={'cube'} size={15} color={'#E4E4E4'} />
                <Text style={styles.subTitleText}>商品項目</Text>
              </View>
              <View style={{marginBottom: 5}}>
                <View style={styles.modalItemBox}>
                  <Text style={styles.updateItemText}>寶可夢 朱</Text>
                </View>
                <View style={styles.modalItemList}>
                  <View style={styles.subTitle}>
                    <View style={{alignItems: 'center', width: 20}}>
                      <Icon name={'dollar-sign'} size={15} color={'#E4E4E4'} />
                    </View>
                    <Text style={styles.subTitleText}>目標售價：</Text>
                  </View>
                  <Text style={{paddingRight: 10, fontSize: 15}}>
                    HK$ 2,000.00
                  </Text>
                </View>
                <View style={styles.modalItemList}>
                  <View style={styles.subTitle}>
                    <View style={{alignItems: 'center', width: 20}}>
                      <Icon name={'boxes'} size={15} color={'#E4E4E4'} />
                    </View>
                    <Text style={styles.subTitleText}>存貨情況：</Text>
                  </View>
                  <Text style={{paddingRight: 10, fontSize: 15}}>大量現貨</Text>
                </View>
              </View>
              <View style={{marginBottom: 5}}>
                <View style={styles.modalItemBox}>
                  <Text style={styles.updateItemText}>寶可夢 紫</Text>
                </View>
                <View style={styles.modalItemList}>
                  <View style={styles.subTitle}>
                    <View style={{alignItems: 'center', width: 20}}>
                      <Icon name={'dollar-sign'} size={15} color={'#E4E4E4'} />
                    </View>
                    <Text style={styles.subTitleText}>目標售價：</Text>
                  </View>
                  <Text style={{paddingRight: 10, fontSize: 15}}>HK$ 0.00</Text>
                </View>
                <View style={styles.modalItemList}>
                  <View style={styles.subTitle}>
                    <View style={{alignItems: 'center', width: 20}}>
                      <Icon name={'boxes'} size={15} color={'#E4E4E4'} />
                    </View>
                    <Text style={styles.subTitleText}>存貨情況：</Text>
                  </View>
                  <Text style={{paddingRight: 10, fontSize: 15}}>尚有現貨</Text>
                </View>
              </View>
              <View style={{marginBottom: 5}}>
                <View style={styles.modalItemBox}>
                  <Text style={styles.updateItemText}>
                    寶可夢 朱／紫 雙包裝
                  </Text>
                </View>
                <View style={styles.modalItemList}>
                  <View style={styles.subTitle}>
                    <View style={{alignItems: 'center', width: 20}}>
                      <Icon name={'dollar-sign'} size={15} color={'#E4E4E4'} />
                    </View>
                    <Text style={styles.subTitleText}>目標售價：</Text>
                  </View>
                  <Text style={{paddingRight: 10, fontSize: 15}}>HK$ 0.00</Text>
                </View>
                <View style={styles.modalItemList}>
                  <View style={styles.subTitle}>
                    <View style={{alignItems: 'center', width: 20}}>
                      <Icon name={'boxes'} size={15} color={'#E4E4E4'} />
                    </View>
                    <Text style={styles.subTitleText}>存貨情況：</Text>
                  </View>
                  <Text style={{paddingRight: 10, fontSize: 15}}>少量現貨</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.modalButtonFor1}>
                <Text style={{fontSize: 17}}>確認上架</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={styles.screenButtonFor1}
        onPress={() => setModalVisible(true)}>
        <Text style={{fontSize: 17}}>商品上架</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screenButtonFor1: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    marginBottom: 100,
    width: 340,
    height: 35,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#7A04EB',
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
    paddingRight: 10,
  },
  subTitleText: {width: 80, marginLeft: 10, fontSize: 17},
  modalItemBox: {
    justifyContent: 'center',
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
  modalButtonFor1: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    marginVertical: 15,
    width: 320,
    height: 35,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#7A04EB',
  },
  buttonTextWithIcon: {fontSize: 15, marginLeft: 8},
  updateNameText: {marginLeft: 8, fontSize: 20},
  updateItemText: {
    paddingLeft: 15,
    borderBottomWidth: 2,
    borderColor: '#7D7D7D',
    fontSize: 20,
  },
});
