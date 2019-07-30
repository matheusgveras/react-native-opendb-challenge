import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  tinyMeasure: 5,
  smallMeasure: 10,
  baseMeasure: 15,
  largeMeasure: 20,
  bigMeasure: 25,
  hugeMeasure: 30,

  screenWidth: width,
  screenHeight: height,

  tabBarHeight: 54,
  navBarHeight: 54,
  statusBarHeight: (Platform.OS === 'ios') ? 20 : 0,
  inputHeight: (Platform.OS === 'android') ? 36 : 26,
  buttonHeight: 42,

  baseRadius: 5
};
