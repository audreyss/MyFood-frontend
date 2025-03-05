import { View, Text, StyleSheet, TextInput, Image, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Search({ navigation }) {
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
                <View style={styles.recetteContainer}>
                    <Image style={styles.recipeImage} source={require("../assets/barbell.png")} />
                    <Text style={styles.recette}>Poulet au curry</Text>
                    <Icon name="bookmark" size={20} color="black" style={styles.icon} />
                </View>
                <View style={styles.recetteContainer}>
                    <Image style={styles.recipeImage} source={require("../assets/barbell.png")} />
                    <Text style={styles.recette}>Poulet au curry</Text>
                    <Icon name="bookmark" size={20} color="black" style={styles.icon} />
                </View>
                <View style={styles.recetteContainer}>
                    <Image style={styles.recipeImage} source={require("../assets/barbell.png")} />
                    <Text style={styles.recette}>Poulet au curry</Text>
                    <Icon name="bookmark" size={20} color="black" style={styles.icon} />
                </View>
                <View style={styles.recetteContainer}>
                    <Image style={styles.recipeImage} source={require("../assets/barbell.png")} />
                    <Text style={styles.recette}>Poulet au curry</Text>
                    <Icon name="bookmark" size={20} color="black" style={styles.icon} />
                </View>
                <View style={styles.recetteContainer}>
                    <Image style={styles.recipeImage} source={require("../assets/barbell.png")} />
                    <Text style={styles.recette}>Poulet au curry</Text>
                    <Icon name="bookmark" size={20} color="black" style={styles.icon} />
                </View>
                <View style={styles.recetteContainer}>
                    <View style={styles.iconContainer}>
                    <Image style={styles.recipeImage} source={require("../assets/barbell.png")} />
                    <Image style={styles.recipeImage} source={require("../assets/barbell.png")} />
                    </View>
                    <Text style={styles.recette}>Poulet au curry</Text>
                    <Icon name="bookmark" size={20} color="black" style={styles.icon} />
                </View>
                <View style={styles.recetteContainer}>
                    <View style={styles.iconContainer}>
                    <Image style={styles.recipeImage} source={require("../assets/barbell.png")} />
                    <Image style={styles.recipeImage} source={require("../assets/barbell.png")} />
                    </View>
                    <Text style={styles.recette}>Poulet au curry</Text>
                    <Icon name="bookmark" size={20} color="black" style={styles.icon} />
                </View>
                <View style={styles.recetteContainer}>
                    <View style={styles.iconContainer}>
                    <Image style={styles.recipeImage} source={require("../assets/barbell.png")} />
                    <Image style={styles.recipeImage} source={require("../assets/barbell.png")} />
                    </View>
                    <Text style={styles.recette}>Poulet au curry</Text>
                    <Icon name="bookmark" size={20} color="black" style={styles.icon} />
                </View>
                <View style={styles.recetteContainer}>
                    <View style={styles.iconContainer}>
                    <Image style={styles.recipeImage} source={require("../assets/barbell.png")} />
                    <Image style={styles.recipeImage} source={require("../assets/barbell.png")} />
                    </View>
                    <Text style={styles.recette}>Poulet au curry</Text>
                    <Icon name="bookmark" size={20} color="black" style={styles.icon} />
                </View>
                <View style={styles.recetteContainer}>
                    <View style={styles.iconContainer}>
                    <Image style={styles.recipeImage} source={require("../assets/barbell.png")} />
                    <Image style={styles.recipeImage} source={require("../assets/barbell.png")} />
                    </View>
                    <Text style={styles.recette}>Poulet au curry</Text>
                    <Icon name="bookmark" size={20} color="black" style={styles.icon} />
                </View>
                <View style={styles.recetteContainer}>
                    <View style={styles.iconContainer}>
                    <Image style={styles.recipeImage} source={require("../assets/barbell.png")} />
                    <Image style={styles.recipeImage} source={require("../assets/barbell.png")} />
                    </View>
                    <Text style={styles.recette}>Poulet au curry</Text>
                    <Icon name="bookmark" size={20} color="black" style={styles.icon} />
                </View>
                <View style={styles.recetteContainer}>
                    <View style={styles.iconContainer}>
                    <Image style={styles.recipeImage} source={require("../assets/barbell.png")} />
                    <Image style={styles.recipeImage} source={require("../assets/barbell.png")} />
                    </View>
                    <Text style={styles.recette}>Poulet au curry</Text>
                    <Icon name="bookmark" size={20} color="black" style={styles.icon} />
                </View>
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
        width: 30,
        height: 30,
    },
    iconContainer: {
        flexDirection: 'row',
    }
})