/* eslint-disable react-native/no-inline-styles */
import {Button, Layout, ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import ConsumerInfoHeader from '../../ConsumerInfoHeader';
import GameInfo from '../../pages/gameInfoModule';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ConOrderRecord = () => {
  const preOrderArr = [
    {
      image: require('../../../../assets/images/zelda.jpg'),
      name: '薩爾達 王國之淚1',
      amount: '大量現貨',
      status: '現貨發售中',
      logo: <FontAwesome5 name={'heart'} size={35} color={'#7A04EB'} />,
    },
    {
      image: require('../../../../assets/images/zelda.jpg'),
      name: '薩爾達 王國之淚1',
      amount: '大量現貨',
      status: '現貨發售中',
      logo: <FontAwesome5 name={'heart'} size={35} color={'#7A04EB'} />,
    },
    {
      image: require('../../../../assets/images/zelda.jpg'),
      name: '薩爾達 王國之淚1',
      amount: '大量現貨',
      status: '現貨發售中',
      logo: <FontAwesome5 name={'heart'} size={35} color={'#7A04EB'} />,
    },
    {
      image: require('../../../../assets/images/zelda.jpg'),
      name: '薩爾達 王國之淚1',
      amount: '大量現貨',
      status: '現貨發售中',
      logo: <FontAwesome5 name={'heart'} size={35} color={'#7A04EB'} />,
    },
    {
      image: require('../../../../assets/images/zelda.jpg'),
      name: '薩爾達 王國之淚1',
      amount: '大量現貨',
      status: '現貨發售中',
      logo: <FontAwesome5 name={'heart'} size={35} color={'#7A04EB'} />,
    },
  ];
  const WaitArr = [
    {
      image: require('../../../../assets/images/zelda.jpg'),
      name: '薩爾達 王國之淚2',
      amount: '大量現貨',
      status: '現貨發售中',
      logo: <FontAwesome5 name={'heart'} size={35} color={'#7A04EB'} />,
    },
    {
      image: require('../../../../assets/images/zelda.jpg'),
      name: '薩爾達 王國之淚2',
      amount: '大量現貨',
      status: '現貨發售中',
      logo: <FontAwesome5 name={'heart'} size={35} color={'#7A04EB'} />,
    },
    {
      image: require('../../../../assets/images/zelda.jpg'),
      name: '薩爾達 王國之淚2',
      amount: '大量現貨',
      status: '現貨發售中',
      logo: <FontAwesome5 name={'heart'} size={35} color={'#7A04EB'} />,
    },
    {
      image: require('../../../../assets/images/zelda.jpg'),
      name: '薩爾達 王國之淚2',
      amount: '大量現貨',
      status: '現貨發售中',
      logo: <FontAwesome5 name={'heart'} size={35} color={'#7A04EB'} />,
    },
    {
      image: require('../../../../assets/images/zelda.jpg'),
      name: '薩爾達 王國之淚2',
      amount: '大量現貨',
      status: '現貨發售中',
      logo: <FontAwesome5 name={'heart'} size={35} color={'#7A04EB'} />,
    },
  ];
  const passTradeArr = [
    {
      image: require('../../../../assets/images/zelda.jpg'),
      name: '薩爾達 王國之淚3',
      amount: '大量現貨',
      status: '現貨發售中',
      logo: <FontAwesome5 name={'heart'} size={35} color={'#7A04EB'} />,
    },
    {
      image: require('../../../../assets/images/zelda.jpg'),
      name: '薩爾達 王國之淚3',
      amount: '大量現貨',
      status: '現貨發售中',
      logo: <FontAwesome5 name={'heart'} size={35} color={'#7A04EB'} />,
    },
    {
      image: require('../../../../assets/images/zelda.jpg'),
      name: '薩爾達 王國之淚3',
      amount: '大量現貨',
      status: '現貨發售中',
      logo: <FontAwesome5 name={'heart'} size={35} color={'#7A04EB'} />,
    },
    {
      image: require('../../../../assets/images/zelda.jpg'),
      name: '薩爾達 王國之淚3',
      amount: '大量現貨',
      status: '現貨發售中',
      logo: <FontAwesome5 name={'heart'} size={35} color={'#7A04EB'} />,
    },
    {
      image: require('../../../../assets/images/zelda.jpg'),
      name: '薩爾達 王國之淚3',
      amount: '大量現貨',
      status: '現貨發售中',
      logo: <FontAwesome5 name={'heart'} size={35} color={'#7A04EB'} />,
    },
  ];
  const [select, setSelect] = useState('');
  const [list, setList] = useState(preOrderArr);

  const isSelect = (button: string) => {
    if (button === '預購商品') {
      setList(preOrderArr);
      setSelect('預購商品');
    } else if (button === '待領商品') {
      setList(WaitArr);
      setSelect('待領商品');
    } else if (button === '過往交易') {
      setList(passTradeArr);
      setSelect('過往交易');
    }
    return [list, select];
  };

  return (
    <ScrollView style={{backgroundColor: 'rgb(40,40,40)'}}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Layout style={styles.layout}>
          {ConsumerInfoHeader('ss')}
          <Layout style={{backgroundColor: 'rgb(40,40,40)'}}>
            <Text>Title wait for wilson</Text>
          </Layout>
          <Layout style={styles.row}>
            <Button
              style={
                select === '預購商品' ? styles.buttonSelect : styles.button
              }
              appearance="ghost"
              status="control"
              onPress={() => isSelect('預購商品')}>
              預購商品
            </Button>
            <Button
              style={
                select === '待領商品' ? styles.buttonSelect : styles.button
              }
              appearance="ghost"
              status="control"
              onPress={() => isSelect('待領商品')}>
              待領商品
            </Button>
            <Button
              style={
                select === '過往交易' ? styles.buttonSelect : styles.button
              }
              appearance="ghost"
              status="control"
              onPress={() => isSelect('過往交易')}>
              過往交易
            </Button>
          </Layout>
          <Layout style={styles.gameInfo}>
            {list.map(items => (
              <Layout style={styles.gameInfo}>
                <GameInfo
                  image={items.image}
                  name={items.name}
                  amount={items.amount}
                  status={items.status}
                  logo={items.logo}
                />
              </Layout>
            ))}
          </Layout>
        </Layout>
      </ApplicationProvider>
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
