/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native';
import {IRootState} from '../../app/store';
import {useSelector} from 'react-redux';
import MerchantForehead from '../../objects/MerchantForeheadView';
import CommentCard from '../../objects/CommentCard';
import {useState, useEffect} from 'react';
import {IP_Of_LOCAL} from '../../../IP';

export default function CommentScreen({}) {
  const userId = useSelector((state: IRootState) => state.auth.userId);
  const [name, setName] = useState('');
  const [list, setList] = useState<Array<any>>([]);

  const getData = async () => {
    const resp = await fetch(
      `http://${IP_Of_LOCAL}/merchant/userInfo/${userId}`,
      {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      },
    );
    const data = await resp.json();
    console.log(data);
    setName(data[0].merchant_name);
    getCommentData(data[0].id);
  };

  const getCommentData = async (id: number) => {
    const resp = await fetch(`http://${IP_Of_LOCAL}/merchant/comment/${id}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    });
    const data = await resp.json();
    console.log(data);
    setList(data);
  };

  useEffect(() => {
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
          <Text style={{fontSize: 20}}>顧客評價</Text>
          <View style={styles.pageTitleLine} />
        </View>
        <View style={{width: 350, marginBottom: 100}}>
          {list.map(items => (
            <CommentCard
              name={items.consumer_name}
              star={items.rating}
              comment={items.comment}
              date={items.create_time}
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
});
