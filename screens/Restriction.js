import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default function Restriction({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome Name, what are your dietary preferences?
      </Text>
      <View style={styles.allButtons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Muscle gain</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Healthy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Gluten free</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Pregnant</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Vegetarian</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "blue",
    borderStyle: "solid",
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  allButtons: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    width: "80%",
  },
  button: {
    display: "flex",
    alignItems: "center",
    padding: 10,
    width: "100%",
    backgroundColor: "#33652C",
    borderRadius: 5,
    margin: 8,
  },
  text: {
    color: "white",
    fontFamily: "Inter",
  },
});
