import * as React from 'react';
import Svg, {Line} from 'react-native-svg';
const WhiteLineSVG = (props: any) => (
  <Svg
    width={10}
    height={35}
    viewBox="0 0 10 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Line
      x1={5}
      y1={5}
      x2={5}
      y2={56}
      stroke="#7D7D7D"
      strokeWidth={10}
      strokeLinecap="round"
    />
  </Svg>
);
export default WhiteLineSVG;
