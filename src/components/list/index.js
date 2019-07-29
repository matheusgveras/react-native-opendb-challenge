// Core
import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';

// Presentational
import styles from './styles';
import { FlatList } from 'react-native';



_objectToRender = (item, navigation) => (
    <TouchableOpacity onPress={() => navigation}>
        <View style={styles.listItemContainer}>
            <Text style={{ color: '#424241' }}>{item.name}</Text>
        </View>
    </TouchableOpacity>
)
_key = (item, index) => item.id;

const ListCategories = ({ list, navigation }) => (
    <FlatList
        data={list}
        keyExtractor={this._key}
        renderItem={({item}) => this._objectToRender(item, navigation)}
    />
);

ListCategories.propTypes = {
    list: PropTypes.func.isRequired,
};

ListCategories.defaultProps = {
    list: [],
};

export default ListCategories;
