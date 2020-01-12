import React from 'react';
import { Text } from 'react-native';

import { style } from './UserFeedbackParagraph.style';

const UserFeedbackParagraph = ({ children }) => (
  <Text style={style.feedbackParagraph}>
    {children}
  </Text>
);

export default UserFeedbackParagraph;
