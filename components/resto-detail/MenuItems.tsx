import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

interface Props {
  food: {
    title: string;
    price: string;
    description: string;
  };
  foodImg: string;
}
const foods = [
  {
    title: "Tandoori Chicken",
    description: "Amazing Indian Dish",
    price: "$19.20",
    img: "https://bit.ly/38k33QW",
  },
  {
    title: "Tandoori Chicken",
    description: "Amazing Indian Dish",
    price: "$19.20",
    img: "https://bit.ly/38k33QW",
  },
];
export const MenuItems = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((f: any, idx) => (
        <View key={idx}>
          <View style={styles.menuItem}>
            <FoodInfo food={f} />
            <FoodImage foodImg={f.img} />
          </View>
          <Divider width={0.5} style={styles.divider}/>
        </View>
      ))}
    </ScrollView>
  );
};

const FoodInfo = ({ food }: { food: Props["food"] }) => (
  <View style={styles.foodInfo}>
    <Text style={styles.menuTitle}>{food.title}</Text>
    <Text>{food.description}</Text>
    <Text>{food.price}</Text>
  </View>
);

const FoodImage = ({ foodImg }: { foodImg: Props["foodImg"] }) => (
  <View>
    <Image source={{ uri: foodImg }} style={styles.foodImg} />
  </View>
);
const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  foodInfo: {
    width: 240,
    justifyContent: "space-evenly",
  },
  foodImg: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  menuTitle: {
    fontSize: 19,
    fontWeight: "600",
  },
  divider: {
    marginHorizontal: 20
  }
});
