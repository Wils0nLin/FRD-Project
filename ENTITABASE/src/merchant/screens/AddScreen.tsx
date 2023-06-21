/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Alert,
  Button,
} from 'react-native';
import {SafeAreaView} from 'react-native';

import AddItemModal from '../modals/AddItemModal';

import ForeheadView from '../../objects/MerchantForeheadView';
import ItemAddCard from '../../objects/ItemAddCard';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {Calendar} from 'react-native-calendars';

export default function AddScreen({}) {
  const [text, onChangeText] = React.useState('');
  const [end_date, setSelected] = React.useState('');
  const [price, setPrice] = React.useState<string>('');
  const [stock_status, setStatus] = React.useState<any>('');
  const [availability, setAvailability] = React.useState<any>('');

  const handleChildValue = (
    price: any,
    stock_status: any,
    availability: any,
  ) => {
    console.log('Price: ', price);
    console.log('Stock Status: ', stock_status);
    console.log('Availability: ', availability);
    uploadItem(price, stock_status, availability);
  };

  // const handleInputChange = () => {
  //   onValueSubmit(price, stock_status, availability);
  // };

  const uploadItem = async (
    price: any,
    stock_status: any,
    availability: any,
  ) => {
    const formData = new FormData();
    formData.append('price', price);
    formData.append('stock_status', stock_status);
    formData.append('availability', availability);
    formData.append('end_date', end_date);

    try {
      await fetch('http://192.168.160.77:3000/merchant/uploadItems', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });
      Alert.alert('Upload successful');
    } catch (error) {
      console.log('Upload failed:', error);
      Alert.alert('Upload failed');
    }
  };

  return (
    <ScrollView
      style={{
        backgroundColor: '#2A2E32',
      }}>
      <SafeAreaView style={styles.safeArea}>
        {ForeheadView()}
        <View style={styles.pageTitle}>
          <Text style={{fontSize: 20}}>增加商品</Text>
          <View style={styles.pageTitleLine} />
        </View>
        <View style={styles.subTitle}>
          <Icon name={'cube'} size={20} color={'#E4E4E4'} />
          <Text style={styles.subTitleText}>遊戲</Text>
        </View>
        <View style={{width: 350}}>
          <View style={styles.inputBox}>
            <TextInput
              style={{fontSize: 15, padding: 0}}
              onChangeText={onChangeText}
              value={text}
              placeholder="請輸入遊戲名稱"
            />
            <Icon name={'search'} size={25} color={'#E4E4E4'} />
          </View>
        </View>
        <View style={styles.subTitle}>
          <Icon name={'list'} size={20} color={'#E4E4E4'} />
          <Text style={{width: 80, marginLeft: 10, fontSize: 20}}>項目</Text>
        </View>
        <View>
          <ItemAddCard onValueSubmit={handleChildValue} />
          {/* <ItemAddCard end_date={end_date} onFetchData={uploadItem} />
          <ItemAddCard end_date={end_date} onFetchData={uploadItem} /> */}
          {/* {ItemAddCard()}
          {ItemAddCard()}
          {ItemAddCard()} */}
        </View>
        <View style={{alignItems: 'center', width: 350}}>
          <AddItemModal />
        </View>
        <View>
          <Calendar
            onDayPress={day => {
              setSelected(day.dateString);
            }}
            markedDates={{
              [end_date]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: 'orange',
              },
            }}
          />
        </View>
        {/* <Button title="Submit" onPress={handleInputChange} /> */}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageTitle: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 10,
    paddingLeft: 10,
    width: 350,
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
    marginBottom: 0,
    marginTop: 10,
    paddingLeft: 10,
    width: 350,
  },
  subTitleText: {width: 80, marginLeft: 10, fontSize: 20},
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
    paddingLeft: 10,
    paddingRight: 10,
    height: 45,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
});
