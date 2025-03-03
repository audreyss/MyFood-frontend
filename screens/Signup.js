import { useState } from "react";
import { TextInput, TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import { login, logout } from "../reducers/user";
import { useDispatch } from "react-redux";

export default function Signup() {

    const dispatch = useDispatch()

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const addUser = () => {
        fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    dispatch(login({ username, email, token: data.token }));
                    setUsername('');
                    setEmail('');
                    setPassword('');
                }
            })
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/bonhome.jpg')} ></Image>
            <Text style={styles.text}>Ceate an account to save your restrictions and favorite recipe !</Text>
            <TextInput style={styles.input}  placeholder="Username" onChangeText={(e) => setUsername(e.target.value)} value={username} ></TextInput>
            <TextInput style={styles.input} placeholder="Email" onChangeText={(e) => setEmail(e.target.value)} value={email} ></TextInput>
            <TextInput style={styles.input} placeholder="Password" onChangeText={(e) => setPassword(e.target.value)} value={password}></TextInput>
            <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => addUser()} >
            <Text style={styles.textButton}>Register</Text>
            </TouchableOpacity>
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
    image: {
        margin: 30,
        height: 160,
    },
    text: {
        fontFamily: 'inter',
        fontSize: 16,
        fontWeight: 'light',
        margin: 40,
        textAlign: 'center',
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
        margin: 50,
    },
    textButton: {
        color: 'white',
        textAlign: 'center',
    },
})