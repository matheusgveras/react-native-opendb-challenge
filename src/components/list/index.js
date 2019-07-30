// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';

// Presentational
import styles from './styles';
import { FlatList } from 'react-native';



_key = (item, index) => item.id;

class ListCategories extends Component {
    static navigationOptions = { header: null };
    constructor(props) {
        super(props)
    }

    _objectToRender = (item, navigation) => (
        <TouchableOpacity onPress={() => navigation(item.id)}>
            <View style={styles.listItemContainer}>
                <Text style={{ color: '#424241' }}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );

    render() {
        return (
            <FlatList
                data={this.props.list}
                keyExtractor={this._key}
                renderItem={({ item }) => this._objectToRender(item, this.props.navigation)}
            />
        )
    }
};

ListCategories.propTypes = {
    list: PropTypes.func.isRequired,
    navigation: PropTypes.func.isRequired,
};

ListCategories.defaultProps = {
    list: [],
    navigation: undefined
};

export default ListCategories;
