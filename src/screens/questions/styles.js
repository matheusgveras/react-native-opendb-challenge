import { StyleSheet, Dimensions } from 'react-native';
export default StyleSheet.create({
  container: {
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  wrapper: {
    paddingTop: 50,
    flex: 1
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  successModal: {
    height: 230,
    backgroundColor: "green"
  },
  errorModal: {
    height: 230,
    backgroundColor: "red"
  },
  gameOverModal: {
    backgroundColor: "#00306B",
    padding:10
  },
  imageModal: {
    width: 300, height: 300
  },
  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },

  text: {
    color: "black",
    fontSize: 22
  },
  titlemodal: {
    color: "white", fontSize: 22
  },
  title: {
    flex: 5, padding: 10
  },
  level: {
    flex: 1, padding: 15, alignItems: 'center', alignContent: 'center', backgroundColor: '#EABB32'
  },
  titlecategory: {
    fontSize: 10, color: '#333'
  },
  subheader: {
    width: Dimensions.get('window').width, marginBottom: 10, height: 80, backgroundColor: '#fff', flexDirection: 'row'
  }


});
