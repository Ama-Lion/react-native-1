//*----------------IMPORT MODULES-------------------------
import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, View } from "react-native";

//*----------------FUNCTION-------------------------
export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

//*-----------------------STYLE------------------
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
