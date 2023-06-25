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
  const [username, setUsername] = useState('');
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
            preArr.push(i);
            setUsername(i.consumer_name);
          } else {
            console.log('canTake', i);
            inArr.push(i);
            setUsername(i.consumer_name);
          }
        } else {
          console.log('takeded', i);
          passArr.push(i);
          setUsername(i.consumer_name);
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
  const imageObject = {
    'Switch_Sport.jpeg': require('../../../../assets/imageUpload/imageProduct/Switch_Sport.jpeg'),
    'PKM朱紫.jpeg': require('../../../../assets/imageUpload/imageProduct/PKM朱紫.jpeg'),
    '2K23.jpeg': require('../../../../assets/imageUpload/imageProduct/2K23.jpeg'),
    'Call_Duty.jpeg': require('../../../../assets/imageUpload/imageProduct/Call_Duty.jpeg'),
    'GTA5.jpeg': require('../../../../assets/imageUpload/imageProduct/GTA5.jpeg'),
    'Spider_Man_Miles_ps5.jpeg': require('../../../../assets/imageUpload/imageProduct/Spider_Man_Miles_ps5.jpeg'),
    'THE_KING_OF_FIGHTERS_XV_XBOX.jpeg': require('../../../../assets/imageUpload/imageProduct/THE_KING_OF_FIGHTERS_XV_XBOX.jpeg'),
    '哈利波特_ps.jpeg': require('../../../../assets/imageUpload/imageProduct/哈利波特_ps.jpeg'),
    '星之卡比.jpeg': require('../../../../assets/imageUpload/imageProduct/星之卡比.jpeg'),
    '薩爾達傳說王國之淚.jpeg': require('../../../../assets/imageUpload/imageProduct/薩爾達傳說王國之淚.jpeg'),
    // default: require('../../../../assets/imageUpload/imageProduct/Call_Duty.jpeg'),
  } as Record<string, any>;

  return (
    <ScrollView style={{backgroundColor: 'rgb(40,40,40)'}}>
      <Layout style={styles.layout}>
        {ConsumerInfoHeader({Name: username})}
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
                backgroundColor: '#74787C',
                padding: 5,
                margin: 5,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                borderRadius: 5,
              }}>
              <View style={{top: 10, marginLeft: 10}}>
                <Image
                  source={imageObject[item.product_image]}
                  style={{width: 100, height: 100}}
                />
              </View>
              <View style={{margin: 10}}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'white',
                    marginBottom: 1,
                    backgroundColor: 'rgb(40,40,40)',
                    borderBottomRightRadius: 5,
                    borderTopRightRadius: 5,
                    padding: 10,
                  }}>
                  {item.product_name}
                </Text>
                <Text style={{fontSize: 15, color: 'white', marginBottom: 1}}>
                  {item.version}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontSize: 20, color: 'white', marginBottom: 1}}>
                    $HKD {item.amount}.00
                  </Text>
                  <Text
                    style={
                      item.stock_status == '預購中'
                        ? {
                            alignSelf: 'center',
                            fontSize: 15,
                            color: 'white',
                            backgroundColor: 'rgb(60,60,60)',
                            padding: 5,
                            borderRadius: 5,
                            borderColor: '#E11F6B',
                            borderWidth: 3,
                            textAlign: 'center',
                            marginLeft: 5,
                          }
                        : {
                            alignSelf: 'center',
                            fontSize: 15,
                            color: 'white',
                            backgroundColor: 'rgb(60,60,60)',
                            padding: 5,
                            borderRadius: 5,
                            borderColor: '#00BC00',
                            borderWidth: 3,
                            textAlign: 'center',
                            marginLeft: 5,
                          }
                    }>
                    {item.stock_status}
                  </Text>
                </View>
              </View>
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
