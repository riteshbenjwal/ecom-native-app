import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import ConfirmOrderItem from "../components/ConfirmOrderItem";
import { Button } from "react-native-paper";
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

const ConfirmOrder = () => {
  const navigate = useNavigation();
  const itemsPrice = 4000;
  const shippingCharges = 200;
  const tax = 0.18 * itemsPrice;
  const totalAmount = itemsPrice + shippingCharges + tax;
  return (
    <View style={defaultStyle}>
      <Header back={true} />
      {/* Heading  */}
      <Heading
        containerStyle={{
          paddingTop: 70,
        }}
        text1="Confirm"
        text2="Order"
      />
      <View
        style={{
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <ScrollView>
          {cartItems.map((i) => (
            <ConfirmOrderItem
              key={i.product}
              image={i.image}
              name={i.name}
              price={i.price}
              quantity={i.quantity}
            />
          ))}
        </ScrollView>
      </View>

      <PriceTag heading={"Subtotal"} value={itemsPrice} />
      <PriceTag heading={"Shipping"} value={shippingCharges} />
      <PriceTag heading={"Tax"} value={tax} />
      <PriceTag heading={"Total"} value={totalAmount} />

      <TouchableOpacity
        onPress={() =>
          navigate.navigate("payment", {
            itemsPrice,
            shippingCharges,
            tax,
            totalAmount,
          })
        }
      >
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 10,
          }}
          textColor={colors.color2}
          icon={"chevron-right"}
        >
          Payment
        </Button>
      </TouchableOpacity>
    </View>
  );
};

const PriceTag = ({ heading, value }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 5,
    }}
  >
    <Text style={{ fontWeight: "800" }}>{heading}</Text>
    <Text>₹{value}</Text>
  </View>
);

export default ConfirmOrder;
