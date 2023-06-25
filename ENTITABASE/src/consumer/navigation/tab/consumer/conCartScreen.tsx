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
    await fetch(`http://${IP_Of_LOCAL}:3000/consumer/order/delete/${id}`)
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


  const getData = async () => {
    let userState: Array<any> = [];
    await fetch(`http://${IP_Of_LOCAL}:3000/consumer/userInfo/${userId}`)
      .then(response => response.json())
      .then(data => {
        userState.push(data[0]);
        setUserState(userState);
      });

    await fetch(`http://${IP_Of_LOCAL}:3000/consumer/order/${userState[0].id}`)
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
      `http://${IP_Of_LOCAL}:3000/consumer/order/payment`,
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
      `http://${IP_Of_LOCAL}:3000/stripe/payments/intents`,
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
                style={ {
                  width:100,
                  height: 100,
                  margin: 5
                }}
                source={imageObject[items.product_image]}
              />
            </View>
            
            <View style={{flex: 1,marginLeft:15}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent:'space-between'
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      paymentSelect(items.order_id);
                    }}>
                    <Text
                      style={{fontSize: 25, marginRight: 75}}
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
                      size={40}
                      color={'#f24b6a'}
                      style={{ position: 'absolute', right:-25,bottom:10}}
                    />
                </TouchableOpacity>
                </View>
              <View style={{flexDirection: 'column'}}>
                <Text style={{fontSize: 17}}>{items.merchant_name}</Text>
                <View style={{flexDirection: 'row',marginRight:30,marginBottom:5}}>
                  <Text
                    style={{
                      marginLeft: '30%',
                      backgroundColor: '#2A2E32',
                      color: 'white',
                      borderRadius: 5,
                      padding:5,
                      textAlign: 'center',
                      width: 60,
                      borderColor: '#d196e3',
                      borderWidth:3,
                      marginTop:20,
                    }}>
                    {items.version}
                  </Text>

                  <Text
                    style={{
                      padding:5,
                      marginTop:20,
                      marginLeft: 10,
                      backgroundColor: '#2A2E32',
                      color: 'white',
                      borderRadius: 5,
                      textAlign: 'center',
                      fontSize :15
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
    backgroundColor: '#74787C',
    borderWidth:1,
    borderColor:'#ff19f7',
    marginLeft: 30,
    marginRight: 30,
  },
});

export default ConsumerCartScreen;
