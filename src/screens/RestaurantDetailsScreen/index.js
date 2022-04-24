import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import DishListItem from "../../components/DishListItem";
import RestaurantDetailsHeader from "./RestaurantDetailsHeader";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import { DataStore } from "aws-amplify";
import { Dish, Restaurant } from "../../models";

const RestaurantDetailsScreen = () => {
  const Navigation = useNavigation();
  const route = useRoute();

  const [restaurant, setRestaurant] = useState(null);
  const [dishes, setDishes] = useState([]);

  const id = route.params?.id;
  useEffect(() => {
    if (id) {
      DataStore.query(Restaurant, id).then(setRestaurant);
      DataStore.query(Dish, (dish) => dish.restaurantID("eq", id)).then(
        setDishes
      );
    }
  }, [id]);

  if (!restaurant) {
    return <ActivityIndicator size="large" color="gray" />;
  }
  return (
    <View style={styles.page}>
      <FlatList
        data={dishes}
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
        onPress={() => Navigation.goBack()}
      />
    </View>
  );
};

export default RestaurantDetailsScreen;
