import { StyleSheet } from 'react-native';

import { varColors } from '../../../style/variables.style';

export const style = StyleSheet.create({
  container: {
    backgroundColor: varColors.yellow,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: varColors.white,
    borderRadius: 5,
    marginBottom: 20,
    paddingVertical: 10
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: varColors.white
  }
});
