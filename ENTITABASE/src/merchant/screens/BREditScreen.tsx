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

import SubmitSuccessModal from '../modals/SubmitSuccessModal';

import ForeheadView from '../../objects/MerchantForeheadView';

import Icon from 'react-native-vector-icons/FontAwesome5';
import LogoIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function BREditScreen({}) {
  const [text, onChangeText] = React.useState('');
  return (
    <ScrollView
      style={{
        backgroundColor: '#2A2E32',
      }}>
      <SafeAreaView style={styles.safeArea}>
        {ForeheadView()}
        <View style={styles.pageTitle}>
          <Text style={{fontSize: 20}}>商業資料更新</Text>
          <View style={styles.pageTitleLine} />
        </View>
        <View>
          <View style={styles.subTitle}>
            <Icon name={'signature'} size={20} color={'#E4E4E4'} />
            <Text style={styles.subTitleText}>商戶名稱</Text>
          </View>
          <View style={{width: 358}}>
            <View style={styles.inputBox}>
              <TextInput
                style={{fontSize: 15, padding: 0}}
                onChangeText={onChangeText}
                value={text}
                placeholder="iMobile百盈電訊"
              />
            </View>
          </View>
        </View>
        <View>
          <View style={styles.subTitle}>
            <LogoIcon
              name={'flag-variant-outline'}
              size={20}
              color={'#E4E4E4'}
            />
            <Text style={styles.subTitleText}>請上載最新之商業登記證</Text>
          </View>
          <View style={{width: 358, height: 320, alignItems: 'center'}}>
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
            <View style={styles.warningText}>
              <Icon name={'lightbulb'} size={25} color={'#E4E4E4'} solid />
              <Text style={{marginLeft: 10}}>
                提交修改申請後，請以電郵聯絡網站管理員，以便盡快更新商業資料
              </Text>
            </View>
          </View>
        </View>
        <SubmitSuccessModal />
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
  warningText: {width: 300, flexDirection: 'row', alignItems: 'center'},
});
