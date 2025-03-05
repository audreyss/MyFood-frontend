import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Recipe({ navigation, route }) {
    const { recipe } = route.params;

    console.log(recipe);

    return (
        <View style={styles.all}>
            <ScrollView style={styles.container}>
                <Icon name="bookmark" size={30} color="black" style={styles.icon} />
                <Text style={styles.title}>{recipe.name}</Text>
                <View style={styles.fisrtContainer}>
                    <Image source={{ uri: recipe.picture }} style={styles.image}></Image>
                    <View style={styles.nutContainer}>
                        <Text style={styles.casesTitle}>Nutritional information :</Text>
                        <Text style={styles.textTitle}>calories : {recipe.calories}</Text>
                        <Text style={styles.textTitle}>proteins : {recipe.proteins}</Text>
                        <Text style={styles.textTitle}>glucides : {recipe.glucides}</Text>
                        <Text style={styles.textTitle}>lipides : {recipe.lipides}</Text>
                    </View>
                </View>
                <View style={styles.prepContainer}>
                    <Text style={styles.casesTitle}>Ingredients :</Text>
                    {recipe.ingredients.map((ingredient, i) => {
                        return (
                            <Text key={i} style={styles.ingredientText}>
                                {ingredient.name} {ingredient.quantity} {ingredient.unit}
                            </Text>
                        )
                    })}
                </View>
                <ScrollView style={styles.prepContainer}>
                    <Text style={styles.casesTitle}>Preparation :</Text>
                    <Text style={styles.textTitle}>Number of servings : {recipe.numberOfServings}</Text>
                    <Text style={styles.textTitle}>Ready in minutes : {recipe.readyInMinutes}</Text>
                    <Text style={styles.text}>{recipe.recipeContent}</Text>
                </ScrollView>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    all: {
        flex: 1,
        backgroundColor: '#EDF9EF',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        margin: '6%',
        borderRadius: 10,
    },
    title: {
        fontSize: 19,
        fontWeight: "bold",
        textAlign: "center",
        margin: '5%',
        textShadowColor: 'green',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
        fontFamily: 'inter',
    },
    casesTitle: {
        fontSize: 14,
        fontWeight: "bold",
        margin: "1%",
        fontFamily: 'inter',
    },
    text: {
        fontSize: 12,
        fontWeight: "light",
        textAlign: 'justify',
        margin: "1%",
    },
    prepContainer: {
        margin: '3%',
    },
    ingredientText: {
        fontSize: 12,
        fontWeight: "light",
    },
    nutContainer: {
        margin: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    image: {
        width: 300,
        height: 200,
        marginLeft: 10,
        borderRadius: 10,
    },
    fisrtContainer: {
        margin: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTitle: {
        fontSize: 13,
        fontWeight: "semi-bold",
        margin: "1%",
    },
    icon: {
        position: 'absolute',
        top: 10,
        right: 10,
    }
})