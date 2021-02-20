// styles to be used on the location portion of the home page
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100',
      height: '100'
    },
    titleStyle: {
      marginBottom: 30,
      color: "#DFB37D",
      textAlign: "center",
      fontSize: 40,
      fontWeight: "600"
    },
    textLocation: {
      marginTop: 160,
      paddingBottom: 10,
      color: "#DFB37D",
      textAlign: "center",
      fontSize: 20,
      fontWeight: "600"
    },
    textReader: {
        marginTop: 10,
        height: 40,
        borderColor: "#DFB37D",
        borderWidth: 3,
        color: "#DFB37D",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "300"
    },
    buttonStyle: {
        marginTop: 20
    },
    textRange: {
        marginTop: 100,
        marginBottom: 30,
        color: "#DFB37D",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "600"
    },
    sliderStyle: {
        marginBottom: 30,
        width: '80',
    },
    sliderCount: {
        marginBottom: 100,
        color: "#DFB37D",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "600"
    }
  });

export default styles;
