/* eslint-disable radix */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Alert,
  Modal,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {StackParamList} from '../../public/navigators/StackParamList';
import {IP_Of_LOCAL} from '../../../IP';
type cardInfo = {
  id: number;
  name: string;
  version: string;
  status: string;
  price: string;
  date: Date;
};

export default function ItemUpdateModal(props: cardInfo) {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const [modalVisible, setModalVisible] = useState(false);
  const [price, onChangePrice] = useState(props.price);
  const [status, onChangeStatus] = useState(props.status);

  const statusList = [
    {key: '1', value: '大量現貨'},
    {key: '2', value: '尚有現貨'},
    {key: '3', value: '少量現貨'},
  ];

  const Submit = async () => {
    const form = {
      price: parseInt(price),
      stock_status: status,
      end_date: props.date,
    };
    console.log(form);
    const resp = await fetch(
      `http://${IP_Of_LOCAL}:3000/merchant/update/${props.id}`,
      {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form),
      },
    );
    const data = await resp.json();
    if (data === true) {
      Alert.alert('更新成功', '已成功更新商品資料');
      setModalVisible(!modalVisible);
      navigation.replace('MerchantItem');
    } else {
      Alert.alert('更新失敗', '請核對商品資料');
    }
  };

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
                  <Text style={{fontSize: 20, color: '#E4E4E4'}}>
                    商品資料修改
                  </Text>
                  <View style={styles.pageTitleLine} />
                </View>
                <TouchableOpacity
                  style={{margin: 5, marginHorizontal: 10}}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <FontAwesome5 name={'times'} size={40} color={'#E4E4E4'} />
                </TouchableOpacity>
              </View>
              <View style={styles.subTitle}>
                <FontAwesome5 name={'list'} size={15} color={'#E4E4E4'} />
                <Text style={styles.subTitleText}>商品名稱</Text>
              </View>
              <TouchableOpacity style={styles.modalUpdateName}>
                <FontAwesome5 name={'cube'} size={20} color={'#E4E4E4'} />
                <Text style={styles.updateNameText}>
                  {props.name + ' ' + props.version}
                </Text>
              </TouchableOpacity>
              <View style={styles.subTitle}>
                <FontAwesome5
                  name={'dollar-sign'}
                  size={15}
                  color={'#E4E4E4'}
                />
                <Text style={styles.subTitleText}>目標售價</Text>
              </View>
              <View style={styles.modelTargetPrice}>
                <Text style={{fontSize: 25, marginRight: 5}}>HKD</Text>
                <View style={styles.modalInput}>
                  <TextInput
                    onChangeText={nextValue => onChangePrice(nextValue)}
                    value={price}
                    placeholder={'' + price}
                    style={styles.textInput}
                    keyboardType={'numeric'}
                  />
                </View>
              </View>
              <View style={styles.subTitle}>
                <FontAwesome5 name={'boxes'} size={15} color={'#E4E4E4'} />
                <Text style={styles.subTitleText}>存貨情況</Text>
              </View>
              <SelectList
                setSelected={onChangeStatus}
                data={statusList}
                save="value"
                search={false}
                arrowicon={
                  <FontAwesome5
                    name={'angle-down'}
                    size={20}
                    color={'#E4E4E4'}
                  />
                }
                boxStyles={styles.modalDropList}
                placeholder={status}
                dropdownStyles={styles.dropList}
                dropdownTextStyles={styles.textInput}
                inputStyles={styles.textInput}
              />
              <TouchableOpacity
                style={styles.modalButtonFor1}
                onPress={() => Submit()}>
                <Text style={{fontSize: 17}}>提交修改</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <FontAwesome5 name={'pencil-alt'} size={25} color={'#E4E4E4'} solid />
      </TouchableOpacity>
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
  subTitleText: {width: 80, marginLeft: 10, fontSize: 17, color: '#E4E4E4'},
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
    paddingVertical: 5,
    width: 320,
    height: 45,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
  dropList: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginTop: 3,
    marginBottom: 10,
    marginHorizontal: 8,
    width: 320,
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
  textInput: {fontSize: 17, padding: 0, color: '#E4E4E4', width: 200},
  updateNameText: {marginLeft: 8, fontSize: 20, color: '#E4E4E4'},
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
