import { View, Text, StyleSheet } from "react-native";


export default function Recipe({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Recipe</Text>
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
})