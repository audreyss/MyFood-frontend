import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from "react-redux";

const IPADRESS = process.env.EXPO_PUBLIC_IP_ADDRESS;

const recipes = () => {
    fetch(`http://${IPADRESS}:3000/recipes`, (req, res) => {
        Recipe.find({ muscleGain: true })
            .then(data => {
                res.json(data);
            })
    })
}

export default function Search({ navigation }) {
    const IPADRESS = process.env.EXPO_PUBLIC_IP_ADDRESS;
    const user = useSelector((state) => state.user.value);
    const [recipes, setRecipes] = useState([]);
    const [dietOptions, setDietOptions] = useState([]);

    console.log(user);
    const dietIcons = {
        muscleGain: require("../assets/barbell.png"),
        healthy: require("../assets/scale.png"),
        glutenFree: require("../assets/no-gluten.png"),
        pregnant: require("../assets/pregnant.png"),
        vegetarian: require("../assets/vegeterian.png")
    };

    useEffect(() => {
        fetch(`http://${IPADRESS}:3000` + '/recipes/all')
            .then(response => response.json())
            .then(data => {
                if (data?.result) {
                    setRecipes(data.recipes)
                }
            })
    }, []);

    const handlePress = (recipe) => {
        console.log(recipe);
        navigation.navigate('Recipe', { id: recipe.id });
    }

    const recipesContent = recipes.slice(0, 10).map((recipe, i) => {
        let icons = [];
        for (let diet in dietIcons) {
            if (recipe[diet]) icons.push(<Image style={styles.recipeImage} source={dietIcons[diet]} />)
        }

        const name = recipe.name.length > 28 ? recipe.name.slice(0, 25) + '...' : recipe.name;
        return (
            <TouchableOpacity key={i} style={styles.recetteContainer} onPress={() => handlePress(recipe)}>
                <View style={styles.iconsContainer}>
                    {icons}
                </View>
                <Text style={styles.recette}>{name}</Text>
                <Icon name="bookmark" size={20} color="black" style={styles.icon} />
            </TouchableOpacity>
        )
    })

    return (
        <>
            <View style={styles.inputContainer}>
                <Icon name="search" size={20} color="grey" style={styles.icon} />
                <TextInput placeholder="Search" ></TextInput>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../assets/barbell.png")} />
                <Image style={styles.image} source={require("../assets/scale.png")} />
                <Image style={styles.image} source={require("../assets/no-gluten.png")} />
                <Image style={styles.image} source={require("../assets/pregnant.png")} />
                <Image style={styles.image} source={require("../assets/vegeterian.png")} />
            </View>
            <ScrollView style={styles.container}>
                {recipesContent}
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDF9EF',
        overflow: 'scroll',
        paddingBottom: '10%',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: '5%',
        backgroundColor: 'white',
        width: '90%',
        marginTop: '10%',
        marginLeft: '5%',
        borderWidth: 2,
        borderColor: '#6DCD7D',
        borderRadius: 10,
        borderStyle: 'solid',
    },
    icon: {
        marginRight: 10,
    },
    imageContainer: {
        flexDirection: 'row',
        marginTop: '5%',
        marginLeft: '5%',
        marginBottom: '5%',
    },
    image: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#6DCD7D',
        borderRadius: 10,
        borderStyle: 'solid',
        margin: 5,
    },
    recetteContainer: {
        width: '80%',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#1A6723',
        padding: '1%',
        borderRadius: 10,
        width: '90%',
        justifyContent: 'space-between',
        margin: '3%',
    },
    recette: {
        color: 'white',
        fontWeight: 'medium',
    },
    recipeImage: {
        width: 25,
        height: 25,
    },
    iconContainer: {
        flexDirection: 'row',
    },
    iconsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    }
})