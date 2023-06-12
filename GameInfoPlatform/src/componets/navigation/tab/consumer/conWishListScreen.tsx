import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {consumerPageStyle} from './conAppScreen';
import UserLogoSVG from '../../../../assets/UserLogoSVG';
import WhiteLineSVG from '../../../../assets/lineSVG/whiteLineSVG';
import LeftArrowSVG from '../../../../assets/gameTypeSVG/leftArrowSVG';
import RightArrowSVG from '../../../../assets/gameTypeSVG/rightArrowSVG';

const ConWishListScreen = (navigation: any) => {
  return (
    <View style={consumerPageStyle.container}>
      <View style={userInfoOutsideBoxStyle.container}>
        <View style={userInfoInsideBoxStyle.container}>
          <UserLogoSVG style={userIconStyle.container} />
          <Text style={userNameStyle.container}>Hello World</Text>
        </View>
      </View>
      <View style={titleStyle.container}>
        <WhiteLineSVG style={WhiteLineStyle.container} />
        <Text style={titleName.container}>願望清單</Text>
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
        <View style={{flex: 1}}>
          <Text style={{fontSize: 25}} numberOfLines={1}>
            薩爾達 王國之淚
          </Text>
          <Text style={{fontSize: 17}}>大量現貨</Text>
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
        <View style={{flex: 1}}>
          <Text style={{fontSize: 25}} numberOfLines={1}>
            薩爾達 王國之淚
          </Text>
          <Text style={{fontSize: 17}}>大量現貨</Text>
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
        <View style={{flex: 1}}>
          <Text style={{fontSize: 25}} numberOfLines={1}>
            薩爾達 王國之淚
          </Text>
          <Text style={{fontSize: 17}}>大量現貨</Text>
        </View>
      </View>

      <View style={changePageStyle.container}>
        <Text style={changePageWordStyle.container}>上一頁</Text>
        <LeftArrowSVG style={changeArrowStyle.container} />
        <Text style={changePageWordStyle.container}>1</Text>
        <RightArrowSVG style={changeArrowStyle.container} />
        <Text style={changePageWordStyle.container}>下一頁</Text>
      </View>
    </View>
  );
};

// user info style
const userInfoOutsideBoxStyle = StyleSheet.create({
  container: {
    backgroundColor: '#D9D9D9',
    width: 350,
    height: 80,
    marginLeft: 32,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

const userInfoInsideBoxStyle = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: 250,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    marginLeft: 50,
    marginTop: 15,
  },
});

const userIconStyle = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 20,
  },
});

const userNameStyle = StyleSheet.create({
  container: {
    marginTop: 8,
    marginLeft: 10,
    fontSize: 25,
  },
});
//

// title style

const titleStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
export const WhiteLineStyle = StyleSheet.create({
  container: {marginLeft: 30, marginTop: 3},
});

export const titleName = StyleSheet.create({
  container: {
    color: '#FFFFFF',
    fontSize: 25,
    marginLeft: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
});
//

// game list
export const gameListAreaStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 8,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#74787C',
  },
});

export const gameImgStyle = StyleSheet.create({
  container: {
    width: 49.41,
    height: 80,
  },
});

//
// Change page
const changePageStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 90,
  },
});

const changePageWordStyle = StyleSheet.create({
  container: {
    color: '#FFFFFF',
    fontSize: 22,
    marginLeft: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
});

const changeArrowStyle = StyleSheet.create({
  container: {
    marginTop: 7,
    marginLeft: 5,
  },
});
//

export default ConWishListScreen;
