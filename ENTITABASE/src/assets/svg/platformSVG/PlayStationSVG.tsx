import * as React from 'react';
import Svg, {Rect, Defs, Pattern, Use, Image} from 'react-native-svg';
const PlayStationSVG = (props: any) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
    <Rect x={0.000244141} width={70} height={70} fill="url(#pattern0)" />
    <Defs>
      <Pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use xlinkHref="#image0_125_13116" transform="scale(0.01)" />
      </Pattern>
      <Image
        id="image0_125_13116"
        width={100}
        height={100}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
export default PlayStationSVG;
