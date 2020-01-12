import React from 'react';
import { View } from 'react-native';

import { style } from './UserFeedback.style';

import HorizontalLine from './HorizontalLine/HorizontalLine';
import UserFeedbackTitle from './UserFeedbackTitle/UserFeedbackTitle';
import UserFeedbackParagraph from './UserFeedbackParagraph/UserFeedbackParagraph';
import FeedbackEmail from './FeedbackEmail/FeedbackEmail';

const UserFeedback = () => (
  <View style={style.container}>
    <HorizontalLine />
    <UserFeedbackTitle title='QUESTIONS, COMMENTS?' />
    <UserFeedbackParagraph>
      We love feedback from our customers. Let us know how We
      can make your experience with Felt even better!
    </UserFeedbackParagraph>
    <FeedbackEmail email='hi@feltapp.com' />
  </View>
);

export default UserFeedback;
