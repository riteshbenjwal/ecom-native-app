import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import { useNavigation } from "@react-navigation/native";

const cartItems = [
  {
    name: "Macbook Pro",
    price: 100000,
    quantity: 1,
    stock: 3,
    product: "5f9f1b0b0b5a9c0b5c8b8b5d",
    image: "https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UY218_.jpg",
  },
  {
    name: "Puma shoes",
    price: 1000,
    quantity: 1,
    stock: 3,
    product: "5f9f1b0b0b5a9c5c8b8b5d",
    image:
      "https://assets.ajio.com/medias/sys_master/root/h22/h90/14240663928862/-473Wx593H-460485151-white-MODEL.jpg",
  },
  {
    name: "Puma shoes",
    price: 1000,
    quantity: 1,
    stock: 3,
    product: "5f1b0b0b5a9c5c8b8b5d",
    image:
      "https://assets.ajio.com/medias/sys_master/root/h22/h90/14240663928862/-473Wx593H-460485151-white-MODEL.jpg",
  },
  {
    name: "Puma shoes",
    price: 1000,
    quantity: 1,
    stock: 3,
    product: "5f9f1b0b0b5a9cb8b5d",
    image:
      "https://assets.ajio.com/medias/sys_master/root/h22/h90/14240663928862/-473Wx593H-460485151-white-MODEL.jpg",
  },
];

const Cart = () => {
  const navigate = useNavigation();

  const incrementHandler = (id, qty, stock) => {
    console.log("Increasing", id, qty, stock);
  };
  const decrementHandler = (id, qty) => {
    console.log("decreasing", id, qty);
  };
  return (
    <View
      style={{
        ...defaultStyle,
        padding: 0,
      }}
    >
      <Header back={true} emptyCart={true} />

      {/* Heading */}
      <Heading
        text1="Shopping"
        text2="Cart"
        containerStyle={{
          paddingTop: 70,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <ScrollView showsHorizontalScrollIndicator={false}>
          {cartItems.map((i, index) => (
            <CartItem
              key={i.product}
              id={i.product}
              name={i.name}
              stock={i.stock}
              amount={i.price}
              imgSrc={i.image}
              index={index}
              qty={i.quantity}
              incrementhandler={incrementHandler}
              decrementHandler={decrementHandler}
            />
          ))}
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text>5 Items</Text>
        <Text>5 ₹</Text>
      </View>
      <TouchableOpacity
        onPress={
          cartItems.length > 0 ? () => navigate.navigate("confirmorder") : null
        }
      >
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 30,
          }}
          icon={"cart"}
          textColor={colors.color2}
        >
          Checkout
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
