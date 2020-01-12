import React from 'react';
import { View } from 'react-native';

import { style } from './Buttons.style';

import ButtonYellow from './ButtonYellow/ButtonYellow';
import ButtonTransparent from './ButtonTransparent/ButtonTransparent';

const Buttons = () => (
  <View style={style.container}>
    <ButtonYellow title='SEND YOUR FIRST CARD' />
    <ButtonTransparent title='RETURN TO HOME' />
  </View>
);

export default Buttons;
