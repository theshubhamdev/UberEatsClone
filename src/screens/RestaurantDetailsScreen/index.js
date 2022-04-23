import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import restaurants from "../../../assets/data/restaurants.json";
import DishListItem from "../../components/DishListItem";
import RestaurantDetailsHeader from "./RestaurantDetailsHeader";
import styles from "./styles";

const restaurant = restaurants[0];
const RestaurantDetailsScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        ListHeaderComponent={
          <RestaurantDetailsHeader restaurant={restaurant} />
        }
      />
      <Ionicons
        name="arrow-back-circle"
        color={"white"}
        size={45}
        style={styles.iconContainer}
      />
    </View>
  );
};

export default RestaurantDetailsScreen;
