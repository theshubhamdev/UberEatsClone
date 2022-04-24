import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { DataStore } from "aws-amplify";
import { Dish } from "../../models";

const DishDetailsScreen = () => {
  const Navigation = useNavigation();
  const route = useRoute();
  const id = route.params.id;
  const [dish, setDish] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id) {
      DataStore.query(Dish, id).then(setDish);
    }
  }, [id]);

  const onPlus = () => {
    setQuantity(quantity + 1);
  };
  const onMinus = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const getTotal = () => {
    return dish.price * quantity;
  };
  if (!dish) {
    return <ActivityIndicator color="gray" size="large" />;
  }
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.seperator}></View>
      {/* <Text>{dish.price}</Text> */}
      <View style={styles.row}>
        <AntDesign
          name="minuscircleo"
          size={60}
          color="black"
          onPress={onMinus}
        />
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign
          name="pluscircleo"
          size={60}
          color="black"
          onPress={onPlus}
        />
      </View>
      <Pressable
        style={styles.button}
        onPress={() => Navigation.navigate("Basket")}
      >
        <Text style={styles.buttonText}>
          Add {quantity} to Basket &#8226; (Rs. {getTotal()})
        </Text>
      </Pressable>
    </View>
  );
};

export default DishDetailsScreen;

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
    fontSize: 30,
    fontWeight: "700",
    marginVertical: 10,
  },
  description: {
    color: "#696969",
  },
  row: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
});
