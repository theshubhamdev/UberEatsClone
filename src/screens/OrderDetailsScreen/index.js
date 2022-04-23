import { View, Text, Image, FlatList } from "react-native";
import styles from "./styles";
import orders from "../../../assets/data/orders.json";
import restaurants from "../../../assets/data/restaurants.json";
import BasketDishItem from "../../components/BasketDishItem";

const order = orders[0];
const OrderDetailsHeader = () => {
  return (
    <View>
      <View style={styles.page}>
        <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
        <View style={styles.container}>
          <Text style={styles.title}>{order.Restaurant.name}</Text>
          <Text style={styles.subtitle}>{order.status} 2 days ago</Text>
          <View style={styles.menuContainer}>
            <Text style={styles.menuTitle}>Your Orders</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const OrderDetailsScreen = () => {
  return (
    <FlatList
      data={restaurants[0].dishes}
      renderItem={({ item, index }) => (
        <BasketDishItem dish={item} index={index} />
      )}
      ListHeaderComponent={<OrderDetailsHeader />}
    />
  );
};
export default OrderDetailsScreen;
