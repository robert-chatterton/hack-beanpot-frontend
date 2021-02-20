// Takes care of the location components on the home screen
import React from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';

import styles from './styles';

const Location = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textLocation}> Use current location? </Text>
            <Text style={styles.textRange}> How many miles would you like to search for? </Text>
            <Slider style={styles.sliderStyle}
                minimumValue={0}
                maximumValue={250}
                value={125}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#3B452D"
                thumbTintColor="#A62F24"
            />
        </View>
    );
};

export default Location;