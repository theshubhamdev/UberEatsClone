import { StatusBar } from "expo-status-bar";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import RestaurantItem from "../../../src/components/RestaurantItem";
import restaurant from "../../../assets/data/restaurants.json";

export default function HomeScreen() {
  return (
    <FlatList
      data={restaurant}
      renderItem={({ item }) => <RestaurantItem restaurant={item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingVertical: 30,
  },
});
