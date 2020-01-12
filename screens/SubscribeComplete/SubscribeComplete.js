import React from 'react';
import { SafeAreaView } from 'react-native';

import { style } from './SubscribeComplete.style';

import SuccessMessage from '../../components/SuccessMessage/SuccessMessage';
import UserFeedback from '../../components/UserFeedback/UserFeedback';
import Buttons from '../../components/Buttons/Buttons';

const SubscribeComplete = () => (
  <SafeAreaView style={style.pageStyle}>
    <SuccessMessage />
    <Buttons />
    <UserFeedback />
  </SafeAreaView>
);

export default SubscribeComplete;
