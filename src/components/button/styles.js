import { StyleSheet } from 'react-native';
import { metrics, colors } from '../../resources/styles';

export default StyleSheet.create({
  buttonContainer: {
    height: metrics.buttonHeight,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: metrics.baseMeasure,
    borderRadius: metrics.baseRadius
  },
  rounded:{
    borderRadius:30
  },
  primary: {
    backgroundColor: colors.primary.base
  },
  secundary: {
    backgroundColor: colors.secundary.base
  },
  success: {
    backgroundColor: colors.success
  },
  danger: {
    backgroundColor: colors.danger
  },
  warning: {
    backgroundColor: colors.warning
  },
  info: {
    backgroundColor: colors.info
  },
  black: {
    backgroundColor: colors.black
  },
  white: {
    backgroundColor: colors.white
  },
  default: {
    backgroundColor: colors.default
  }
});
