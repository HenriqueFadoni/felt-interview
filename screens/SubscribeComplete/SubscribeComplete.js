import React from 'react';
import { SafeAreaView } from 'react-native';

import { style } from './SubscribeComplete.style';

import SuccessMessage from '../../components/SuccessMessage/SuccessMessage';
import UserFeedback from '../../components/UserFeedback/UserFeedback';

const SubscribeComplete = () => (
  <SafeAreaView style={style.pageStyle}>
    <SuccessMessage />
    <UserFeedback />
  </SafeAreaView>
);

export default SubscribeComplete;
