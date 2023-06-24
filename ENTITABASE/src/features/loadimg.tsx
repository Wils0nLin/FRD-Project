/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Button, Image, ScrollView} from 'react-native';

import {encode as btoa} from 'base-64';

const demo = () => {
  const [buffer, setbuffer] = useState<any>();
  const [img, setImg] = useState<any>();
  useEffect(() => {
    const getPhoto = async () => {
      await fetch('http://10.0.2.2:3000/consumer/test')
        .then(resopnse => resopnse.json())
        .then(data => {
          console.log(data);
          setbuffer(data[1]);
        });
      console.log();

      const base64String = btoa(
        String.fromCharCode(...new Uint8Array(buffer.merchant_image.data)),
      );
      console.log(base64String);
      setImg(base64String);
    };

    getPhoto();
  }, []);

  return (
    <ScrollView>
      <Button
        title="test"
        onPress={() => {
          console.log(img);
        }}
      />
      <Image
        style={{height: 200, width: 200}}
        source={{uri: `data:image/jpeg;base64,${img}`}}
      />
    </ScrollView>
  );
};

export default ConsumerCartScreen;
