// Import core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

// Import components
import { Layout, Header } from '../../components/'

// Import Styles
import styles from './styles';

class Questions extends Component {
    static navigationOptions = { header: null };
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
        };
    }

    componentWillMount(){
        this.props.setCurrentCategory(66);
        //this.props.fillCurrentDifficulty('medium');
    }

    //https://opentdb.com/api.php?amount=10&category=21&difficulty=medium

    render() {
        console.log('JA estou aqui em Questions --> Nivel', this.props.currentDifficulty);
        console.log('JA estou aqui em Questions --> Category', this.props.currentCategory);

        
        const { goBack } = this.props.navigation;
        return (
            <Layout loading={this.state.logading}>
                <Header small hideMenu title={'Questions'} goBack={() => goBack()} />
                
            </Layout>
        );
    }
}


const mapState = state => ({
    currentQuestion: state.questions.currentQuestion,
    currentDifficulty: state.questions.currentDifficulty,
    currentCategory: state.questions.currentCategory
});

const mapDispatch = ({ questions }) => ({
    nextQuestion: () => questions.nextQuestion,
    setCurrentCategory: (payload) => questions.setCurrentCategory(payload),
});

export default connect(mapState, mapDispatch)(Questions);