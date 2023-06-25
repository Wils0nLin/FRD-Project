/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import WhiteLineSVG from '../../../../assets/svg/lineSVG/whiteLineSVG';
import {
  WhiteLineStyle,
  gameImgStyle,
  titleName,
} from '../consumer/conWishListScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Entypo';
import {IP_Of_LOCAL} from '../../../../../IP';
import {useSelector} from 'react-redux';
import {IRootState} from '../../../../app/store';
import {useStripe} from '@stripe/stripe-react-native';

const ConsumerCartScreen = ({navigation}: any) => {
  const userId = useSelector((state: IRootState) => state.auth.userId);
  const [userState, setUserState] = useState<any>([]);
  const [unpayOrder, setUnpayOrder] = useState<Array<any>>([]);
  const [payment, setPayment] = useState<Array<any>>([]);
  const [totalAmount, setTotalAMount] = useState(0);
  const {initPaymentSheet, presentPaymentSheet} = useStripe();
  const deleteOrder = async (id: number) => {
    await fetch(`http://${IP_Of_LOCAL}/consumer/order/delete/${id}`)
      .then(response => response.json())
      .then(data => {
        userState.push(data[0]);
        setPayment([]);
      });
  };
  const paymentSelect = (id: any) => {
    const clonepayment = payment.slice();
    if (clonepayment.includes(id)) {
      let index = clonepayment.indexOf(id);
      clonepayment.splice(index, 1);
    } else {
      clonepayment.push(id);
    }
    console.log(clonepayment);
    setPayment(clonepayment);
  };
  const calTotal = () => {
    let cloneTotalAmount = 0;
    let clonPayment = payment.slice();
    console.log(clonPayment);
    for (let i of clonPayment) {
      console.log(i);
      let result = unpayOrder.find(item => item.order_id === i);
      cloneTotalAmount = cloneTotalAmount + result.amount;
    }
    setTotalAMount(cloneTotalAmount);
  };

  const getData = async () => {
    let userState: Array<any> = [];
    await fetch(`http://${IP_Of_LOCAL}/consumer/userInfo/${userId}`)
      .then(response => response.json())
      .then(data => {
        userState.push(data[0]);
        setUserState(userState);
      });

    await fetch(`http://${IP_Of_LOCAL}/consumer/order/${userState[0].id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data) {
          setUnpayOrder(data);
        } else {
          setUnpayOrder(['none']);
        }
      });
  };
  const onchaneOrderValue = async () => {
    const response = await fetch(
      `http://${IP_Of_LOCAL}/consumer/order/payment`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json',
        },
        body: JSON.stringify({idArr: payment}),
      },
    ).then(response => response.json());

    setPayment([]);
  };

  const onCHeckout = async () => {
    const response = await fetch(
      `http://${IP_Of_LOCAL}/stripe/payments/intents`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json',
        },
        body: JSON.stringify({price: totalAmount}),
      },
    )
      .then(response => response.json())
      .then(data => data);
    if (response.error) {
      console.log(response.error);
      Alert.alert('payment reject please try again');
      return;
    }

    const initResponse = await initPaymentSheet({
      merchantDisplayName: 'ENTITABASE',
      paymentIntentClientSecret: response.client_secret,
    });
    if (initResponse.error) {
      console.log(initResponse.error);
      Alert.alert('payment reject please try again');
      return;
    }
    const paymentResponse = await presentPaymentSheet();
    if (paymentResponse.error) {
      Alert.alert(
        `Error.code: ${paymentResponse.error.code}`,
        paymentResponse.error.message,
      );
      return;
    }
    onchaneOrderValue();
  };
  useEffect(() => {
    getData();
    calTotal();
  }, [payment, totalAmount]);
  return (
    <ScrollView style={{backgroundColor: 'rrgb(40,40,40)'}}>
      <View style={{alignSelf: 'center', paddingBottom: '30%'}}>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <WhiteLineSVG style={WhiteLineStyle.container} />
          <Text style={titleName.container}>購物車</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            marginLeft: 30,
          }}>
          <Icon name={'lightbulb'} size={20} color={'white'} solid />
          <Text style={styles.container}>
            {`請在付款前核對商品的數量及訂金金額。\n如有需要，可點擊該商品作修改或刪除。`}
          </Text>
        </View>
        {unpayOrder.map(items => (
          <View
            style={
              payment.includes(items.order_id) ? styles.cardSelect : styles.card
            }>
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
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                width: 80,
              }}>
              <Image
                style={gameImgStyle.container}
                source={require('../../../../assets/images/arceus.jpg')}
              />
            </View>
            <View style={{flex: 1}}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      paymentSelect(items.order_id);
                    }}>
                    <Text
                      style={{fontSize: 25, marginRight: 80}}
                      numberOfLines={1}>
                      {items.product_name}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      deleteOrder(items.order_id);
                    }}>
                    <Icon2
                      name={'cross'}
                      size={30}
                      color={'white'}
                      // style={{marginLeft: 100}}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{flexDirection: 'column'}}>
                <Text style={{fontSize: 17}}>{items.merchant_name}</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      marginLeft: 100,
                      backgroundColor: '#2A2E32',
                      color: 'white',
                      borderRadius: 5,
                      textAlign: 'center',
                      width: 30,
                    }}>
                    {items.version}
                  </Text>

                  <Text
                    style={{
                      marginLeft: 10,
                      backgroundColor: '#2A2E32',
                      color: 'white',
                      borderRadius: 5,
                      textAlign: 'center',
                    }}>
                    HK$ {items.amount}.00
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'white', fontSize: 25, marginLeft: 50}}>
            總訂金:{totalAmount}
          </Text>
          <Text style={{color: 'white', fontSize: 25, marginLeft: 90}}>
            {totalAmount}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            onCHeckout();
          }}
          style={{
            borderColor: '#7A04EB',
            borderWidth: 3,
            width: 350,
            marginTop: 25,
            paddingBottom: 7,
            marginLeft: 30,
            borderRadius: 5,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              textAlign: 'center',
            }}>
            確認商品
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 15,
    color: 'white',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 8,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#74787C',
    marginLeft: 30,
    marginRight: 30,
  },
  cardSelect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 8,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#b57acf',
    marginLeft: 30,
    marginRight: 30,
  },
});

export default ConsumerCartScreen;
