import React from 'react';
import { View } from 'react-native';

import { style } from './SuccessMessage.style';

import SuccessTitle from './SuccessTitle/SuccessTile';
import SuccessSubtitle from './SuccessSubtitle/SuccessSubtitle';
import SuccessParagraph from './SuccessParagraph/SuccessParagraph';
import Buttons from './Buttons/Buttons';

const SuccessMessage = () => (
  <View style={style.textContainer}>
    <SuccessSubtitle subtitle='SUCCESS!' />
    <SuccessTitle title='You are now subscribed to Felt PRO!' />
    <SuccessParagraph>
      Send your first card, watch a video
      with handy tips & tricks to improve
      your handwriting, or get started with
      your first custom card design!
    </SuccessParagraph>
    <Buttons />
  </View>
);

export default SuccessMessage;
