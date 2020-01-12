import React from 'react';
import { Text } from 'react-native';

import { style } from './SuccessSubtitle.style';

const SuccessSubtitle = ({ subtitle }) => (
  <Text style={style.subtitle}>
    {subtitle}
  </Text>
);

export default SuccessSubtitle;
