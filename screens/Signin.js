import { useState } from "react";
import { TextInput, TouchableOpacity, View, Text, StyleSheet, Link } from "react-native";
import { useDispatch } from "react-redux";

export default function Signin({ navigation }) {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleConnection = () => {
        fetch('http://localhost:3000/users/signin', {
            method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password }),
        }).then(response => response.json())
        .then(data => {
            if (data.result) {
                dispatch(login({ email, token: data.token }));
                setEmail('');
                setPassword('')
                navigation.navigate('Restriction')
            }
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>MyFood</Text>
            <Text style={styles.connectionText}>Connection</Text>
            <Text style={styles.text}>Set your email and password</Text>
            <TextInput placeholder="Email" style={styles.input} onChangeText={(e) => setEmail(e.target.value)} value={email}></TextInput>
            <TextInput placeholder="Password" style={styles.input} onChangeText={(e) => setPassword(e.target.value)} value={password}></TextInput>
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                <Text style={styles.textButton} onPress={() => handleConnection()}>Connect</Text>
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