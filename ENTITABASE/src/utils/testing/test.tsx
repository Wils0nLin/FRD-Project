import React, {ReactNode} from 'react';
import {View} from 'react-native';
interface TestProps {
  com: ReactNode;
}
const Test = ({com}: TestProps) => {
  return <View>{com}</View>;
};

export default Test;
