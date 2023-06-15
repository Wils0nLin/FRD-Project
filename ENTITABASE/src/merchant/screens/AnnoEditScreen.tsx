/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, ScrollView, StyleSheet, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native';

import UpdateSuccessModal from '../modals/MerchantUpdateSuccessModal';

import ForeheadView from '../../objects/MerchantForeheadView';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function AnnoEditScreen({}) {
  const [text, onChangeText] = React.useState('');
  return (
    <ScrollView
      style={{
        backgroundColor: '#2A2E32',
      }}>
      <SafeAreaView style={styles.safeArea}>
        {ForeheadView()}
        <View style={styles.pageTitle}>
          <Text style={{fontSize: 20}}>商戶公告修改</Text>
          <View style={styles.pageTitleLine} />
        </View>
        <View>
          <View style={styles.subTitle}>
            <Icon name={'bullhorn'} size={20} color={'#E4E4E4'} />
            <Text style={styles.subTitleText}>公告修改</Text>
          </View>
          <View style={{width: 358, height: 420}}>
            <View style={styles.inputBigBox}>
              <TextInput
                style={{fontSize: 15, padding: 0}}
                onChangeText={onChangeText}
                value={text}
                placeholder="本店是香港任天堂指定轉銷商，詳情可睇任天堂網站。"
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
});
