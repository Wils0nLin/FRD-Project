import React from 'react';
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

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ConAppScreen = ({navigation}: any) => {
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
          <RightArrowSVG style={arrowStyle.container} />
        </View>

        <View style={filterTypeStyle.container}>
          <Text style={filterWordsStyle.container}>熱門遊戲</Text>
          <Text style={filterWordsStyle.container}>即將發行</Text>
        </View>

        <View style={gameListAreaStyle.container}>
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
          <TouchableOpacity onPress={() => navigation.navigate('GameInfo')}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                width: 80,
              }}>
              <Image
                style={gameImgStyle.container}
                source={require('../../../../assets/images/zelda.jpg')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('GameInfo')}>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 25, color: 'white'}} numberOfLines={1}>
                薩爾達 王國之淚
              </Text>
              <Text style={{fontSize: 17, color: 'white'}}>大量現貨</Text>
            </View>
          </TouchableOpacity>
          <View
            style={{alignItems: 'flex-end', justifyContent: 'space-between'}}>
            <TouchableOpacity>
              <FontAwesome5 name={'heart'} size={35} color={'#7A04EB'} />
            </TouchableOpacity>
            <View style={{alignItems: 'flex-end'}}>
              {/* <Text>HK$ 400.00</Text> */}
              <Text style={{fontSize: 20, color: 'white'}}>現貨發售中</Text>
            </View>
          </View>
        </View>

        <View style={gameListAreaStyle.container}>
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
          <TouchableOpacity onPress={() => navigation.navigate('GameInfo')}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                width: 80,
              }}>
              <Image
                style={gameImgStyle.container}
                source={require('../../../../assets/images/zelda.jpg')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('GameInfo')}>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 25, color: 'white'}} numberOfLines={1}>
                薩爾達 王國之淚
              </Text>
              <Text style={{fontSize: 17, color: 'white'}}>大量現貨</Text>
            </View>
          </TouchableOpacity>
          <View
            style={{alignItems: 'flex-end', justifyContent: 'space-between'}}>
            <TouchableOpacity>
              <FontAwesome5 name={'heart'} size={35} color={'#7A04EB'} />
            </TouchableOpacity>
            <View style={{alignItems: 'flex-end'}}>
              {/* <Text>HK$ 400.00</Text> */}
              <Text style={{fontSize: 20, color: 'white'}}>現貨發售中</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export const consumerPageStyle = StyleSheet.create({
  container: {
    backgroundColor: '#202124',
    height: 600,
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
    borderRadius: 15,
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
    borderRadius: 15,
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
    borderRadius: 15,
  },
});
//

//game type style
const gameTypeAreaStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 15,
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
    borderRadius: 15,
    width: 80,
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

// filter
const filterTypeStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
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

const filterWordsStyle = StyleSheet.create({
  container: {
    color: 'white',
    fontSize: 18,
    marginLeft: 50,
    marginTop: 10,
  },
});
//
export default ConAppScreen;
