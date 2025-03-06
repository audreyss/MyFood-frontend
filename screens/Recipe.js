import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useEffect, useState } from "react";


export default function Recipe({ navigation, route }) {
    const IPADRESS = process.env.EXPO_PUBLIC_IP_ADDRESS;
    const { id } = route.params;
    const [recipe, setRecipe] = useState(null);


    useEffect(() => {
        fetch(`http://${IPADRESS}:3000` + '/recipes/recipe/' + id)
            .then(response => response.json())
            .then(data => {
                if (data?.result) {
                    setRecipe(data.recipe[0]);
                }
            })
    }, []);


    if (!recipe) {
        return (
            <View style={styles.all}>
                <Text style={styles.title}>Loading...</Text>
            </View>
        );
    }
    
    return (
        <View style={styles.all}>
            <ScrollView style={styles.container}>
                <Icon name="bookmark" size={30} color="black" style={styles.icon} />
                <Text style={styles.title}>{recipe.name}</Text>
                <View style={styles.fisrtContainer}>
                    <Image source={{ uri: recipe.picture }} style={styles.image}></Image>
                    <View style={styles.nutContainer}>
                        <Text style={styles.casesTitle}>Nutritional information :</Text>
                        <Text style={styles.textTitle}>- calories : {recipe.calories}</Text>
                        <Text style={styles.textTitle}>- proteins : {recipe.proteins}</Text>
                        <Text style={styles.textTitle}>- glucides : {recipe.glucides}</Text>
                        <Text style={styles.textTitle}>- lipides : {recipe.lipides}</Text>
                    </View>
                </View>
                <View style={styles.prepContainer}>
                    <Text style={styles.casesTitle}>Ingredients :</Text>
                    {recipe.ingredients.map((ingredient, i) => {
                        return (
                            <Text key={i} style={styles.ingredientText}>
                               • {ingredient.name} {ingredient.quantity} {ingredient.unit}
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
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        margin: '7%',
        textShadowColor: 'green',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
        fontFamily: 'inter',
        padding: '2%',
    },
    casesTitle: {
        fontSize: 16,
        fontWeight: "bold",
        margin: "1%",
        fontFamily: 'inter',
    },
    text: {
        fontSize: 15,
        fontWeight: "light",
        textAlign: 'justify',
        margin: "2%",
        borderTopWidth: 0.5,
        borderTopColor: 'green',
        paddingTop: '2%',
    },
    prepContainer: {
        margin: '3%',
        borderTopWidth: 1,
        borderTopColor: 'green',
        paddingTop: '2%',
    },
    ingredientText: {
        fontSize: 13,
        fontWeight: "light",
        margin: "1%",
    },
    nutContainer: {
        margin: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    image: {
        width: 370,
        height: 240,
    },
    fisrtContainer: {
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    textTitle: {
        fontSize: 14,
        fontWeight: "semi-bold",
        margin: "1%",
        fontStyle: 'italic',
    },
    icon: {
        position: 'absolute',
        top: 10,
        right: 10,
    }
})