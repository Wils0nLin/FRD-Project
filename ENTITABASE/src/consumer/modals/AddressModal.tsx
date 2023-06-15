/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Modal,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function AddressModal() {
  const [modalVisible, setModalVisible] = useState(false);
  // const [text, onChangeText] = React.useState('');
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <ScrollView>
          <View style={styles.modalBackground}>
            <View style={styles.modalStyle}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.pageTitle}>
                    <Text style={{fontSize: 20, color: 'white'}}>標籤搜尋</Text>
                    <View style={styles.pageTitleLine} />
                  </View>
                  <Pressable
                    style={{margin: 5, marginHorizontal: 10}}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Icon name={'times'} size={40} color={'#E4E4E4'} />
                  </Pressable>
                </View>

                <View style={styles.subTitle}>
                  <Icon name={'location-arrow'} size={15} color={'#E4E4E4'} />
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 15,
                      marginBottom: 3,
                      marginLeft: 5,
                    }}>
                    價格順序
                  </Text>
                </View>
                <View style={styles.modalButtonBox}>
                  <TouchableOpacity style={styles.modalButtonFor2}>
                    <Text style={{fontSize: 15, color: 'white'}}>最高</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalButtonFor2}>
                    <Text style={{fontSize: 15, color: 'white'}}>最低</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.subTitle}>
                  <Icon name={'funnel-dollar'} size={15} color={'#E4E4E4'} />
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 15,
                      marginBottom: 3,
                      marginLeft: 5,
                    }}>
                    價格順序
                  </Text>
                </View>
                <View style={styles.modalButtonBox}>
                  <TouchableOpacity style={styles.modalButtonFor2}>
                    <Text style={{fontSize: 15, color: 'white'}}>最高</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalButtonFor2}>
                    <Text style={{fontSize: 15, color: 'white'}}>最低</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.subTitle}>
                  <Icon name={'gamepad'} size={15} color={'#E4E4E4'} />
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 15,
                      marginBottom: 3,
                      marginLeft: 5,
                    }}>
                    商戶地區
                  </Text>
                </View>

                <View style={styles.subTitle}>
                  <Text style={{fontSize: 15, color: 'white'}}>新界</Text>
                </View>

                <View style={styles.modalButtonBox}>
                  <TouchableOpacity style={styles.modalButtonFor3}>
                    <Text style={{fontSize: 15, color: 'white'}}>荃灣區</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalButtonFor3}>
                    <Text style={{fontSize: 15, color: 'white'}}>葵青區</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalButtonFor3}>
                    <Text style={{fontSize: 15, color: 'white'}}>屯門區</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.modalButtonBox}>
                  <TouchableOpacity style={styles.modalButtonFor3}>
                    <Text style={{fontSize: 15, color: 'white'}}>元朗區</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalButtonFor3}>
                    <Text style={{fontSize: 15, color: 'white'}}>北區</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalButtonFor3}>
                    <Text style={{fontSize: 15, color: 'white'}}>大埔區</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.modalButtonBox}>
                  <TouchableOpacity style={styles.modalButtonFor3}>
                    <Text style={{fontSize: 15, color: 'white'}}>沙田區</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalButtonFor3}>
                    <Text style={{fontSize: 15, color: 'white'}}>西貢區</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalButtonFor3}>
                    <Text style={{fontSize: 15, color: 'white'}}>離島區</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.subTitle}>
                  <Text style={{fontSize: 15, color: 'white'}}>九龍</Text>
                </View>

                <View style={styles.modalButtonBox}>
                  <TouchableOpacity style={styles.modalButtonFor3}>
                    <Text style={{fontSize: 15, color: 'white'}}>深水埗區</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalButtonFor3}>
                    <Text style={{fontSize: 15, color: 'white'}}>九龍城區</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalButtonFor3}>
                    <Text style={{fontSize: 15, color: 'white'}}>黃大仙區</Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignContent: 'center',
                    marginTop: 3,
                    marginBottom: 10,
                    marginHorizontal: 8,
                    width: 320,
                  }}>
                  <TouchableOpacity style={styles.modalButtonFor3}>
                    <Text style={{fontSize: 15, color: 'white'}}>觀塘區</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 100,
                      height: 35,
                      backgroundColor: '#202124',
                      borderRadius: 10,
                      borderWidth: 2,
                      borderColor: '#B7C1DE',
                      marginLeft: 10,
                    }}>
                    <Text style={{fontSize: 15, color: 'white'}}>油尖旺區</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.subTitle}>
                  <Text style={{fontSize: 15, color: 'white'}}>九龍</Text>
                </View>

                <View style={styles.modalButtonBox}>
                  <TouchableOpacity style={styles.modalButtonFor3}>
                    <Text style={{fontSize: 15, color: 'white'}}>深水埗區</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalButtonFor3}>
                    <Text style={{fontSize: 15, color: 'white'}}>九龍城區</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalButtonFor3}>
                    <Text style={{fontSize: 15, color: 'white'}}>黃大仙區</Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignContent: 'center',

                    marginTop: 3,
                    marginBottom: 10,
                    marginHorizontal: 8,
                    width: 320,
                  }}>
                  <TouchableOpacity style={styles.modalButtonFor3}>
                    <Text style={{fontSize: 15, color: 'white'}}>觀塘區</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.modalButtonFor1}>
                  <Text style={{fontSize: 17, color: 'white'}}>商品搜尋</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </Modal>
      <Pressable
        style={styles.searchButton}
        onPress={() => setModalVisible(true)}>
        <Text style={{color: 'white', fontSize: 15}}>標籤搜尋</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  searchButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 100,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
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
  modalButtonBox: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginTop: 3,
    marginBottom: 10,
    marginHorizontal: 8,
    width: 320,
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
  modalButtonFor3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 35,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
  buttonTextWithIcon: {fontSize: 15, marginLeft: 8},
  modalButtonSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 35,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FF2A6D',
  },
  modalButtonPSX: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 35,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#05D9E8',
  },
  modalButtonXBOX: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 35,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#65DC98',
  },
  modalInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
});
