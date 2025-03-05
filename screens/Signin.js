import { useState } from "react";
import { TextInput, TouchableOpacity, View, Text, StyleSheet, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../reducers/user";

export default function Signin({ navigation }) {

	const dispatch = useDispatch();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const createAlert = (alertMsg) => {
		Alert.alert('Error', alertMsg, [
			{ text: 'OK' },
		]);
	};


	const handleConnection = () => {
		fetch('http://192.168.1.192:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					console.log(data)
					dispatch(login({ token: data.token, username: data.username }));
					setEmail('');
					setPassword('')
					navigation.navigate('Restriction')
				} else {
					if (typeof data.error == "object") {
						createAlert(data.error[0].msg);
					} else {
						createAlert(data.error);
					}					
				}
			})
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>MyFood</Text>
			<Text style={styles.connectionText}>Connection</Text>
			<Text style={styles.text}>Set your email and password</Text>
			<TextInput placeholder="Email" style={styles.input} onChangeText={(value) => setEmail(value)} value={email} keyboardType="email-address"></TextInput>
			<TextInput placeholder="Password" style={styles.input} onChangeText={(value) => setPassword(value)} value={password} secureTextEntry={true} autoCapitalize={"none"}></TextInput>
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
		textShadowColor: 'green',
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