// Import core
import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { FadeUp, FadeDown } from '../../helpers';

import { Layout } from '../../components/';
import styles from './styles';
import logoHeader from '../../resources/images/logo.png';
import logoBotton from '../../resources/images/logo_b.png';

const routeName = 'Apresentation';
class Welcome extends Component {
    static navigationOptions = { header: null };
    constructor(props) {
        super(props)
        this.state = {
            fade: false
        }
    }
    componentDidMount() {
        setTimeout(() => this.setState({fade:true}), 70);
        setTimeout(async () => {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName })]
            });
            this.props.navigation.dispatch(resetAction);
        }, 1190);
    };
    render() {
        return (
            <Layout>
                <View style={styles.centerContent}>
                    <FadeUp pose={this.state.fade ? 'visible' : 'hidden'}>
                        <Image style={styles.logoHeaderSize} source={logoHeader} />
                    </FadeUp>
                    <FadeDown pose={this.state.fade ? 'visible' : 'hidden'}>
                        <Image style={styles.logoBottomSize} source={logoBotton} />
                    </FadeDown>
                </View>
            </Layout>
        );
    }
}

export default Welcome;

