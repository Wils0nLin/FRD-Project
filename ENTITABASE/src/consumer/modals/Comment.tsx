/* eslint-disable react/self-closing-comp */
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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import OctIcon from 'react-native-vector-icons/Octicons';

export default function CommentModal() {
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
                <View id="title" style={styles.pageTitle}>
                  <Text style={{fontSize: 20, color: 'white'}}>撰寫評論</Text>
                  <View style={styles.pageTitleLine} />
                </View>
                <Pressable
                  id="crossBTN"
                  style={{margin: 5, marginHorizontal: 10}}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Icon name={'times'} size={40} color={'white'} />
                </Pressable>
              </View>
              <View style={styles.subTitle}>
                <FontAwesome name={'star'} size={20} color={'#E4E4E4'} />
                <Text
                  style={{
                    justifyContent: 'center',
                    marginLeft: 5,
                    marginBottom: 5,
                    fontSize: 18,
                    color: 'white',
                  }}>
                  評分
                </Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <OctIcon name={'star'} size={50} color={'#7A04EB'} />
                <OctIcon name={'star'} size={50} color={'#7A04EB'} />
                <OctIcon name={'star'} size={50} color={'#7A04EB'} />
                <OctIcon name={'star'} size={50} color={'#7A04EB'} />
                <OctIcon name={'star'} size={50} color={'#7A04EB'} />
              </View>

              <View style={{marginBottom: 5}}>
                <View style={{}}>
                  <View style={styles.subTitle}>
                    <View style={{width: 20}}>
                      <Icon
                        name={'comment'}
                        size={20}
                        color={'#E4E4E4'}
                        solid
                      />
                    </View>
                    <Text
                      style={{
                        justifyContent: 'center',
                        marginLeft: 5,
                        marginBottom: 5,
                        fontSize: 18,
                        color: 'white',
                      }}>
                      評論
                    </Text>
                  </View>
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: '#B7C1DE',
                      width: 300,
                      height: 150,
                      justifyContent: 'center',
                      alignSelf: 'center',
                      borderRadius: 5,
                    }}></View>
                </View>
              </View>
              <TouchableOpacity style={styles.modalButtonFor1}>
                <Text style={{fontSize: 20, color: 'white'}}>發表評論</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={styles.screenButtonFor1}
        onPress={() => setModalVisible(true)}>
        <Text style={{fontSize: 17, color: 'white'}}>撰寫商戶評論</Text>
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
