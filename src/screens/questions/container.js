// Import core
import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Text } from 'react-native';

// Import components
import Layout from '../../components'

// Import Styles
import styles from './styles';

class Questions extends Component {
    static navigationOptions = { header: null };
    constructor(props) {
        super(props)
    }
    
    //https://opentdb.com/api.php?amount=10&category=21&difficulty=medium

    render() {
        return (
            <Layout>
                <Text>Questions</Text>
            </Layout>
        );
    }
}

// const mapStateToProps = ({ results }) => ({
//     //init: welcome.state.init,
// });

// const mapDispatchToProps = ({ results }) => ({
//    // setInit: payload => initial.setInit(payload),
//    // setNavigation: payload => global.setNavigation(payload),
// });

//export default connect(mapStateToProps, mapDispatchToProps)(Results);

export default Questions