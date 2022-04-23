import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import styles from "./styles";

const RestaurantDetailsHeader = ({ restaurant }) => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
          {restaurant.maxDeliveryTime} minutes
        </Text>
        <View style={styles.menuContainer}>
          <Text style={styles.menuTitle}>Menu</Text>
        </View>
      </View>
    </View>
  );
};

export default RestaurantDetailsHeader;
