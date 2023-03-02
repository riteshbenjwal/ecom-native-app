import { View, Text } from "react-native";
import React from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";

const ProductDetails = ({ route: { params } }) => {
  return (
    <View
      style={{
        ...defaultStyle,
        padding: 0,
        backgroundColor: colors.color1,
      }}
    >
      <Header back={true} />
      <Text>ProductDetails</Text>
    </View>
  );
};

export default ProductDetails;
