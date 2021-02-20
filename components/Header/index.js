import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import styles from './styles';

const Header = () => {
    return (
        <View style={styles.container}>

            <View style={styles.smallerContainer}>

                <View style={styles.titles}>

                    <Text style={styles.title}>App Title</Text>
                </View>
            </View>
        </View>
    );
};

export default Header;