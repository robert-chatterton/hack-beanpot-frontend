// Styles to be used for the Header
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    topBar: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'top',
    },
    topBarContainer: {
      height: '20%',
      width: '100%',
      backgroundColor: '#3B452D',
    },
    titles: {
        marginTop: '5%',
        height: '20%',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        // font: 'Comic Sans'
        color: '#DFB37D',
        fontSize: 40,
        fontWeight: 700
    }
});

export default styles;
