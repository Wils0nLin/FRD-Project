/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Modal,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function ItemReleaseModal() {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = React.useState('');
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
                  <Text style={{fontSize: 20}}>現貨上架</Text>
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
                <Text style={styles.subTitleText}>商品名稱</Text>
              </View>
              <TouchableOpacity style={styles.modalUpdateName}>
                <Icon name={'cube'} size={20} color={'#E4E4E4'} />
                <Text style={styles.updateNameText}>寶可夢 朱</Text>
              </TouchableOpacity>
              <View style={styles.subTitle}>
                <Icon name={'dollar-sign'} size={15} color={'#E4E4E4'} />
                <Text style={styles.subTitleText}>目標售價</Text>
              </View>
              <View style={styles.modelTargetPrice}>
                <Text style={{fontSize: 25, marginRight: 5}}>HKD</Text>
                <View style={styles.modalInput}>
                  <TextInput
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="請輸入目標售價"
                    style={{fontSize: 15}}
                  />
                </View>
              </View>
              <View style={styles.subTitle}>
                <Icon name={'boxes'} size={15} color={'#E4E4E4'} />
                <Text style={styles.subTitleText}>存貨情況</Text>
              </View>
              <TouchableOpacity style={styles.modalDropList}>
                <Text style={{fontSize: 17}}>請選擇</Text>
                <Icon name={'angle-down'} size={30} color={'#E4E4E4'} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButtonFor1}>
                <Text style={{fontSize: 17}}>確認上架</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <Icon name={'check-square'} size={25} color={'#E4E4E4'} solid />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
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
  modalInputBox: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginTop: 3,
    marginBottom: 10,
    marginHorizontal: 8,
    width: 320,
  },
  modelTargetPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-around',
    marginTop: 3,
    marginBottom: 10,
    marginHorizontal: 8,
    width: 320,
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
  modalDropList: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginTop: 3,
    marginBottom: 10,
    marginHorizontal: 8,
    paddingHorizontal: 10,
    width: 320,
    height: 45,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
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
  modalButtonFor2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 155,
    height: 35,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
  buttonTextWithIcon: {fontSize: 15, marginLeft: 8},
  updateNameText: {marginLeft: 8, fontSize: 20},
  modalInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: 260,
    height: 45,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
});
