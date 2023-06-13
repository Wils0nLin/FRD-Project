import {Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {consumerPageStyle} from './conAppScreen';
import UserLogoSVG from '../../../../assets/UserLogoSVG';
import {
  userIconStyle,
  userInfoInsideBoxStyle,
  userInfoOutsideBoxStyle,
  userNameStyle,
} from './conWishListScreen';
const ConProfileEditScreen = () => {
  return (
    <Layout>
      <ScrollView style={consumerPageStyle.container}>
        <View>
          <View style={userInfoOutsideBoxStyle.container}>
            <View style={userInfoInsideBoxStyle.container}>
              <UserLogoSVG style={userIconStyle.container} />
              <Text style={userNameStyle.container}>Hello World</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};
export default ConProfileEditScreen;
