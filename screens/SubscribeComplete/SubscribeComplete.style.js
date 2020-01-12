import { StyleSheet } from 'react-native';

import { varColors } from '../../style/variables.style';

export const style = StyleSheet.create({
  pageStyle: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: varColors.black
  }
});
