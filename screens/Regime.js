import { View, Text, StyleSheet, Image } from "react-native";


export default function Regime({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
            <Image source={ require('../assets/barbell.png')} ></Image>
            <Text style={styles.text}>Muscle gain</Text>
            </View>
            <View style={styles.onglets}>
                <Image source={ require('../assets/like.jpg')} style={styles.image}></Image>
                <Text style={styles.yesText} >Yes</Text>
                <Image source={ require('../assets/dislike.jpg')} style={styles.image}></Image>
                <Text style={styles.yesText}>No</Text>
            </View>
            <View style={styles.alimentsList}>
                <Text>
                    Poulet{'\n'}{'\n'}
                    Viande rouge{'\n'}{'\n'}
                    Saumon{'\n'}{'\n'}
                    Oeufs{'\n'}{'\n'}
                    Thon{'\n'}{'\n'}
                    Lait{'\n'}{'\n'}
                    Avocats{'\n'}{'\n'}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDF9EF',
        alignItems: 'center',
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: '20%',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'inter',
        paddingLeft: 10,
        textShadowColor: 'green',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 1,
    },
    onglets: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#B4D4B9',
        alignItems: 'center',
        padding: 10,
    },
    yesText: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'inter',
        color: 'white',
        paddingLeft: '2%',
        paddingRight: '15%',
    },
    image: {
        width: 50,
        height: 50,
    },
    alimentsList: {
        backgroundColor: 'white',
        width: '90%',
        padding: 20,
        margin: '10%',
        borderRadius: 10,
    }
})