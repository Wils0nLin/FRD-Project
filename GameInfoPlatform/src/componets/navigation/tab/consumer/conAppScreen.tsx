import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SwitchSVG from '../../../../assets/platformSVG/SwitchSVG';
import PlayStationSVG from '../../../../assets/platformSVG/PlayStationSVG';
import XboxSVG from '../../../../assets/platformSVG/XboxSVG';
import SliderSVG from '../../../../assets/SliderSVG';
import RolePlaySVG from '../../../../assets/gameTypeSVG/rolePlaySVG';
import LeftArrowSVG from '../../../../assets/gameTypeSVG/leftArrowSVG';
import ActionSVG from '../../../../assets/gameTypeSVG/actionSVG';
import CompetitiveSVG from '../../../../assets/gameTypeSVG/competitiveSVG';
import ShotSVG from '../../../../assets/gameTypeSVG/shotSVG';
import RightArrowSVG from '../../../../assets/gameTypeSVG/rightArrowSVG';
import {gameImgStyle, gameListAreaStyle} from './conWishListScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LogoIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Button, Layout} from '@ui-kitten/components';
import GameInfo from '../../pages/gameInfoModule';

const ConAppScreen = () => {
  const HotArr = [
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
  const ComingArr = [
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
  const [select, setSelect] = useState('');
  const [list, setList] = useState(HotArr);

  const isSelect = (button: string) => {
    if (button == '熱門遊戲') {
      setList(HotArr);
      setSelect('熱門遊戲');
    } else if (button == '即將發行') {
      setList(ComingArr);
      setSelect('即將發行');
    }
    return [list, select];
  };

  return (
    <ScrollView>
      <View style={consumerPageStyle.container}>
        <View>
          <SliderSVG />
        </View>

        <View style={platformStyle.container}>
          {/* <Text style={smallWordsStyle.container}>Consumer App Screen</Text> */}

          <View style={switchStyle.container}>
            <SwitchSVG
              style={{
                position: 'relative',
                left: 3,
                bottom: 2,
              }}
            />
            <Text style={smallWordsStyle.container}>SWITCH</Text>
          </View>
          <View style={playStationStyle.container}>
            <PlayStationSVG
              style={{
                position: 'relative',
                left: 16,
                bottom: 2,
              }}
            />
            <Text style={smallWordsStyle.container}>PLAYSTATION</Text>
          </View>
          <View style={xboxStyle.container}>
            <XboxSVG
              style={{
                position: 'relative',
                right: 1,
                bottom: 2,
              }}
            />
            <Text style={smallWordsStyle.container}>XBOX</Text>
          </View>
        </View>

        <View style={gameTypeAreaStyle.container}>
          <LeftArrowSVG style={arrowStyle.container} />
          <ScrollView horizontal={true}>
            <View style={gameTypeStyle.container}>
              <RolePlaySVG />
              <Text style={smallWordsStyle.container}>角色扮演</Text>
            </View>
            <View style={gameTypeStyle.container}>
              <ActionSVG />
              <Text style={smallWordsStyle.container}>動作</Text>
            </View>
            <View style={gameTypeStyle.container}>
              <ShotSVG />
              <Text style={smallWordsStyle.container}>射擊</Text>
            </View>

            <View style={gameTypeStyle.container}>
              <CompetitiveSVG />
              <Text style={smallWordsStyle.container}>競技</Text>
            </View>
            <View style={gameTypeStyle.container}>
              <Icon name={'video'} size={30} color={'#E4E4E4'} />
              <Text style={smallWordsStyle.container}>劇情</Text>
            </View>
            <View style={gameTypeStyle.container}>
              <Icon name={'users'} size={30} color={'#E4E4E4'} />
              <Text style={smallWordsStyle.container}>合作</Text>
            </View>
            <View style={gameTypeStyle.container}>
              <Icon name={'basketball-ball'} size={30} color={'#E4E4E4'} />
              <Text style={smallWordsStyle.container}>體育</Text>
            </View>

            <View style={gameTypeStyle.container}>
              <Icon name={'chess'} size={30} color={'#E4E4E4'} />
              <Text style={smallWordsStyle.container}>策略</Text>
            </View>
            <View style={gameTypeStyle.container}>
              <LogoIcon name={'boxing-glove'} size={30} color={'#E4E4E4'} />
              <Text style={smallWordsStyle.container}>格鬥</Text>
            </View>
            <View style={gameTypeStyle.container}>
              <Icon name={'music'} size={30} color={'#E4E4E4'} />
              <Text style={smallWordsStyle.container}>音樂</Text>
            </View>
            <View style={gameTypeStyle.container}>
              <Icon name={'question'} size={30} color={'#E4E4E4'} />
              <Text style={smallWordsStyle.container}>解謎</Text>
            </View>

            <View style={gameTypeStyle.container}>
              <LogoIcon
                name={'cards-playing-outline'}
                size={30}
                color={'#E4E4E4'}
              />
              <Text style={smallWordsStyle.container}>卡牌</Text>
            </View>
            <View style={gameTypeStyle.container}>
              <LogoIcon name={'party-popper'} size={30} color={'#E4E4E4'} />
              <Text style={smallWordsStyle.container}>家庭</Text>
            </View>
            <View style={gameTypeStyle.container}>
              <Icon name={'hand-holding-heart'} size={30} color={'#E4E4E4'} />
              <Text style={smallWordsStyle.container}>育成</Text>
            </View>
            <View style={gameTypeStyle.container}>
              <LogoIcon name={'axe-battle'} size={30} color={'#E4E4E4'} />
              <Text style={smallWordsStyle.container}>生存</Text>
            </View>

            <View style={gameTypeStyle.container}>
              <Icon name={'paint-roller'} size={30} color={'#E4E4E4'} />
              <Text style={smallWordsStyle.container}>工藝</Text>
            </View>
            <View style={gameTypeStyle.container}>
              <Icon name={'skull-crossbones'} size={30} color={'#E4E4E4'} />
              <Text style={smallWordsStyle.container}>恐怖</Text>
            </View>
          </ScrollView>
          <RightArrowSVG style={arrowStyle.container} />
        </View>

        <Layout style={styles.layout}>
          <Layout style={styles.row}>
            <Button
              style={select == '熱門遊戲' ? styles.buttonSelect : styles.button}
              appearance="ghost"
              status="control"
              onPress={() => isSelect('熱門遊戲')}>
              熱門遊戲
            </Button>
            <Button
              style={select == '即將發行' ? styles.buttonSelect : styles.button}
              appearance="ghost"
              status="control"
              onPress={() => isSelect('即將發行')}>
              即將發行
            </Button>
          </Layout>
          <Layout>
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
      </View>
    </ScrollView>
  );
};

export const consumerPageStyle = StyleSheet.create({
  container: {
    backgroundColor: '#302124',
    height: 600,
    // marginBottom: 32,
  },
});

// platform style
const platformStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const switchStyle = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: '#FF2A6D',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 30,
  },
});

const playStationStyle = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: '#05D9E8',
    paddingLeft: 19,
    paddingRight: 19,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 30,
  },
});

const xboxStyle = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: '#65DC98',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 30,
  },
});
//

//game type style
const gameTypeAreaStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around',
  },
});

const arrowStyle = StyleSheet.create({
  container: {
    marginTop: 25,
  },
});

const gameTypeStyle = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: '#B7C1DE',
    borderRadius: 30,
    width: 82,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
  },
});
//

// 文字style
const smallWordsStyle = StyleSheet.create({
  container: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
    padding: 0,
  },
});
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
    alignSelf: 'flex-start',
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

export default ConAppScreen;
