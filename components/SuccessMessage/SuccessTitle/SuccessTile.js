import React from 'react';
import { Text } from 'react-native';

import { style } from './SuccessTile.style';

const SuccessTitle = ({ title }) => (
  <Text style={style.title}>
    {title}
  </Text>
);

export default SuccessTitle;
