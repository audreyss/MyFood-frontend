import React, { use } from "react";
import { useState, useEffect } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";



export default function Restriction({ navigation }) {
  const IPADRESS = process.env.EXPO_PUBLIC_IP_ADDRESS;
  const username = useSelector((state) => state.user.value.username);
  const user = useSelector((state) => state.user.value);
  const [diets, setDiets] = useState([]);

  useEffect(() => {
    fetch(`http://${IPADRESS}:3000` + '/diets')
      .then(response => response.json())
      .then(data => {
        if (data?.result) {
          setDiets(data.diets)
        }
      })
  }, []);

  const dietIcons = {
    muscleGain: require("../assets/barbell.png"),
    healthy: require("../assets/scale.png"),
    glutenFree: require("../assets/no-gluten.png"),
    pregnant: require("../assets/pregnant.png"),
    vegetarian: require("../assets/vegeterian.png")
  };

  const createAlert = (alertMsg) => {
      Alert.alert('Error', alertMsg, [
        { text: 'OK' },
      ]);
    };

  const handlePress = (diet) => {
    fetch(`http://${IPADRESS}:3000` + '/users/diet/' + user.token, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ field: diet.prop }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.result) {
          navigation.navigate('TabNavigator', { screen: 'Regime', params: { diet, dietIcons } });
        } else {
          createAlert(data.error);
        }
      })
      .catch(error => console.error(error));
  }

  dietsContent = diets.map((diet, i) => {
    return (
      <TouchableOpacity key={i} style={styles.button} onPress={() => handlePress(diet)}>
        <Image source={dietIcons[diet.prop]} style={{ width: 50, height: 50 }} />
        <Text style={styles.text}>{diet.name}</Text>
      </TouchableOpacity>
    )
  })

  const connected = () => {
    if (!user.token) {
      return <Text style={styles.title}>What are your dietary preferences?</Text>
        ;
    } else {
      return <Text style={styles.title}>Welcome <Text style={styles.username}>{username}</Text>, what are your dietary preferences?</Text>;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("../assets/restriction-logo.png")} />
      </View>
      <View >
        {connected()}
      </View>
      <View style={styles.allButtons}>
        {dietsContent}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eff9f0",
    alignItems: "center",
  },
  logo: {
    marginTop: '20%',
  },
  title: {
    fontFamily: 'inter',
    fontSize: 16,
    fontWeight: 'medium',
    margin: 60,
    textAlign: 'center',
  },
  username: {
    fontWeight: 'bold',
    fontSize: 18,
    fontStyle: 'italic',
  },
  allButtons: {
    alignItems: "center",
    width: '100%'
  },
  button: {
    alignItems: "center",
    padding: 10,
    width: "80%",
    backgroundColor: "#33652C",
    borderRadius: 5,
    margin: 8,
    flexDirection: "row",
  },
  text: {
    flex: 1,
    color: "white",
    fontFamily: "Inter",
    textAlign: 'center',
    paddingRight: 35,
  },
  logoSize: {
    width: 50,
    height: 50,
    alignSelf: "flex-start",
  },
});
