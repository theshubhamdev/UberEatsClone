import { View, Text, StyleSheet } from "react-native";

const BasketDishItem = ({ basketDish }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>{basketDish.quantity}</Text>
      </View>

      <Text style={styles.itemName}>{basketDish.Dish.name}</Text>
      <Text style={styles.price}>Rs. {basketDish.Dish.price}</Text>
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
