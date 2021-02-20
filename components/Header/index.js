// JS Jeniuses On JAH
// Text header class with creates styles from ./styles
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import styles from './styles';

const Header = () => {
    return (
        <View style={styles.topBar}>
          <View style={styles.topBarContainer}>
            <View style={styles.titles}>
              <Text style={styles.title}>App Title</Text>
            </View>
          </View>
        </View>
    );
};

export default Header;
