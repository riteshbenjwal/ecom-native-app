import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import SearchModal from "../components/SearchModal";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
import Heading from "../components/Heading";

const categories = [
  { category: "Nice", _id: "bduqjd" },
  { category: "Football", _id: "bdaqjd" },
  { category: "Sports", _id: "bquqwjd" },
  { category: "Home", _id: "bqduqqjd" },
  { category: "Home", _id: "bqduqqda" },
  { category: "Home", _id: "baqduqqjd" },
];

const products = [
  {
    price: 2313,
    name: "Sample",
    stock: 12,
    _id: "dsonsnvovir",
    images: [
      {
        url: "https://picsum.photos/200/300",
      },
    ],
  },
  {
    price: 2313,
    name: "Sample",
    stock: 12,
    _id: "onsnvovir",
    images: [
      {
        url: "https://picsum.photos/200/300",
      },
    ],
  },
  {
    price: 2313,
    name: "Sample",
    stock: 12,
    _id: "dsonsvir",
    images: [
      {
        url: "https://picsum.photos/200/300",
      },
    ],
  },
  {
    price: 2313,
    name: "Sample",
    stock: 12,
    _id: "dsonvovir",
    images: [
      {
        url: "https://picsum.photos/200/300",
      },
    ],
  },
];

const Home = () => {
  const [category, setCategory] = useState(categories[0]._id);
  const [activeSearch, setActiveSearch] = useState(false);
  const [SearchQuery, setSearchQuery] = useState("");

  const navigate = useNavigation();

  const categoryButtonHandler = (id) => {
    console.log(id);
    setCategory(id);
  };

  const addToCartHandler = (id) => {
    console.log("Add to cart", id);
  };

  return (
    <>
      {/* Search Modal  */}
      {activeSearch && (
        <SearchModal
          searchQuery={SearchQuery}
          setSearchQuery={setSearchQuery}
          activeSearch={activeSearch}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}
      <View style={defaultStyle}>
        {/* Header  */}
        <Header />
        {/* Heading Row  */}
        <View
          style={{
            paddingTop: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Heading text1="Our" text2="Products" />
          {/* Search Bar  */}
          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                icon={"magnify"}
                color={"gray"}
                size={50}
                style={{
                  backgroundColor: colors.color2,
                  elevation: 12,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Categories  */}
        <View
          style={{
            flexDirection: "row",
            height: 80,
          }}
        >
          <ScrollView
            contentContainerStyle={{
              alignItems: "center",
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((item, index) => {
              return (
                <Button
                  key={item._id}
                  style={{
                    backgroundColor:
                      category === item._id ? colors.color1 : colors.color5,
                    margin: 5,
                    borderRadius: 100,
                  }}
                  onPress={() => categoryButtonHandler(item._id)}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: "gray",
                    }}
                  >
                    {item.category}
                  </Text>
                </Button>
              );
            })}
          </ScrollView>
        </View>
        {/* Products  */}
        <View
          style={{
            flex: 1,
          }}
        >
          <ScrollView horizontal>
            {products.map((item, index) => (
              <ProductCard
                stock={item.stock}
                name={item.name}
                price={item.price}
                image={item.images[0]?.url}
                key={item._id}
                id={item._id}
                addToCartHandler={addToCartHandler}
                i={index}
                navigate={navigate}
              />
            ))}
          </ScrollView>
        </View>
      </View>
      <Footer activeRoute={"home"} />
    </>
  );
};

export default Home;
