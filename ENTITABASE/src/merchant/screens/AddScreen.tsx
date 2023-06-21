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
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native';

import AddItemModal from '../modals/AddItemModal';

import ForeheadView from '../../objects/MerchantForeheadView';
// import ItemAddCard from '../../objects/ItemAddCard';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {Calendar} from 'react-native-calendars';
import {useEffect} from 'react';
import {Select, SelectItem} from '@ui-kitten/components';
export default function AddScreen({}) {
  const [productList, setProductList] = React.useState<Array<any>>([]);

  const [versionList, setVersionList] = React.useState<Array<any>>([]);
  const [text, onChangeText] = React.useState('');
  const [end_date, onChangeDate] = React.useState('');
  const [price, onChangePrice] = React.useState('');
  const [stock_status, setStatus] = React.useState('接受預訂');
  const [availability, setAvailability] = React.useState(true);

  useEffect(() => {
    const getProduct = async () => {
      const getProduct = await fetch(
        'http://192.168.160.77:3000/merchant/product',
      );
      const productList = await getProduct.json();
      // console.log(productList);
      setProductList(productList);
    };
    // const selectProduct = async (product_id:number) => {
    //   // await fetch[Symbol]..version
    //   await fetch[Symbol]..version
    // };
    // const selectVersion =async (version_id:number) => {
    //     settVersion()
    // }
    getProduct();
  }, []);

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

        {/* try */}

        {/* <Select>
          {productList.map(() => (
            <SelectItem />
          ))}
        </Select> */}

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
          {/* Input game List */}
          <View style={{marginBottom: 10}}>
            <Text style={gameListStyles.itemName}>寶可夢 朱</Text>
            <View style={gameListStyles.itemInfoBox}>
              <View style={gameListStyles.itemInfoList}>
                <View style={gameListStyles.itemInfoIcon}>
                  <Icon name={'dollar-sign'} size={20} color={'#E4E4E4'} />
                </View>
                <Text style={{fontSize: 20}}>目標售價：</Text>
              </View>
              <View style={{alignItems: 'center', flexDirection: 'row'}}>
                <Text style={{marginRight: 10, fontSize: 20}}>HK$</Text>
                <View
                  style={{
                    width: 80,
                    borderBottomWidth: 1,
                    borderBottomColor: '#B7C1DE',
                  }}>
                  <TextInput
                    style={{fontSize: 20, padding: 0}}
                    value={price}
                    // onChangeText={setPrice}
                  />
                </View>
              </View>
            </View>
            <View style={gameListStyles.itemInfoBox}>
              <View style={gameListStyles.itemInfoList}>
                <View style={gameListStyles.itemInfoIcon}>
                  <Icon name={'box-open'} size={20} color={'#E4E4E4'} />
                </View>
                <Text style={{fontSize: 20}}>存貨情況：</Text>
              </View>

              <TextInput
                style={{fontSize: 20}}
                value={stock_status}
                onChangeText={setStatus}
                editable={false}
              />
              <Button
                title="Submit"
                // onPress={uploadItem}
              />
              {/* <Icon name={'angle-down'} size={20} color={'#E4E4E4'} /> */}
            </View>
          </View>
          {/* input game list */}
        </View>
        <View style={{alignItems: 'center', width: 350}}>
          <AddItemModal />
        </View>
        <View>
          <Calendar
            onDayPress={day => {
              onChangeDate(day.dateString);
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

const gameListStyles = StyleSheet.create({
  itemName: {fontSize: 20, borderBottomWidth: 3, borderBottomColor: '#7D7D7D'},
  itemInfoBox: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 300,
    marginBottom: 10,
  },
  itemInfoList: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 130,
  },
  itemInfoIcon: {width: 25, alignItems: 'center', justifyContent: 'center'},
  itemInfoPrice: {
    alignItems: 'flex-end',
    width: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#B7C1DE',
  },
  itemSelectBox: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    width: 140,
    backgroundColor: '#202124',
    borderWidth: 2,
    borderColor: '#B7C1DE',
    borderRadius: 10,
  },
});
