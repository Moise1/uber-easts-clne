import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";


export const About = (props: any) => {
  const { name, price, reviews, rating, categories, img } = props.route.params;
  const formattedCategories = categories.map((c: any) => c.title).join(" • ");
  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } 🎫  ${rating} ⭐ (${reviews}+)`;

  return (
    <View>
      <Image 
      source={{uri: img}} 
      style={styles.img}
      />
      <Text>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 180,
  },
  description: {
    marginTop: 10,
    marginHorizontal: 15,
    fontWeight: "400",
    fontSize: 15.5,
  },
});
