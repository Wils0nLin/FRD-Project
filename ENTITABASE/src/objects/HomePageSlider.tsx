/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

export default function HomePageSlider() {
  const [images] = React.useState([
    require('../assets/images/slider1.jpg'),
    require('../assets/images/slider2.jpg'),
    require('../assets/images/slider3.jpg'),
    require('../assets/images/slider5.jpg'),
    require('../assets/images/slider4.jpg'),
  ]);

  return (
    <View style={{width: 350, height: 158, alignItems: 'center'}}>
      <SliderBox
        images={images}
        parentWidth={340}
        sliderBoxHeight={158}
        dotColor="#7A04EB"
        inactiveDotColor="#90A4AE"
        paginationBoxVerticalPadding={10}
        autoplay
        circleLoop
      />
    </View>
  );
}
