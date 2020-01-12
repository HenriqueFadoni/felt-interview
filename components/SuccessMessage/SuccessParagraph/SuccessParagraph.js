import React from 'react';
import { Text } from 'react-native';

import { style } from './SuccessParagraph.style';

const SuccessParagraph = ({ children }) => (
  <Text style={style.paragraph}>
    {children}
  </Text>
);

export default SuccessParagraph;
