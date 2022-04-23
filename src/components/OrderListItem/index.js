import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const OrderListItem = ({ order }) => {
  return (
    <View style={styles.root}>
      <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
      <View>
        <Text style={styles.name}>{order.Restaurant.name}</Text>
        <Text style={styles.price}>3 items &#8226; $90</Text>
        <Text>2 days ago &#8226; {order.status}</Text>
      </View>
    </View>
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
