import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";

export default function Signup() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/bonhome.jpg")}
      ></Image>
      <Text style={styles.text}>
        Ceate an account to save your restrictions and favorite recipe !
      </Text>
      <TextInput style={styles.input} placeholder="Username"></TextInput>
      <TextInput style={styles.input} placeholder="Email"></TextInput>
      <TextInput style={styles.input} placeholder="Password"></TextInput>
      <TouchableOpacity activeOpacity={0.8} style={styles.button}>
        <Text style={styles.textButton}>Enregister</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF9EF",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    margin: 30,
    height: 160,
  },
  text: {
    fontFamily: "inter",
    fontSize: 16,
    fontWeight: "light",
    margin: 40,
    textAlign: "center",
  },
  input: {
    backgroundColor: "white",
    padding: 16,
    width: "80%",
    margin: 10,
    borderWidth: 2,
    borderColor: "#6DCD7D",
    borderRadius: 10,
    borderStyle: "solid",
  },
  button: {
    backgroundColor: "#1A6723",
    width: "80%",
    padding: 16,
    borderRadius: 10,
    margin: 50,
  },
  textButton: {
    color: "white",
    textAlign: "center",
  },
});
