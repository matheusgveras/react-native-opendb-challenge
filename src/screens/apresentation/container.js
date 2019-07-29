// Import core
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import {Layout} from '../../components/'


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
                <Text>
                    apresentation apresentation apresentation 
                    apresentation apresentation 
                    apresentation apresentation 
                    apresentation apresentation 
                    apresentation apresentation</Text>
                    <Button onPress={() => this.props.navigation.navigate('TabView')}   title="Iniciar teste" />
            </Layout>
        );
    }
}


export default Apresentation;