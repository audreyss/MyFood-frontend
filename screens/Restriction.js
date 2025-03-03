import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";

export default function Restriction({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("../assets/restriction-logo.png")} />
      </View>
      <View style={styles.title}>
        <Text>What are your dietary preferences?</Text>
      </View>
      <View style={styles.allButtons}>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../assets/barbell.png")} />
          <Text style={styles.text}>Muscle gain</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../assets/scale.png")} />
          <Text style={styles.text}>Healthy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../assets/no-gluten.png")} />
          <Text style={styles.text}>Gluten free</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require("../assets/pregnant.png")}
            style={styles.logoSize}
          />
          <Text style={styles.text}>Pregnant</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View>
            <Image source={require("../assets/vegeterian.png")} />
          </View>
          <Text style={styles.text}>Vegetarian</Text>
        </TouchableOpacity>
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
    margin: 20,
  },
  title: {
    fontSize: 100,
    margin: 60,
  },
  allButtons: {
    alignItems: "center",
    width: "80%",
    // display: "flex",
  },
  button: {
    display: "flex",
    alignItems: "center",
    padding: 10,
    width: "100%",
    backgroundColor: "#33652C",
    borderRadius: 5,
    margin: 8,
    flexDirection: "row",
    // justifyContent: "center",
  },
  text: {
    color: "white",
    fontFamily: "Inter",
    display: "flex",
    paddingLeft: "25%",
  },
  logoSize: {
    width: 50,
    height: 50,
    alignSelf: "flex-start",
  },
});
