import { StyleSheet } from 'react-native';

import { colors, metrics, fonts } from '../../resources/styles';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 75,
    backgroundColor:'#00306B',
    borderTopColor: '#00306B',
    borderTopWidth: 1,
    borderRadius: 0
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: metrics.smallMeasure,
    backgroundColor:'#00306B',
  },
  contentBlack: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: metrics.smallMeasure,
    backgroundColor:'#000',
  },
  label: {
    flex: 1,
    letterSpacing: 2,
    color: '#fff',
    fontWeight: 'bold'
  },
  labelWhite: {
    flex: 1,
    letterSpacing: 2,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  icon: {
    color: colors.cyan.base
  },
  containerActived: {
    backgroundColor: '#FF1D25',
    borderTopColor: '#333333'
  },
  containerActivedBlack: {
    backgroundColor: '#000',
    borderTopColor: '#333333'
  },
  
  contentActived: {},
  labelActived: {
    color: colors.white
  },
  iconActived: {
    color: colors.white
  }
});
