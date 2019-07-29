// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import stylePropType from 'react-style-proptype';

// Presentational
import { View, Animated, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';

// Assets
import styles from './styles';

class Header extends Component {
  static propTypes = {
    small: PropTypes.bool.isRequired,
    goBack: PropTypes.func,
    hideMenu: PropTypes.bool,
    imageTitle: PropTypes.bool,
    goLogin: PropTypes.func,
    goReader: PropTypes.func,
    customBackground: PropTypes.string,
    customFontColor: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.element
    ]),
    openDrawer: PropTypes.func,
    iconCenter: PropTypes.string,
    backgroundRange: PropTypes.arrayOf(PropTypes.string),
  }
  static defaultProps = {
    openDrawer: () => {},
    iconCenter: undefined,
    goBack: undefined,
    hideMenu: false,
    customBackground: undefined,
    customFontColor: undefined,
    title: undefined,
    children: undefined,
    style: undefined,
    rightStyle: undefined,
    leftStyle: undefined,
    centerStyle: undefined,
    titleStyle: undefined,
    backgroundRange: '#ffffff'
  };
  state = {
    background: new Animated.Value(0),
    alignItems: false
  }
  

  render() {
    const {
      iconCenter,
      style,
      rightStyle,
      leftStyle,
      centerStyle,
      iconStyle,
      titleStyle,
      rightComponent,
      leftComponent
    } = this.props;

    return (
      <View
        style={StyleSheet.flatten([
          styles.container,
          this.props.small && styles.smallContainer,
          style,
          this.props.customBackground ? { backgroundColor:this.props.customBackground } : {},
        ])}
      >
       { 
        this.props.goBack ?
          <View style={StyleSheet.flatten([styles.left, leftStyle])}>
            <TouchableOpacity
              onPress={this.props.goBack}
              hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
            >
              <Icon name='md-arrow-round-back'  color={ this.props.customFontColor ?  this.props.customFontColor  : '#fff' } size={20} style={{fontSize:22}} />
            </TouchableOpacity>
          </View>
          : null
       }
        {leftComponent}
        { !this.props.children ?
            <View style={StyleSheet.flatten([styles.center, centerStyle])}>
              { iconCenter && !this.props.small ?
                <Icon name={iconCenter} color={ this.props.customFontColor ?  this.props.customFontColor  : '#000' } size={60} />
              : null }
              {
                this.props.imageTitle ? (
                    {/* <Image style={{width:110, height:27}} source={require('../../assets/images/logo-titulo.png')} ></Image> */}
                ):(
                  <Text
                  style={StyleSheet.flatten([
                    styles.title,
                    titleStyle,
                    this.props.small
                      ? { paddingTop: 0, fontSize: 18 }
                      : { paddingTop: 10 + 2, fontSize: 22 },
                      this.props.customFontColor ? { color:this.props.customFontColor } : {},
                  ])}
                >
                  {this.props.title}
                </Text>
                )
              }
             
            </View>
        : 
            this.props.children
        }
        {!this.props.hideMenu ?
          <TouchableOpacity
            onPress={this.props.openDrawer}
            hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
          >
            <View style={StyleSheet.flatten([styles.right, rightStyle])}>
              <Icon name='bars' size={22}  color={ this.props.customFontColor ?  this.props.customFontColor  : '#000' } style={iconStyle} />
            </View>
          </TouchableOpacity>
        : null}
        
       
      </View>
    );
  }
}

export default Header;
