import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import SearchModal from "../components/SearchModal";

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
    _id: "dsonsnvovir",
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

  const categoryButtonHandler = (id) => {
    console.log(id);
    setCategory(id);
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
          <View>
            <Text style={{ fontSize: 25 }}>Our</Text>
            <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
          </View>
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
      </View>
    </>
  );
};

export default Home;
