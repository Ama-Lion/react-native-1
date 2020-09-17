import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "couch in great condition",
    price: 600,
    image: require("../assets/couch.jpg"),
  },
];

export default function ListingScreen() {
  return (
    <Screen style={styles.Screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            image={item.image}
            subTitle={"$" + item.price}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  Screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});
