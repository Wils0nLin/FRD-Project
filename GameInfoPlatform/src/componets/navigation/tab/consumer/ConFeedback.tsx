import {Layout} from '@ui-kitten/components';
import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import ConsumerInfoHeader from '../../ConsumerInfoHeader';

const ConFeedback = () => {
  return (
    <ScrollView style={{backgroundColor: 'rgb(40,40,40)'}}>
      <Layout style={styles.layout}>
        {ConsumerInfoHeader('ss')}
        <Layout>
          <Text>Title wait for wilson</Text>
        </Layout>
      </Layout>
    </ScrollView>
  );
};

export default ConFeedback;
const styles = StyleSheet.create({
  layout: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '90%',
  },
});
