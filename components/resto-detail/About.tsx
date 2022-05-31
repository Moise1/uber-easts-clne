import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

interface Props {
  img: string;
  name: string;
  description: string;
}
const yelpInfo = {
  name: 'Farmhouse Kitchen Thai Cuisine',
  img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870',
  price: '$$',
  reviews: '1500',
  rating: 4.5,
  categories: [{title: 'Thai'}, {title: 'Comfort Food'}]
};
const {name, price, reviews, rating, categories} = yelpInfo;
const formattedCategories = categories.map((c: any)=> c.title).join(' • ')
const description = `${formattedCategories} ${price ? ' • ' + price : ''} 🎫  ${rating} ⭐ (${reviews}+)`;

export const About = () => {
  return (
    <View>
      <RestoImg img="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870" />
    </View>
  );
};

const RestoImg = ({img} : {img: Props['img']}) => (
  <View>
    <Image source={{ uri: img }} style={styles.img} />
    <RestoName name={name} />
    <RestoDescription description={description}/>
  </View>
);

const RestoDescription = ({description}: {description: Props['description']}) => <Text style={styles.description}>{description}</Text>

const RestoName = ({name} : {name: Props['name']}) => <Text>{name}</Text>;

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 180,
  },
  description: {
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: '400',
      fontSize: 15.5
  }
});

