import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

interface Props {
  img: string;
  title: string;
  description: string;
}
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
    <RestoTitle title="Farmhouse Kitchen Thai Cuisine" />
    <RestoDescription description="Thai • Comfort Food • $$ 🎫  4⭐ (2913+)"/>
  </View>
);

const RestoDescription = ({description}: {description: Props['description']}) => <Text style={styles.description}>{description}</Text>

const RestoTitle = ({title} : {title: Props['title']}) => <Text>{title}</Text>;

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

