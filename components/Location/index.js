// Takes care of the location components on the home screen
import React, {useState} from 'react';
import { View, Text, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';

import styles from './styles';

const Location = () => {

    const [sliderValue, setSliderValue] = useState(125);

    return (
        <View style={styles.container}>
            <Text style={styles.textLocation}> Provide a location in which to search for nearby National Parks </Text>
            <TextInput style={styles.textReader}
                defaultValue="Enter a valid location in the form: longitude, latitude"
            />
            <Text style={styles.textRange}> How many miles would you like to search for? </Text>
            <Slider style={styles.sliderStyle}
                minimumValue={0}
                maximumValue={250}
                value={sliderValue}
                onValueChange={
                    (sliderValue) => setSliderValue(sliderValue)
                }
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#3B452D"
                thumbTintColor="#A62F24"
                step='1'
            />
            <Text style={styles.sliderCount}>
                {sliderValue} miles
            </Text>
        </View>
    );
};

export default Location;