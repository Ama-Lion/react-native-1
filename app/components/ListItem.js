//*----------------IMPORT MODULES AND EXPO-API-------------------------
import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { View, Image, StyleSheet } from "react-native";

//*----------------IMPORT CONFIG-------------------------
import AppText from "./AppText";

//*----------------IMPORT FILES-------------------------
import colors from "../config/colors";
import { TouchableHighlight } from "react-native-gesture-handler";

//*----------------FUNCTION-------------------------
export default function ListItem({
  IconComponent,
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}> {title} </AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
//*----------------STYLE-------------------------
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    color: "green",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
});
