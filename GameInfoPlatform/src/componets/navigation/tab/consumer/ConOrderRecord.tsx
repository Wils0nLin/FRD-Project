import {Button, Layout} from '@ui-kitten/components';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import ConsumerInfoHeader from '../../ConsumerInfoHeader';

const ConOrderRecord = () => {
  const [select, setSelect] = useState('');
  const [list, setList] = useState('');

  const isSelect = (button: string) => {
    if (button == '預購商品') {
      setList('Hi');
      setSelect('預購s商品');
    } else if (button == '待領商品') {
      setList('待領商品');
      setSelect('待領商品');
    } else if (button == '過往交易') {
      setList('過往交易');
      setSelect('過往交易');
    }
    return [list, select];
  };

  return (
    <ScrollView style={{backgroundColor: 'rgb(40,40,40)'}}>
      <Layout style={styles.layout}>
        {ConsumerInfoHeader('ss')}
        <Layout style={{backgroundColor: 'rgb(40,40,40)'}}>
          <Text>Title wait for wilson</Text>
        </Layout>
        <Layout style={styles.row}>
          <Button
            style={select == '預購商品' ? styles.buttonSelect : styles.button}
            appearance="ghost"
            status="control"
            onPress={() => isSelect('預購商品')}>
            預購商品
          </Button>
          <Button
            style={select == '待領商品' ? styles.buttonSelect : styles.button}
            appearance="ghost"
            status="control"
            onPress={() => isSelect('待領商品')}>
            待領商品
          </Button>
          <Button
            style={select == '過往交易' ? styles.buttonSelect : styles.button}
            appearance="ghost"
            status="control"
            onPress={() => isSelect('過往交易')}>
            過往交易
          </Button>
        </Layout>
        <Layout>
          <Text style={{color: 'white'}}>{list}</Text>
        </Layout>
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
});
