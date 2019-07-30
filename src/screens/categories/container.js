// Import core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, FlatList, TouchableOpacity, View } from 'react-native';
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
        //TODO: Mudar para props.
        this.setState({ loading: true })
        await this.props.asyncfillCategories();
        this.setState({ loading: false })
    }

    async navigateToQuestions (id) {
        console.log('Iniciou a navegacao para a rota de perguntas', id);
        let routeName = 'Questions';
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName })]
        });
        console.log('reset action: ', resetAction);

        this.props.navigation.dispatch(resetAction);
    }

    _objectToRender = (item) => (
        <TouchableOpacity onPress={() => this.navigateToQuestions(item.id)}>
            <View style={styles.listItemContainer}>
                <Text style={{ color: '#424241' }}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );

    render() {
        const { goBack } = this.props.navigation;
        return (
            <Layout loading={this.state.logading}>
                <Header small hideMenu title={'Categorias'} goBack={() => goBack()} />
                <FlatList
                    data={this.props.listOfCategories.payload}
                    keyExtractor={this._key}
                    renderItem={({ item }) => this._objectToRender(item)}
                />
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

