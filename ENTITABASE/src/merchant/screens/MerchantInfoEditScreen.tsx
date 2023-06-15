/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native';

import UpdateSuccessModal from '../modals/MerchantUpdateSuccessModal';

import ForeheadView from '../../objects/MerchantForeheadView';

import Icon from 'react-native-vector-icons/FontAwesome5';
import LogoIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function InfoEditScreen({}) {
  const [phone, onChangePhone] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [address, onChangeAddress] = React.useState('');
  const [post, onChangePost] = React.useState('');
  return (
    <ScrollView
      style={{
        backgroundColor: '#2A2E32',
      }}>
      <SafeAreaView style={styles.safeArea}>
        {ForeheadView()}
        <View style={styles.pageTitle}>
          <Text style={{fontSize: 20}}>商戶資料修改</Text>
          <View style={styles.pageTitleLine} />
        </View>
        <View>
          <View style={styles.subTitle}>
            <LogoIcon
              name={'flag-variant-outline'}
              size={20}
              color={'#E4E4E4'}
            />
            <Text style={styles.subTitleText}>商戶標誌</Text>
          </View>
          <View style={{width: 358}}>
            <View style={styles.inputImageBox}>
              <TouchableOpacity style={styles.imageUploadBox}>
                <LogoIcon
                  name={'file-image-plus'}
                  size={50}
                  color={'#E4E4E4'}
                />
                <Text style={{marginTop: 5, fontSize: 15}}>請點擊上載圖片</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.subTitle}>
            <Icon name={'phone-alt'} size={20} color={'#E4E4E4'} />
            <Text style={styles.subTitleText}>商戶電話</Text>
          </View>
          <View style={{width: 358}}>
            <View style={styles.inputBox}>
              <TextInput
                style={{fontSize: 15, padding: 0}}
                onChangeText={onChangePhone}
                value={phone}
                placeholder="88888888"
              />
            </View>
          </View>
        </View>
        <View>
          <View style={styles.subTitle}>
            <LogoIcon name={'email-outline'} size={20} color={'#E4E4E4'} />
            <Text style={styles.subTitleText}>商戶電郵</Text>
          </View>
          <View style={{width: 358}}>
            <View style={styles.inputBox}>
              <TextInput
                style={{fontSize: 15, padding: 0}}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="merchantemail@gmail.com"
              />
            </View>
          </View>
        </View>
        <View>
          <View style={styles.subTitle}>
            <Icon name={'map-marker-alt'} size={20} color={'#E4E4E4'} />
            <Text style={styles.subTitleText}>商店地址</Text>
          </View>
          <View style={{width: 358}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity style={styles.inputLeftBox}>
                <Text style={{fontSize: 15}}>新界</Text>
                <Icon name={'angle-down'} size={30} color={'#E4E4E4'} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.inputRightBox}>
                <Text style={{fontSize: 15}}>屯門區</Text>
                <Icon name={'angle-down'} size={30} color={'#E4E4E4'} />
              </TouchableOpacity>
            </View>
            <View style={styles.inputBox}>
              <TextInput
                style={{fontSize: 15, padding: 0}}
                onChangeText={onChangeAddress}
                value={address}
                placeholder="建泰街6號恒威工業中心1座15樓02室"
              />
            </View>
          </View>
        </View>
        <View>
          <View style={styles.subTitle}>
            <LogoIcon
              name={'clock-time-four-outline'}
              size={20}
              color={'#E4E4E4'}
            />
            <Text style={styles.subTitleText}>營業時間修改</Text>
          </View>
          <View style={{width: 358}}>
            <View style={styles.inputBigBox}>
              <TextInput
                style={{fontSize: 15, padding: 0}}
                onChangeText={onChangePost}
                value={post}
                placeholder="星期一：11:00 a.m. - 9:00 p.m."
              />
            </View>
          </View>
        </View>
        <UpdateSuccessModal />
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
  subTitle: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5,
    marginBottom: 0,
    marginTop: 10,
    paddingLeft: 10,
    width: 350,
  },
  subTitleText: {marginLeft: 10, fontSize: 20},
  imageUploadBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 120,
    borderStyle: 'dashed',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#7A04EB',
  },
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 8,
    paddingHorizontal: 10,
    height: 45,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
  inputLeftBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
    marginBottom: 2,
    marginRight: 1,
    paddingHorizontal: 10,
    width: 166,
    height: 45,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
  inputRightBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
    marginBottom: 2,
    marginLeft: 1,
    paddingHorizontal: 10,
    width: 166,
    height: 45,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
  inputBigBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 150,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
  inputImageBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 150,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
});
