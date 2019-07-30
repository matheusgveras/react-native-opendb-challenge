// Import core
import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import {Layout, ButtonFooter} from '../../components/'


// Import Styles
import styles from './styles';
class Apresentation extends Component {
    static navigationOptions = { header: null };
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Layout>
                <View style={{flex:1, backgroundColor:'#fff', justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:30, color:'#444'}}>Welcome Quiz</Text>
                    <Text style={{fontSize:16, color:'#444', marginBottom:20}}>Project opendb api exemple</Text>
                    <Image style={{width:300, height:300}} source={require('../../resources/images/splash.png')} />
                </View>
                <View>
                    <ButtonFooter onPress={() => this.props.navigation.navigate('TabView')} label={'Start Quiz'}  />
                </View>

            </Layout>
        );
    }
}


export default Apresentation;