// Import core
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import {Layout} from '../../components/'

class Welcome extends Component {
    static navigationOptions = { header: null };
    constructor(props) {
        super(props)
    }
    async componentDidMount () {
        let routeName = 'Apresentation';
        setTimeout(async () => {
            const resetAction =  StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName })]
              });
            this.props.navigation.dispatch(resetAction);
        }, 1100);
      };
    render() {
        return (
            <Layout>
                <Text style={{color:'#000000'}}>Welcome teste ola mundo Welcome teste ola
                     mundo Welcome teste ola mundo Welcome teste 
                     ola mundo Welcome teste ola mundo Welcome 
                     teste ola mundo Welcome teste ola mundo Welcome 
                     teste ola mundo Welcome teste ola mundo Welcome 
                     teste ola mundo Welcome teste ola mundo Welcome 
                     teste ola mundo Welcome teste ola mundo Welcome 
                     teste ola mundo Welcome teste ola mundo Welcome 
                     teste ola mundo Welcome teste ola mundo Welcome 
                     teste ola mundo Welcome teste ola mundo </Text>
            
            </Layout>
            
        );
    }
}

export default Welcome;