import React from 'react';
import { Text, Linking } from 'react-native';

import { style } from './FeedbackEmail.style';

const FeedbackEmail = ({ email }) => (
  <Text
    style={style.feedbackEmail}
    onPress={() => Linking.openURL(`mailto:${email}?subject=FeedBack`)}
  >
    {email}
  </Text>
)

export default FeedbackEmail;
