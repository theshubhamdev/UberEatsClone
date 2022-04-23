import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import restaurants from "../../../assets/data/restaurants.json";
import { AntDesign } from "@expo/vector-icons";
const restaurant = restaurants[0];

const Basket = () => {
  const [quantity, setQuantity] = useState(1);

  const BasketDishItem = ({ dish, index }) => {
    return (
      <View style={styles.row}>
        <View style={styles.quantityContainer}>
          <Text>{index + 1}</Text>
        </View>

        <Text style={styles.itemName}>{dish.name}</Text>
        <Text style={styles.price}>${dish.price}</Text>
      </View>
    );
  };
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={{ fontSize: 19, fontWeight: "bold", marginTop: 20 }}>
        Your Items
      </Text>
      <FlatList
        data={restaurant.dishes}
        renderItem={({ item, index }) => (
          <BasketDishItem dish={item} index={index} />
        )}
      />
      <View style={styles.seperator} />
      <View style={styles.button}>
        <Text style={styles.buttonText}>Create Order</Text>
      </View>
    </View>
  );
};

export default Basket;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 40,
    padding: 10,
  },
  seperator: {
    height: 1,
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    marginVertical: 10,
  },
  description: {
    color: "#696969",
  },
  row: {
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  quantity: {
    fontSize: 25,
    fontWeight: "600",
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
  },
  price: {
    marginLeft: "auto",
  },
  quantityContainer: {
    backgroundColor: "lightgrey",
    paddingHorizontal: 5,
    marginRight: 5,
    paddingVertical: 2,
    borderRadius: 3,
  },
  itemName: {
    fontWeight: "600",
    letterSpacing: 1,
  },
});
