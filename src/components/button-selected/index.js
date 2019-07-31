// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Presentational
import { Platform, Text, TouchableOpacity } from 'react-native';

class ButtonSelected extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LastItem : ''
        };
    }

    handleSelect() {
        try {
            this.setState({ LastItem: this.props.item });
            this.props.onPress();
        } catch (error) {
            //Comentario do autor
            // Aqui tem que ser melhorado
            console.log('error: ', error);
        }
    }
    render() {
        return (
            <TouchableOpacity onPress={() => this.handleSelect(this)} style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 7,
                marginBottom: 10,
                marginLeft: 10,
                marginRight: 10,
                textAlign: 'center',
                backgroundColor: this.state.LastItem === this.props.item ? '#5CAC2C' : '#FAF9F4'
            }}>
                <Text style={{ fontSize: 16 }}>{this.props.item}</Text>
            </TouchableOpacity>
        );
    }
}


ButtonSelected.propTypes = {
    onPress: PropTypes.func,
    item: PropTypes.text
};

ButtonSelected.defaultProps = {
    onPress: undefined,
    item: 'Default Anwser'
};

export default ButtonSelected;
