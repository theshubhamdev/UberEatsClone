import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const OrderListItem = ({ order }) => {
  const Navigation = useNavigation();
  return (
    <Pressable
      style={styles.root}
      onPress={() => Navigation.navigate("Order", { id: order.id })}
    >
      <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
      <View>
        <Text style={styles.name}>{order.Restaurant.name}</Text>
        <Text style={styles.price}>3 items &#8226; $90</Text>
        <Text>2 days ago &#8226; {order.status}</Text>
      </View>
    </Pressable>
  );
};

export default OrderListItem;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
  },
  image: {
    height: 75,
    width: 75,
    marginRight: 5,
  },
});
