import { StyleSheet , Platform} from 'react-native';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    backgroundColor: '#FFF'
  },
  smallContainer: {
    alignItems: 'center',
    backgroundColor: '#00306B'
  },
  right: {},
  left: {},
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    paddingHorizontal: 10,
    textAlign: 'center',
    letterSpacing: 0.5,
    lineHeight: 40,
    color: '#fff'
  }
});
