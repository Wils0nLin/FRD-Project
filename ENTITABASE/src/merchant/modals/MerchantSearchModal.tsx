/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import LogoIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SearchModal() {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = React.useState('');
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalBackground}>
          <View style={styles.modalStyle}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={styles.pageTitle}>
                  <Text style={{fontSize: 20}}>搜尋商品</Text>
                  <View style={styles.pageTitleLine} />
                </View>
                <TouchableOpacity
                  style={{margin: 5, marginHorizontal: 10}}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Icon name={'times'} size={40} color={'#E4E4E4'} />
                </TouchableOpacity>
              </View>
              <View style={styles.modalInput}>
                <TextInput
                  style={{fontSize: 15, padding: 0}}
                  onChangeText={onChangeText}
                  value={text}
                  placeholder="請輸入關鍵字"
                />
                <Icon name={'search'} size={25} color={'#E4E4E4'} />
              </View>
              <View style={styles.subTitle}>
                <Icon name={'location-arrow'} size={15} color={'#E4E4E4'} />
                <Text style={styles.subTitleText}>結果順序</Text>
              </View>
              <View style={styles.modalButtonBox}>
                <TouchableOpacity style={styles.modalButtonFor2}>
                  <Text style={{fontSize: 15}}>最新</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButtonFor2}>
                  <Text style={{fontSize: 15}}>最舊</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.subTitle}>
                <Icon name={'funnel-dollar'} size={15} color={'#E4E4E4'} />
                <Text style={styles.subTitleText}>價格順序</Text>
              </View>
              <View style={styles.modalButtonBox}>
                <TouchableOpacity style={styles.modalButtonFor2}>
                  <Text style={{fontSize: 15}}>最高</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButtonFor2}>
                  <Text style={{fontSize: 15}}>最低</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.subTitle}>
                <Icon name={'gamepad'} size={15} color={'#E4E4E4'} />
                <Text style={styles.subTitleText}>遊玩平台</Text>
              </View>
              <View style={styles.modalButtonBox}>
                <TouchableOpacity style={styles.modalButtonSwitch}>
                  <LogoIcon
                    name={'nintendo-switch'}
                    size={20}
                    color={'#E4E4E4'}
                  />
                  <Text style={styles.buttonTextWithIcon}>SWITCH</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButtonPSX}>
                  <LogoIcon
                    name={'sony-playstation'}
                    size={25}
                    color={'#E4E4E4'}
                  />
                  <Text style={styles.buttonTextWithIcon}>PSX</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButtonXBOX}>
                  <LogoIcon
                    name={'microsoft-xbox'}
                    size={20}
                    color={'#E4E4E4'}
                  />
                  <Text style={styles.buttonTextWithIcon}>XBOX</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.subTitle}>
                <Icon name={'tags'} size={15} color={'#E4E4E4'} />
                <Text style={styles.subTitleText}>遊戲類型</Text>
              </View>
              <View style={styles.modalButtonBox}>
                <TouchableOpacity style={styles.modalButtonFor2}>
                  <Icon name={'theater-masks'} size={15} color={'#E4E4E4'} />
                  <Text style={styles.buttonTextWithIcon}>角色扮演</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButtonFor2}>
                  <Icon name={'running'} size={15} color={'#E4E4E4'} />
                  <Text style={styles.buttonTextWithIcon}>動作冒險</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.modalButtonBox}>
                <TouchableOpacity style={styles.modalButtonFor3}>
                  <Icon name={'crosshairs'} size={15} color={'#E4E4E4'} />
                  <Text style={styles.buttonTextWithIcon}>射擊</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButtonFor3}>
                  <Icon name={'trophy'} size={15} color={'#E4E4E4'} />
                  <Text style={styles.buttonTextWithIcon}>競技</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButtonFor3}>
                  <Icon name={'video'} size={15} color={'#E4E4E4'} />
                  <Text style={styles.buttonTextWithIcon}>劇情</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.modalButtonBox}>
                <TouchableOpacity style={styles.modalButtonFor3}>
                  <Icon name={'users'} size={15} color={'#E4E4E4'} />
                  <Text style={styles.buttonTextWithIcon}>合作</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButtonFor3}>
                  <Icon name={'basketball-ball'} size={15} color={'#E4E4E4'} />
                  <Text style={styles.buttonTextWithIcon}>體育</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButtonFor3}>
                  <Icon name={'chess'} size={15} color={'#E4E4E4'} />
                  <Text style={styles.buttonTextWithIcon}>策略</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.modalButtonBox}>
                <TouchableOpacity style={styles.modalButtonFor3}>
                  <LogoIcon name={'boxing-glove'} size={20} color={'#E4E4E4'} />
                  <Text style={styles.buttonTextWithIcon}>格鬥</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButtonFor3}>
                  <Icon name={'music'} size={15} color={'#E4E4E4'} />
                  <Text style={styles.buttonTextWithIcon}>音樂</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButtonFor3}>
                  <Icon name={'question'} size={15} color={'#E4E4E4'} />
                  <Text style={styles.buttonTextWithIcon}>解謎</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.modalButtonBox}>
                <TouchableOpacity style={styles.modalButtonFor3}>
                  <LogoIcon
                    name={'cards-playing-outline'}
                    size={20}
                    color={'#E4E4E4'}
                  />
                  <Text style={styles.buttonTextWithIcon}>卡牌</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButtonFor3}>
                  <LogoIcon name={'party-popper'} size={20} color={'#E4E4E4'} />
                  <Text style={styles.buttonTextWithIcon}>家庭</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButtonFor3}>
                  <Icon
                    name={'hand-holding-heart'}
                    size={15}
                    color={'#E4E4E4'}
                  />
                  <Text style={styles.buttonTextWithIcon}>育成</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.modalButtonBox}>
                <TouchableOpacity style={styles.modalButtonFor3}>
                  <LogoIcon name={'axe-battle'} size={20} color={'#E4E4E4'} />
                  <Text style={styles.buttonTextWithIcon}>生存</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButtonFor3}>
                  <Icon name={'paint-roller'} size={15} color={'#E4E4E4'} />
                  <Text style={styles.buttonTextWithIcon}>工藝</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButtonFor3}>
                  <Icon name={'skull-crossbones'} size={15} color={'#E4E4E4'} />
                  <Text style={styles.buttonTextWithIcon}>恐怖</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.modalButtonFor1}>
                <Text style={{fontSize: 17}}>商品搜尋</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Icon name={'search'} size={30} color={'#E4E4E4'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#rgba(0,0,0,0.8)',
  },
  modalStyle: {
    backgroundColor: '#2A2E32',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 3,
    borderColor: '#ffffff',
    width: 350,
  },
  pageTitle: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 10,
    paddingLeft: 10,
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
    paddingLeft: 10,
    paddingRight: 10,
  },
  subTitleText: {width: 80, marginLeft: 10, fontSize: 17},
  modalButtonBox: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginTop: 3,
    marginBottom: 10,
    marginHorizontal: 8,
    width: 320,
  },
  modalButtonFor1: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    marginVertical: 15,
    width: 320,
    height: 35,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#7A04EB',
  },
  modalButtonFor2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 155,
    height: 35,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
  modalButtonFor3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 35,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
  buttonTextWithIcon: {fontSize: 15, marginLeft: 8},
  modalButtonSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 35,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FF2A6D',
  },
  modalButtonPSX: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 35,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#05D9E8',
  },
  modalButtonXBOX: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 35,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#65DC98',
  },
  modalInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 3,
    marginBottom: 10,
    marginHorizontal: 8,
    paddingHorizontal: 10,
    width: 320,
    height: 45,
    backgroundColor: '#202124',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B7C1DE',
  },
});
