// Import core
import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { connect } from 'react-redux';
import { FadeUp, FadeDown } from '../../helpers';
import { Layout } from '../../components/';
import styles from './styles';

import logoHeader from '../../resources/images/logo.png';

class Welcome extends Component {
    static navigationOptions = { header: null };
    constructor(props) {
        super(props)
        this.state = {
            init : false
        }
    }
    componentDidMount() {
        setTimeout(() => this.setState({init:true}), 1270);
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
                    <FadeUp pose={this.state.init ? 'visible' : 'hidden'}>
                        <Image style={styles.logoHeaderSize} source={logoHeader} />
                    </FadeUp>
                    <FadeDown pose={this.state.init ? 'visible' : 'hidden'}>
                        <Image style={styles.logoBottomSize} source={logoHeader} />
                    </FadeDown>
                </View>
                <View>
                    <Text>teste</Text>
                </View>
            </Layout>
        );
    }
}

export default Welcome;

