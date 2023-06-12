import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
const ConAppScreen = () => {
  return (
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
    </View>
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
    marginLeft: 20,
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
    marginLeft: 30,
    borderRadius: 15,
  },
});

const xboxStyle = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: '#65DC98',
    paddingLeft: 33,
    paddingRight: 32,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 30,
    borderRadius: 15,
  },
});
//

//game type style
const gameTypeAreaStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 15,
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
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 5,
    marginRight: 5,
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
