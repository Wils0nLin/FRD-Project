import * as React from 'react';
import Svg, {Rect, Defs, Pattern, Use, Image} from 'react-native-svg';
const SwitchSVG = (props: any) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
    <Rect x={0.000244141} width={60} height={60} fill="url(#pattern0)" />
    <Defs>
      <Pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use xlinkHref="#image0_125_13115" transform="scale(0.01)" />
      </Pattern>
      <Image
        id="image0_125_13115"
        width={100}
        height={100}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
export default SwitchSVG;
