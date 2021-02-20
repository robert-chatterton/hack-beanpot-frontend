// JS Jeniuses On JAH
// Text header class with creates styles from ./styles
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import styles from './styles';

const Header = () => {
    return (
          <View style={styles.topBarContainer}>
              <Text style={styles.title}>App Title</Text>
          </View>
    );
};

export default Header;
