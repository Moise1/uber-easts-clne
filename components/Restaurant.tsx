import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const Restaurant = () => {
  return (
    <View>
      <RestoImg/>
    </View>
  );
};

const RestoImg = () => (
  <>
    <Image
      source={{
        uri: "https://assets.bonappetit.com/photos/610aa6ddc50e2f9f7c42f7f8/master/pass/Savage-2019-top-50-busy-restaurant.jpg",
      }}
      style={styles.img}
    />
    <TouchableOpacity style={styles.iconContainer}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 180,
  },
  iconContainer:{
      position: 'absolute',
      right: 20,
      top: 20
  }
});
