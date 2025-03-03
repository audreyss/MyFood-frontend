import { TextInput, TouchableOpacity, View, Text, StyleSheet, Link } from "react-native";

export default function Signup() {
    return (
        <View>
            <Text>MyFood</Text>
            <Text>Connection</Text>
            <Text>Set your email and password</Text>
            <TextInput placeholder="email"></TextInput>
            <TextInput placeholder="password"></TextInput>
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
            <Text style={styles.textButton}>Connection</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text>Create an account</Text>
            <Text>Continue without account</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
})