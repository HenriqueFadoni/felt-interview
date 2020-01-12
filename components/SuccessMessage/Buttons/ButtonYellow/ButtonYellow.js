import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { style } from './ButtonYellow.style'

const ButtonYellow = ({ title }) => (
  <TouchableOpacity>
    <View style={style.container}>
      <Text style={style.title}>
        {title}
      </Text>
    </View>
  </TouchableOpacity>
);

export default ButtonYellow;
