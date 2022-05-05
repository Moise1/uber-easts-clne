import { StyleSheet, Image, Text, View, ScrollView } from "react-native";
import React from "react";

const items = [
  {
    img: require("../assets/imgs/shopping-bag.png"),
    txt: "Pick-up",
  },
  {
    img: require("../assets/imgs/bread.png"),
    txt: "Bakery Items",
  },
  {
    img: require("../assets/imgs/fast-food.png"),
    txt: "Fast Food",
  },
  {
    img: require("../assets/imgs/deals.png"),
    txt: "Deals",
  },
  {
    img: require("../assets/imgs/coffee.png"),
    txt: "Coffee & Tea",
  },
  {
    img: require("../assets/imgs/soft-drink.png"),
    txt: "Soft Drinks",
  },
];
export const Categories = () => {
  return (
    <View style={styles.containerView}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map(({ img, txt }, idx) => (
          <View style={styles.view} key={idx}>
            <Image source={img} style={styles.img} />
            <Text style={styles.txt}>{txt}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    marginTop: 5,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingLeft: 20,
  },
  view: {
    alignItems: "center",
    marginRight: 30,
  },
  img: {
    width: 50,
    height: 40,
    resizeMode: "contain",
  },
  txt: {
    fontSize: 13,
    fontWeight: "900",
  },
});
