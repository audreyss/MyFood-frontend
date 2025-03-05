import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from "react-redux";


export default function Search({ navigation }) {
    const IPADRESS = process.env.EXPO_PUBLIC_IP_ADDRESS;
    const user = useSelector((state) => state.user.value);
    const [recipes, setRecipes] = useState([]);
    const [dietOptions, setDietOptions] = useState([]);

    const dietIcons = [
        { name: 'muscleGain', img: require("../assets/barbell.png") },
        { name: 'healthy', img: require("../assets/scale.png") },
        { name: 'glutenFree', img: require("../assets/no-gluten.png") },
        { name: 'pregnant', img: require("../assets/pregnant.png") },
        { name: 'vegetarian', img: require("../assets/vegeterian.png") }
    ];

    useEffect(() => {
        fetch(`http://${IPADRESS}:3000` + '/recipes/all')
            .then(response => response.json())
            .then(data => {
                if (data?.result) {
                    setRecipes(data.recipes)
                }
            })
    }, []);

    useEffect(() => {
        const dietsStr = dietOptions.join();
        fetch(`http://${IPADRESS}:3000` + '/recipes/search?diets=' + dietsStr)
            .then(response => response.json())
            .then(data => {
                if (data?.result) {
                    setRecipes(data.recipes)
                }
            })
    }, [dietOptions]);

    const handlePress = (recipe) => {
        navigation.navigate('Recipe', { id: recipe.id });
    }

    const recipesContent = recipes.map((recipe, i) => {
        const icons = dietIcons.filter(diet => recipe[diet.name])
            .map((diet, i) => (<Image key={i} style={styles.recipeImage} source={diet.img} alt={diet.name} />))

        let bookmark = [];
        if (user.token) {
            bookmark = <Icon name="bookmark" size={20} color="black" style={styles.icon} />
        }

        const name = recipe.name.length > 25 ? recipe.name.slice(0, 22) + '...' : recipe.name;
        return (
            <TouchableOpacity key={i} style={styles.recetteContainer} onPress={() => handlePress(recipe)}>
                <View style={styles.iconsContainer}>
                    {icons}
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.recette} numberOfLines={1}>{name}</Text>
                    {bookmark}
                </View>
            </TouchableOpacity>
        )
    })

    const handlePressIconSearch = (dietName) => {
        if (dietOptions.includes(dietName)) {
            setDietOptions(dietOptions.filter(diet => diet != dietName));
        } else {
            setDietOptions([...dietOptions, dietName]);
        }
    };

    const searchIcons = dietIcons.map((diet, i) => {
        let img = <Image style={styles.image} source={diet.img} alt={diet.name} onPress={() => handlePressIconSearch(diet.name)} />;
        if (dietOptions.includes(diet.name)) {
            img = <Image style={{ ...styles.image, backgroundColor: '#6DCD7D' }} source={diet.img} alt={diet.name} onPress={() => handlePressIconSearch(diet.name)} />
        }
        return (
            <TouchableOpacity key={i} onPress={() => handlePressIconSearch(diet.name)}>
                {img}
            </TouchableOpacity>
        )
    });


    return (
        <>
            <View style={styles.searchContainer}>
                <View style={styles.inputContainer}>
                    <Icon name="search" size={20} color="grey" style={styles.icon} />
                    <TextInput placeholder="Search" ></TextInput>
                </View>
                <View style={styles.imageContainer}>
                    {searchIcons}
                </View>
            </View>
            <ScrollView style={styles.container}>
                {recipesContent}
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: '#EDF9EF',
    },
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
        marginRight: 0,
    },
    imageContainer: {
        flexDirection: 'row',
        marginTop: '2%',
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
        alignItems: 'space-between',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#1A6723',
        padding: '3%',
        borderRadius: 10,
        width: '90%',
        textAlign: 'center',
        margin: '3%',
    },
    recette: {
        fontFamily: 'Inter',
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
        flex: 0.6,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: '100%'
    }
})