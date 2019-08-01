// Import core
import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import {Layout, ButtonFooter} from '../../components/'

// Import Styles
import styles from './styles';

// Import images
import splashImage from '../../resources/images/splash.png'
class Apresentation extends Component {
    static navigationOptions = { header: null };
    render() {
        return (
            <Layout>
                <View style={styles.apresentation}>
                    <Text style={styles.title}>Welcome Quiz</Text>
                    <Text style={styles.subtitle}>Project opendb api exemple</Text>
                    <Image style={styles.splash} source={splashImage} />
                </View>
                <View>
                    <ButtonFooter onPress={() => this.props.navigation.navigate('TabView')} label={'Start Quiz'}  />
                </View>
            </Layout>
        );
    }
}

export default Apresentation;