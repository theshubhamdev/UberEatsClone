import { View, Text } from "react-native";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import { DataStore } from "aws-amplify";
import { Basket, BasketDish } from "../models";

const BasketContext = createContext({});
const BasketContextProvider = ({ children }) => {
  const { dbUser } = useAuthContext();
  const [restaurant, setRestaurant] = useState(null);
  const [basket, setBasket] = useState(null);
  const [basketDishes, setBasketDishes] = useState([]);
  const totalPrice = basketDishes.reduce(
    (sum, basketDish) => sum + basketDish.Dish.price * basketDish.quantity,
    restaurant?.deliveryFee
  );
  useEffect(() => {
    DataStore.query(Basket, (b) =>
      b.restaurantID("eq", restaurant.id).userID("eq", dbUser.id)
    ).then((baskets) => setBasket(baskets[0]));
  }, [dbUser, restaurant]);

  useEffect(() => {
    if (basket) {
      DataStore.query(BasketDish, (bd) => bd.basketID("eq", basket.id)).then(
        setBasketDishes
      );
    }
  }, [basket]);

  const addDishToBasket = async (dish, quantity) => {
    let theBasket = basket || (await createNewBasket());
    const newDish = DataStore.save(
      new BasketDish({ quantity, Dish: dish, basketID: theBasket.id })
    );
    setBasketDishes([...basketDishes, newDish]);
  };

  const createNewBasket = async () => {
    const newBasket = await DataStore.save(
      new Basket({ userID: dbUser.id, restaurantID: restaurant.id })
    );
    setBasket(newBasket);
    return newBasket;
  };

  return (
    <BasketContext.Provider
      value={{
        addDishToBasket,
        setRestaurant,
        basket,
        basketDishes,
        restaurant,
        totalPrice,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;

export const useBasketContext = () => useContext(BasketContext);
