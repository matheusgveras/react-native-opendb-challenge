// Core
import React from 'react';
import PropTypes from 'prop-types';
// import stylePropType from 'react-style-proptype';

// Presentational
import Icon from 'react-native-vector-icons/Ionicons';

import { View, StyleSheet, Text } from 'react-native';
import {  Button } from '../../components';

// Styles
import styles from './styles';

const ButtonFooter = ({
  label,
  icon,
  onPress,
  containerStyles,
  contentStyles,
  labelStyles,
  iconStyles,
  backgroundBlack,
  actived
}) => (
  <Button
    style={StyleSheet.flatten([
      styles.container,
      actived && styles.containerActived,
      backgroundBlack && styles.containerActivedBlack,
      containerStyles
    ])}
    onPress={onPress}
  >
    <View
      style={StyleSheet.flatten([
        styles.content,
        actived && styles.contentActived,
        backgroundBlack && styles.contentBlack,
        contentStyles
      ])}
    >
      <Text
        style={StyleSheet.flatten([
          styles.label,
          actived && styles.labelActived,
          backgroundBlack && styles.labelWhite,
          labelStyles
        ])}
        bold
        upper
      >
        {label}
      </Text>
      <Icon
        name={icon}
        style={StyleSheet.flatten([
          styles.icon,
          actived && styles.iconActived,
          iconStyles
        ])}
      />
    </View>
  </Button>
);

ButtonFooter.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  // containerStyles: stylePropType,
  // contentStyles: stylePropType,
  // labelStyles: stylePropType,
  // iconStyles: stylePropType,
  actived: PropTypes.bool
};

ButtonFooter.defaultProps = {
  containerStyles: undefined,
  contentStyles: undefined,
  labelStyles: undefined,
  iconStyles: undefined,
  actived: false
};

export default ButtonFooter;
