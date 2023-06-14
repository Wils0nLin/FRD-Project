import React from 'react';
import GameInfo from './gameInfoModule';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Try = () => {
  const image = require('../../../assets/images/zelda.jpg');
  const name = '薩爾達 王國之淚';
  const amount = '大量現貨';
  const status = '現貨發售中';
  const logo = <FontAwesome5 name={'heart'} size={35} color={'#7A04EB'} />;

  return (
    <GameInfo
      image={image}
      name={name}
      amount={amount}
      status={status}
      logo={logo}
    />
  );
};

export default Try;
