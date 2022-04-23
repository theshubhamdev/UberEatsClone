import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import orders from "../../../assets/data/orders.json";
import OrderListItem from "../../components/OrderListItem";

const OrdersScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  page: {
    paddingTop: 50,
  },
});
