// JS Jeniuses On JAH
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import styles from './styles';

const Header = () => {
    return (
        <View style={styles.topBar}>
          <View style={styles.titles}>
            <Text style={styles.title}>App Title</Text>
          </View>
        </View>
    );
};

export default Header;
