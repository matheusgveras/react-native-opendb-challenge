import { StyleSheet } from 'react-native';
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
      imageModal: {
        width:300, height:300
      },
      modal3: {
        height: 300,
        width: 300
      },
    
      modal4: {
        height: 300
      },
    
      btn: {
        margin: 10,
        backgroundColor: "#3B5998",
        color: "white",
        padding: 10
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
      }
    
});
