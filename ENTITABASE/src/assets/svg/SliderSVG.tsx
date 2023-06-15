import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SliderSVG = (props: any) => (
  <Svg
    width={450}
    height={180}
    viewBox="0 0 1000 398"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path d="M0.5 0.5H999.5V397.5H0.5V0.5Z" fill="white" stroke="#7D7D7D" />
  </Svg>
);
export default SliderSVG;
