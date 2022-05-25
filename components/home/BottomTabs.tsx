import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

interface IconProps {
  icon: string;
  text: string;
}
export const BottomTabs = () => {
  return (
    <View style={styles.view}>
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  );
};

const Icon = ({ icon, text }: IconProps) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5 name={icon} size={25} style={styles.icon} />
      <Text>{text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    margin: 10,
    marginHorizontal: 30,
    justifyContent: "space-between",
  },
  icon: {
    marginBottom: 4,
    alignSelf: "center",
  },
});
