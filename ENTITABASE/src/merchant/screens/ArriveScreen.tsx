/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, ScrollView, TextInput, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native';
import {useState, useEffect} from 'react';
import SearchButtonModal from '../modals/MerchantSearchButtonModal';
import {useSelector} from 'react-redux';
import MerchantForehead from '../../objects/MerchantForeheadView';
import MerArriveItemCard from '../../objects/MerArriveItemCard';
import {IRootState} from '../../app/store';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function ArriveScreen({}) {
  const userId = useSelector((state: IRootState) => state.auth.userId);
  const [name, setName] = useState('');
  const [list, setList] = useState<Array<any>>([]);
  const [text, onChangeText] = useState('');

  let preOrder: Array<any> = [];

  const getUserData = async () => {
    const resp = await fetch(
      `http://192.168.160.142:3000/merchant/userInfo/${userId}`,
      {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      },
    );
    const data = await resp.json();
    setName(data[0].merchant_name);
    getItemData(data[0].id);
  };

  const getItemData = async (id: any) => {
    const resp = await fetch(
      `http://192.168.160.142:3000/merchant/allItem/${id}`,
      {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      },
    );
    const data = await resp.json();
    console.log(data);

    for (let item of data) {
      if (item.stock_status === '預購中' || item.stock_status === '等待到貨') {
        preOrder.push(item);
      }
    }
    setList(preOrder);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <ScrollView
      style={{
        backgroundColor: '#2A2E32',
      }}>
      <SafeAreaView style={styles.safeArea}>
        <MerchantForehead name={name} />
        <View style={styles.pageTitle}>
          <Text style={{fontSize: 20}}>預購商品到貨</Text>
          <View style={styles.pageTitleLine} />
        </View>
        <View style={{width: 350}}>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.textInput}
              onChangeText={onChangeText}
              value={text}
              placeholder="請輸入商品名稱"
            />
            <Icon name={'search'} size={25} color={'#E4E4E4'} />
          </View>
        </View>
        <View style={styles.tagSearchBar}>
          <Text style={{fontSize: 17}}>共 {list.length} 件商品</Text>
          <SearchButtonModal />
        </View>
        <View style={{width: 350, marginBottom: 100}}>
          <View style={styles.warningText}>
            <Icon name={'lightbulb'} size={20} color={'#E4E4E4'} solid />
            <Text style={{fontSize: 15, marginLeft: 10, color: '#E4E4E4'}}>
              點擊右上圖示可確認將商品上架
            </Text>
          </View>
          {list.map(items => (
            <MerArriveItemCard
              id={items.id}
              name={items.product_name}
              version={items.version}
              platform={items.platform}
              status={items.stock_status}
              price={items.price}
              date={items.end_date}
            />
          ))}
        </View>
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
  tagSearchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    width: 335,
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
  warningText: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 15,
    color: '#E4E4E4',
  },
  textInput: {fontSize: 17, padding: 0, color: '#E4E4E4', width: 250},
});
