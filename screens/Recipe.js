import { View, Text, StyleSheet } from "react-native";


export default function Recipe({ navigation, route }) {
    const { recipe } = route.params;

    console.log(recipe);

    return (
        <View style={styles.container}>
            <Text>{recipe.name}</Text>
            <Text>{recipe.recipeContent}</Text>
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