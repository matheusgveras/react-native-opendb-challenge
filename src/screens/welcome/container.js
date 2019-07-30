// Import core
import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { Layout } from '../../components/';
import styles from './styles';
import logoHeader from '../../resources/images/logo.png';

class Welcome extends Component {
    static navigationOptions = { header: null };
    componentDidMount() {
        let routeName = 'Apresentation';
        setTimeout(async () => {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName })]
            });
            this.props.navigation.dispatch(resetAction);
        }, 2390);
    };
    render() {
        return (
            <Layout>
                <View style={styles.centerContent} >
                    <Image style={styles.logoHeaderSize} source={logoHeader} />
                    <Image style={styles.logoBottomSize} source={logoHeader} />
                </View>
                <View>
                    <Text>teste</Text>
                </View>
            </Layout>
        );
    }
}

export default Welcome;

