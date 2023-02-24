import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 20,
        backgroundColor: '#f1f1f1',
    },
    view: {
        borderBottomWidth: 1,
        borderBottomColor: '#a2d2ff',
        marginBottom: 30,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black'
    },
    text: {
        fontSize: 16,
        color: 'black'
    },
    image: {
        width: '100%',
        height: 180,
        marginBottom: 10,
        borderRadius: 10,
    },
    button: {
        backgroundColor: '#8338ec',
        paddingVertical: 10,
        marginVertical: 18,
        marginHorizontal: 80,
        borderRadius: 40
        
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
export default styles;