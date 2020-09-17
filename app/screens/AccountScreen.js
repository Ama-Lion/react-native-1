//*----------------IMPORT MODULES------------------
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

//*----------------IMPORT COMPONENTS------------------
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";

//*----------------IMPORT CONFIGS------------------
import colors from "../config/colors";

//*----------------HARDCODE DATA------------------
const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

//*----------------FUNCTION------------------
export default function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="AmaLion"
          subTitle="bahamadu2019@gmail.com"
          image={require("../assets/cuteMe.jpeg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          ItemSeparatorComponent={ListItemSeparator}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66D" />}
      />
    </Screen>
  );
}

//*----------------STYLES------------------
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
