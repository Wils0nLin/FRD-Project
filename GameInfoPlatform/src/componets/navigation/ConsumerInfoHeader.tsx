import React from 'react';
import {Text, View} from 'react-native';

import UserLogoSVG from '../../assets/UserLogoSVG';

const ConsumerInfoHeader = ({Name}: any) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#D9D9D9',
          width: 360,
          height: 65,
          alignSelf: 'center',
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
        }}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            width: '90%',
            height: '60%',
            alignSelf: 'center',
            borderRadius: 10,
            flexDirection: 'row',
            marginTop: 15,
            marginBottom: -50,
          }}>
          <UserLogoSVG
            style={{
              marginTop: 10,
              marginLeft: 20,
            }}
          />
          <Text
            style={{
              marginTop: 8,
              marginLeft: 10,
              fontSize: 25,
            }}>
            {Name}
          </Text>
        </View>
      </View>
    </View>
  );
};
// title style

export default ConsumerInfoHeader;
