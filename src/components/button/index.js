// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import stylePropType from 'react-style-proptype';

// Presentational
import { Platform, View, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

// Assets
import styles from './styles';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { CurrentPlatform: Platform.OS };
  }
  onPress = () => this.props.submit
    ? this.context.handleSubmit()
    : this.props.onPress();

  render = () => (
    <View>
   { 
     this.state.CurrentPlatform === 'android' ?
        <TouchableNativeFeedback
          {...this.props}
          onPress={this.onPress}
          style={[styles.buttonContainer, this.props.style]}
        >
          <View
            style={[
              styles.buttonContainer, styles.rounded,
              this.props.rounded && styles.rounded,
              this.props.style
            ]}
          >
            {this.props.children}
          </View>
        </TouchableNativeFeedback>
     :
        <TouchableOpacity
          {...this.props}
          onPress={this.onPress}
          style={[
            styles.buttonContainer,
            this.props.rounded && styles.rounded,
            this.props.style
          ]}
        >
          {this.props.children}
        </TouchableOpacity>
    
      }
      </View>
  );
}

Button.contextTypes = {
  handleSubmit: PropTypes.func
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  // style: stylePropType,
  onPress: PropTypes.func,
  submit: PropTypes.bool,
  success: PropTypes.bool,
  rounded: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  black: PropTypes.bool,
  white: PropTypes.bool
};

Button.defaultProps = {
  style: undefined,
  onPress: undefined,
  rounded: false,
  submit: false,
  success: false,
  danger: false,
  warning: false,
  info: false,
  black: false,
  white: false
};

export default Button;
