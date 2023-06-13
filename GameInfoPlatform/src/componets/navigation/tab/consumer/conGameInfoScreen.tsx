import React from 'react';
import {Button, Text, View} from 'react-native';
import GameInfoPhotoSVG from '../../../../assets/consumerSVG/ConsumerGameInfoSVG';
import {consumerPageStyle} from './conAppScreen';

const ConGameInfoScreen = (navigation: any) => {
  return (
    <View style={consumerPageStyle.container}>
      <GameInfoPhotoSVG />
      {/* <Text style={}>現貨發售中</Text> */}
    </View>
  );
};

export default ConGameInfoScreen;
