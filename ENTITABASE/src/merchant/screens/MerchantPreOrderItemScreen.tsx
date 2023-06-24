/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import SearchButtonModal from '../modals/MerchantSearchButtonModal';
import {IRootState} from '../../app/store';
import MerchantForehead from '../../objects/MerchantForeheadView';
import MerPreRecordItemCard from '../../objects/MerPreRecordItemCard';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useState, useEffect} from 'react';

export default function PreOrderItemScreen({}) {
  const userId = useSelector((state: IRootState) => state.auth.userId);
  const [name, setName] = useState('');
  const [list, setList] = useState<Array<any>>([]);
  const [text, onChangeText] = useState('');

  useEffect(() => {
    const getData = async () => {
      let id: any;
      console.log(userId);
      await fetch(`http:/10.0.2.2:3000/merchant/userInfo/${userId}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      })
        .then(response => response.json())
        .then(data => {
          setName(data[0].merchant_name);
          id = data[0].id;
          console.log(id);
        });

      await fetch(`http:/10.0.2.2:3000/merchant/preOrderItem/${id}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      })
        .then(response => response.json())
        .then(data => {
          setList(data);
        });
    };
    getData();
  }, []);

  return (
    <ScrollView
      style={{
        backgroundColor: '#2A2E32',
      }}>
      <SafeAreaView style={styles.safeArea}>
        <MerchantForehead name={name} />
        <View style={styles.pageTitle}>
          <Text style={{fontSize: 20}}>預購商品訂單</Text>
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
            <FontAwesome5 name={'search'} size={25} color={'#E4E4E4'} />
          </View>
        </View>
        <View style={styles.tagSearchBar}>
          <Text style={{fontSize: 17, color: '#E4E4E4'}}>
            共 {list.length} 件商品
          </Text>
          <SearchButtonModal />
        </View>
        <View style={{width: 350, marginBottom: 100}}>
          {list.map(items => (
            <MerPreRecordItemCard
              id={items.item_id}
              name={items.full_name}
              order={items.numberoforders}
              date={items.release_date}
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
