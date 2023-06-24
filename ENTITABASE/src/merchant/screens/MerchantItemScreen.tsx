/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import SearchButtonModal from '../modals/MerchantSearchButtonModal';
import MerchantItemCardWithDel from '../modals/MerchantItemCardWithDel';
import {IRootState} from '../../app/store';
import MerchantForehead from '../../objects/MerchantForeheadView';
import MerPerOrderItemCard from '../../objects/MerPreOrderItemCard';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useState, useEffect} from 'react';

export default function MerchantItemScreen({}) {
  const userId = useSelector((state: IRootState) => state.auth.userId);
  const [name, setName] = useState('');
  const [list, setList] = useState<Array<any>>([]);
  const [spotList, setSpotList] = useState<Array<any>>([]);
  const [preOrderList, setPreOrderList] = useState<Array<any>>([]);
  const [text, onChangeText] = useState('');
  const [select, setSelect] = useState('現貨商品');
  const [warn, setWarn] = useState('如需下架商品，請長按該商品');

  let spotItem: Array<any> = [];
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
    console.log(data[0]);
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
      } else {
        spotItem.push(item);
      }
    }
    setList(spotItem);
    setSpotList(spotItem);
    setPreOrderList(preOrder);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const isSelect = (button: string) => {
    if (button === '現貨商品') {
      setList(spotList);
      setSelect('現貨商品');
      setWarn('如需下架商品，請長按該商品');
    } else if (button === '預購商品') {
      setList(preOrderList);
      setSelect('預購商品');
      setWarn('預購狀態下的商品無法下架，敬請留意');
    }
    return [list, select];
  };

  return (
    <ScrollView
      style={{
        backgroundColor: '#2A2E32',
      }}>
      <SafeAreaView style={styles.safeArea}>
        <MerchantForehead name={name} />
        <View style={styles.pageTitle}>
          <Text style={{fontSize: 20, color: '#E4E4E4'}}>商品一覽</Text>
          <View style={styles.pageTitleLine} />
        </View>
        <View style={styles.tabButtonBox}>
          <TouchableOpacity
            style={
              select === '現貨商品'
                ? styles.tabButtonTrue
                : styles.tabButtonFalse
            }
            onPress={() => {
              isSelect('現貨商品');
            }}>
            <Text style={{width: 80, fontSize: 20, color: '#E4E4E4'}}>
              現貨商品
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              select === '預購商品'
                ? styles.tabButtonTrue
                : styles.tabButtonFalse
            }
            onPress={() => {
              isSelect('預購商品');
            }}>
            <Text style={{width: 80, fontSize: 20, color: '#E4E4E4'}}>
              預購商品
            </Text>
          </TouchableOpacity>
          <View style={{alignItems: 'center', width: 40}}>
            <Text style={{width: 80, fontSize: 20}} />
          </View>
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
          <Text style={{fontSize: 17, color: '#E4E4E4'}}>
            共 {list.length} 件商品
          </Text>
          <SearchButtonModal />
        </View>
        <View style={{width: 350, marginBottom: 100}}>
          <View style={styles.warningText}>
            <Icon name={'lightbulb'} size={20} color={'#E4E4E4'} solid />
            <Text style={{fontSize: 15, marginLeft: 10, color: '#E4E4E4'}}>
              {warn}
            </Text>
          </View>
          {list.map(items =>
            select === '現貨商品' ? (
              <MerchantItemCardWithDel
                id={items.id}
                name={items.product_name}
                version={items.version}
                platform={items.platform}
                status={items.stock_status}
                price={items.price}
                date={items.end_date}
              />
            ) : (
              <MerPerOrderItemCard
                id={items.id}
                name={items.product_name}
                version={items.version}
                platform={items.platform}
                status={items.stock_status}
                price={items.price}
                date={items.end_date}
              />
            ),
          )}
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
  tabButtonBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    margin: 5,
    paddingLeft: 10,
    paddingRight: 10,
    width: 350,
  },
  tabButtonTrue: {
    alignItems: 'center',
    width: 40,
    borderBottomWidth: 3,
    borderColor: '#7A04EB',
  },
  tabButtonFalse: {
    alignItems: 'center',
    width: 40,
    borderBottomWidth: 3,
    borderColor: '#2A2E32',
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
