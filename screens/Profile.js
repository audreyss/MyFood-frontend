import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  Button,
} from "react-native";

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.myProfile}>My Profile</Text>
      </View>
      <View style={styles.navBar}>
        <TouchableOpacity>
          <Text style={styles.navBarText}>My Recipes</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.navBarText, styles.activeLink]}>Settings</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={[styles.dietbtn, styles.active]}>
          <Image
            source={require("../assets/barbell.png")}
            style={styles.icon}
          />
          <Text style={styles.dietText}>Muscle gain</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dietbtn}>
          <Image source={require("../assets/scale.png")} style={styles.icon} />
          <Text style={styles.dietText}>Healthy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dietbtn}>
          <Image
            source={require("../assets/no-gluten.png")}
            style={styles.icon}
          />
          <Text style={styles.dietText}>Gluten free</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dietbtn}>
          <Image
            source={require("../assets/pregnant.png")}
            style={styles.logoSize}
          />
          <Text style={styles.dietText}>Pregnant</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dietbtn}>
          <View>
            <Image
              source={require("../assets/vegeterian.png")}
              style={styles.icon}
            />
          </View>
          <Text style={styles.dietText}>Vegetarian</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.allButtons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Edit my mail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Edit my password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Delete my account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Disconnect</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#EDF9EF",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
  },

  myProfile: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "inter",
    paddingLeft: 10,
    textShadowColor: "green",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
  },
  navBar: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#bad3bb",
  },
  navBarText: {
    fontWeight: "bold",
    color: "white",
    padding: 15,
  },
  activeLink: {
    borderBottomWidth: 2,
    borderBottomColor: "white",
    paddingBottom: 5,
  },
  allButtons: {
    alignItems: "center",
    width: "100%",
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
  dietText: {
    flex: 1,
    color: "black",
    fontFamily: "Inter",
    textAlign: "center",
    paddingRight: 35,
  },
  text: {
    flex: 1,
    color: "white",
    fontFamily: "Inter",
    textAlign: "center",
  },
  logoSize: {
    width: 30,
    height: 30,
    alignSelf: "flex-start",
  },
  dietbtn: {
    alignItems: "center",
    padding: 5,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 5,
    margin: 8,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#85cb85",
  },
  active: {
    backgroundColor: "#85cb85",
  },
  icon: {
    width: 30,
    height: 30,
  },
});
