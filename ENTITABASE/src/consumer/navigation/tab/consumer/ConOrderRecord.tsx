import {Button, Layout, ApplicationProvider} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ConsumerInfoHeader from '../../ConsumerInfoHeader';
import GameInfo from '../../pages/gameInfoModule';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import {IRootState} from '../../../../app/store';
import {gameListAreaStyle} from './conWishListScreen';
import {FlatList} from 'react-native';

const ConOrderRecord = () => {
  const userId = useSelector((state: IRootState) => state.auth.userId);
  const [preOrderArr, setPreOrderArr] = useState<Array<any>>([]);
  const [inStockArr, setInStockArr] = useState<Array<any>>([]);
  const [passTradeArr, setPassTradeArr] = useState<Array<any>>([]);
  const [select, setSelect] = useState('');
  const [list, setList] = useState(preOrderArr);

  useEffect(() => {
    const dataProcess = (Arr: Array<any>) => {
      let preArr = [];
      let inArr = [];
      let passArr = [];
      for (let i of Arr) {
        if (i.order_status == false) {
          console.log('payed', i);
          if (i.stock_status == '預購中') {
            console.log('noTake', i);
            i.path = `../../../../assets/imageUpload/imageProduct/${i.product_image}`;
            preArr.push(i);
          } else {
            console.log('canTake', i);
            i.path = `../../../../assets/imageUpload/imageProduct/${i.product_image}`;
            inArr.push(i);
          }
        } else {
          console.log('takeded', i);
          i.path = `../../../../assets/imageUpload/imageProduct/${i.product_image}`;
          passArr.push(i);
        }
      }
      setPreOrderArr(preArr);
      setInStockArr(inArr);
      setPassTradeArr(passArr);
    };
    const getData = async () => {
      await fetch(`http://10.0.2.2:3000/consumer/order/history/${userId}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          dataProcess(data);
        });
    };

    getData();
  }, []);
  const isSelect = (button: string) => {
    if (button === '預購商品') {
      setList(preOrderArr);
      setSelect('預購商品');
    } else if (button === '待領商品') {
      setList(inStockArr);
      setSelect('待領商品');
    } else if (button === '過往交易') {
      setList(passTradeArr);
      setSelect('過往交易');
    }
    return [list, select];
  };

  return (
    <ScrollView style={{backgroundColor: 'rgb(40,40,40)'}}>
      <Layout style={styles.layout}>
        {ConsumerInfoHeader({Name: preOrderArr[0].consumer_name})}
        <Layout style={{backgroundColor: 'rgb(40,40,40)'}}></Layout>
        <Layout style={styles.row}>
          <Button
            style={select === '預購商品' ? styles.buttonSelect : styles.button}
            appearance="ghost"
            status="control"
            onPress={() => isSelect('預購商品')}>
            預購商品
          </Button>
          <Button
            style={select === '待領商品' ? styles.buttonSelect : styles.button}
            appearance="ghost"
            status="control"
            onPress={() => isSelect('待領商品')}>
            待領商品
          </Button>
          <Button
            style={select === '過往交易' ? styles.buttonSelect : styles.button}
            appearance="ghost"
            status="control"
            onPress={() => isSelect('過往交易')}>
            過往交易
          </Button>
        </Layout>
        <Layout style={styles.gameInfo}></Layout>
        <FlatList
          data={list}
          renderItem={({item}) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                margin: 8,
                padding: 5,
                paddingHorizontal: 10,
                borderRadius: 10,
                backgroundColor: '#74787C',
              }}>
              <View
                style={{
                  position: 'absolute',
                  bottom: 6,
                  left: 50,
                  width: 150,
                  borderBottomWidth: 3,
                  borderColor: '#7A04EB',
                }}
              />
              <TouchableOpacity style={{padding: 5}}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    width: 80,
                  }}>
                  <Image
                    source={require('../../../../assets/imageUpload/imageProduct/Spider_Man_Miles_ps5.jpeg')}
                    style={{width: 80, height: 80}}></Image>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log()}>
                <View style={{flex: 1}}>
                  <Text
                    style={{fontSize: 25, color: 'white'}}
                    numberOfLines={1}>
                    {item.product_name}
                  </Text>
                  <Text
                    style={{fontSize: 25, color: 'white'}}
                    numberOfLines={1}>
                    {item.version}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{fontSize: 17, color: 'white'}}>
                      {item.amount}
                    </Text>
                    <Text style={{fontSize: 20, color: 'white'}}>
                      {item.stock_status}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </Layout>
    </ScrollView>
  );
};

export default ConOrderRecord;
const styles = StyleSheet.create({
  layout: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '90%',
    backgroundColor: 'rgb(40,40,40)',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'rgb(40,40,40)',
  },
  button: {
    marginHorizontal: 1,
  },
  buttonSelect: {
    marginHorizontal: 1,
    borderWidth: 0,
    borderColor: 'rgb(121,35,231)',
    borderBottomColor: 'rgb(121,35,231)',
    borderBottomWidth: 5,
  },
  gameInfo: {
    alignItems: 'center',
    width: '80%',
    backgroundColor: 'rgb(40,40,40)',
  },
});
