// Import core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

// Import components
import { Layout, Header } from '../../components'

// Import Styles
import styles from './styles';

class Results extends Component {
    static navigationOptions = { header: null };
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Layout>
                <Header small hideMenu title={'My Results'} goBack={() => goBack()} />               
                <Text>Results</Text>
            </Layout>
        );
    }
}

const mapStateToProps = ({ results }) => ({
    init: results.init,
});

const mapDispatchToProps = ({ results }) => ({
   setInit: payload => initial.setInit(payload),
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
