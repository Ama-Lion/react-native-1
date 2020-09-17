//*-----IMPORT MODULES----------
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

//*-----IMPORT COMPONENTS----------
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

//*-----HARD CODE DATA----------
const initialMessages = [
  {
    id: 1,
    title: "title1",
    description: "description 1",
    image: require("../assets/hungryLion.jpeg"),
  },
  {
    id: 2,
    title: "title",
    description: "description 2",
    image: require("../assets/hungryLion.jpeg"),
  },
];

//*-----SCREEN FUNCTION----------
export default function MessageScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            onPress={() => console.log("Message selected", item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "title2",
              description: "description 2",
              image: require("../assets/hungryLion.jpeg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
