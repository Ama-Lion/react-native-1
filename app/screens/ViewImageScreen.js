//*-----IMPORT MODULES----------
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//*-----IMPORT CONFIG----------
import colors from "../config/colors";

//*-----SCREEN FUNCTION ----------
export default function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

//*-----IMPORT STYLES ----------
const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 30,
    left: 20,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    position: "absolute",
    top: 30,
    right: 20,
  },
  image: {
    top: 15,
    width: "100%",
    height: "100%",
  },
});
