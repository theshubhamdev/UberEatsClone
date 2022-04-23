import { View, Text, StyleSheet } from "react-native";

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

export default BasketDishItem;

const styles = StyleSheet.create({
  row: {
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
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
