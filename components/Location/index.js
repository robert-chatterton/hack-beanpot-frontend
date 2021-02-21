// Takes care of the location components on the home screen
import React, {useState} from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Slider from '@react-native-community/slider';
import Geocode from "react-geocode";

import styles from './styles';

// api key for geolocations: AIzaSyCX3tnZh3CzM1jDM7MQST5GAqkhfiGvJmc
// Geocode.setApiKey("AIzaSyCX3tnZh3CzM1jDM7MQST5GAqkhfiGvJmc");
// Geocode.setLocationType("ROOFTOP");

var address;
var mileRange;

const Location = () => {

    // To be returned to the back end for use.
    const [sliderValue, setSliderValue] = useState(125);
    const [text, setText] = useState("");

    return (
        <View>
            <Text style={styles.titleStyle}>
              National Park Search
            </Text>
            <Text style={styles.textRange}>
              Where would you like to search from?
            </Text>
            <TextInput style={styles.textReader}
                defaultValue={text}
                placeholder="Enter address here (ex: 11 Green St, Twinleaf Town, AK 12345)"
                onChangeText={text => setText(text)}
            />

            <Text style={styles.textRange}>
              How many miles away would you like to search for?
            </Text>
            <Slider style={styles.sliderStyle}
                minimumValue={1}
                maximumValue={250}
                value={sliderValue}
                onValueChange={(sliderValue) => setSliderValue(sliderValue)}
                minimumTrackTintColor="#DFB37D"
                maximumTrackTintColor="#3B452D"
                thumbTintColor="#A62F24"
                step='1'
            />
            <Text style={styles.sliderCount}>
                {sliderValue} miles away
            </Text>

        </View>
    );
};

export default Location;
