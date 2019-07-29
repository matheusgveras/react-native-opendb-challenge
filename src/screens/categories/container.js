// Import core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';

// Import components
import { Layout, ListCategories, Header } from '../../components'

// Import Styles
import styles from './styles';

class Categories extends Component {
    // static navigationOptions = {
    //     headerMode: 'none'
    // }

    constructor(props) {
        super(props),
            this.state = {
                loading: false,
            };
    }

    async componentDidMount() {
        this.setState({ loading: true })
        await this.props.asyncfillCategories();
        this.setState({ loading: false })
    }

    navigateToQuestions() {
        console.log('Iniciou a navegacao para a rota de perguntas');
        
        let routeName = 'Questions';
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName })]
        });
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        const { goBack } = this.props.navigation;
        return (
            <Layout loading={this.state.logading}>
                <Header small hideMenu title={'Categorias'} goBack={() => goBack()} />
                <ListCategories navigation={() => this.navigateToQuestions} list={this.props.listOfCategories.payload} />
            </Layout>
        );
    }
}

const mapState = state => ({
    listOfCategories: state.categories.listOfCategories,
});

const mapDispatch = ({ categories }) => ({
    asyncfillCategories: () => categories.asyncfillCategories(),
});

export default connect(mapState, mapDispatch)(Categories);

