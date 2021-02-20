// Takes care of the location components on the home screen
import React, {useState} from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Slider from '@react-native-community/slider';
import Geocode from "react-geocode";

import styles from './styles';

// api key for geolocations: AIzaSyCX3tnZh3CzM1jDM7MQST5GAqkhfiGvJmc
Geocode.setApiKey("AIzaSyCX3tnZh3CzM1jDM7MQST5GAqkhfiGvJmc");
Geocode.setLocationType("ROOFTOP");

const Location = () => {

    // To be returned to the back end for use.
    const [sliderValue, setSliderValue] = useState(125);
    const [text, setText] = useState("Enter Address Here!");

    return (
        <View style={styles.container}>
            <Text style={styles.textLocation}> Provide a location in which to search for nearby National Parks </Text>
            <TextInput style={styles.textReader}
                defaultValue= {text}
                onChangeText={text => setText(text)}
            />
            <Button style={styles.buttonStyle}
                color= '#A62F24'
                title= 'Save'
            />
            <Text style={styles.textRange}> How many miles would you like to search for? </Text>
            <Slider style={styles.sliderStyle}
                minimumValue={1}
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