/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Modal, Text, View, TouchableOpacity, StyleSheet} from 'react-native';

import MerchantItemCard from '../objects/MerchantItemCard';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function ItemCardModal() {
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
              <View style={styles.pageTitle}>
                <Text style={{fontSize: 20}}>商品下架</Text>
                <View style={styles.pageTitleLine} />
              </View>
              <View style={styles.modalSimple}>
                <View style={styles.modalWarningIcon}>
                  <Icon name={'exclamation'} size={50} color={'#E4E4E4'} />
                </View>
                <Text style={styles.modalMainText}>是否確認將此商品下架？</Text>
              </View>
              <View style={styles.modalButtonBox}>
                <TouchableOpacity style={styles.modalButtonConfirm}>
                  <Icon name={'check'} size={20} color={'#E4E4E4'} />
                  <Text style={styles.buttonTextWithIcon}>確認</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButtonCancel}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Icon name={'times'} size={20} color={'#E4E4E4'} />
                  <Text style={styles.buttonTextWithIcon}>取消</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onLongPress={() => setModalVisible(true)}>
        {MerchantItemCard()}
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
  screenCardImage: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: 80,
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
  buttonTextWithIcon: {fontSize: 20, marginLeft: 8},
});
