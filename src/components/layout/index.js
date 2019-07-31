// Core
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Layout = ({ loading, children, ...props }) => (
  loading ? (
      <View style={styles.container}>
        <Text style={{padding:20}}>Loading...</Text>
      </View>
    ) : (
      <View style={styles.container}>
      { children}
      </View>
  )
);

Layout.defaultProps = {
  loading: false,
  children: null
};

export default Layout;
