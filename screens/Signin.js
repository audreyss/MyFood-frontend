import { TextInput, TouchableOpacity, View, Text, StyleSheet, Link } from "react-native";

export default function Signin({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>MyFood</Text>
            <Text style={styles.connectionText}>Connection</Text>
            <Text style={styles.text}>Set your email and password</Text>
            <TextInput placeholder="Email" style={styles.input}></TextInput>
            <TextInput placeholder="Password" style={styles.input}></TextInput>
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                <Text style={styles.textButton} onPress={() => navigation.navigate('Restriction')}>Connection</Text>
            </TouchableOpacity>
            <View style={styles.link}>
            <TouchableOpacity >
                <Text style={styles.textLink} onPress={() => navigation.navigate('Signup')} >Create an account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Restriction')}>
                <Text style={styles.textLink}>Continue without account</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDF9EF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 80,
        fontWeight: 'bold',
        fontFamily: 'inter',
        textShadowColor: '#000',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
        margin: 50,
    },
    connectionText: {
        fontFamily: 'inter',
        fontWeight: 'bold',
        fontSize: 16,
        margin: 10,
    },
    text: {
        fontFamily: 'inter',
        fontSize: 16,
        fontWeight: 'medium',
        margin: 5,
    },
    input: {
        backgroundColor: 'white',
        padding: 16,
        width: '80%',
        margin: 10,
        borderWidth: 2, 
        borderColor: '#6DCD7D',  
        borderRadius: 10,  
        borderStyle: 'solid',
    },
    button: {
        backgroundColor: '#1A6723',
        width: '80%',
        padding: 16,
        borderRadius: 10,
        margin: 10,
    },
    textButton: {
        color: 'white',
        textAlign: 'center',
    },
    link: {
        flexDirection: 'row',
        padding: 10,
        margin: 10,
    },
    textLink: {
        padding: 30,
        fontFamily: 'inter',
        fontWeight: 'bold',
    }

})