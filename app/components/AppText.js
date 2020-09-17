//*----------------MODULES-------------------------
import React from "react";
import { Text } from "react-native";

//*----------------CONFIGS-------------------------
import defaultStyles from "../config/styles";

//*----------------FUNCTION-------------------------
export default function AppText({ children, style }) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}
