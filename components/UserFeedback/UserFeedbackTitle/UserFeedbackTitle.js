import React from 'react';
import { Text } from 'react-native';

import { style } from './UserFeedbackTitle.style';

const UserFeedbackTitle = ({ title }) => (
  <Text style={style.title}>
    {title}
  </Text>
);

export default UserFeedbackTitle;
