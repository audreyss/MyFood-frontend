import { View, Text, StyleSheet, TextInput, Image } from "react-native";


export default function Search({ navigation }) {
    return (
        <View style={styles.container}>
            <TextInput placeholder="Search" style={styles.input} >Search</TextInput>
            <View style={styles.image}>
                <Image source={require("../assets/barbell.png")} />
                <Image source={require("../assets/scale.png")} />
                <Image source={require("../assets/no-gluten.png")} />
                <Image source={require("../assets/vegeterian.png")} />
            </View>
            <View>
                <Text>Recettes</Text>
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
    image: {
        width: 50,
        height: 50,
        flexDirection: 'row',
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
})