import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface Props {
  txt?: string;
  btnColor?: string;
  txtColor?: string;
}

export const HeaderTabs = () => {
  return (
    <View style={styles.headerTabs}>
      <HeaderBtn txt="Delivery" btnColor="black" txtColor="white" />
      <HeaderBtn txt="Pickup" btnColor="white" txtColor="black" />
    </View>
  );
};

const HeaderBtn = ({ txt, txtColor, btnColor }: Props) => (
  <TouchableOpacity style={{...styles.headerBtn, backgroundColor: btnColor}}>
    <Text style={{...styles.headerBtnTxt, color: txtColor}}>{txt}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  headerTabs: {
    flexDirection: "row",
    alignSelf: "center",
  },

  headerBtn: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 40,
  },
  headerBtnTxt: {
    fontSize: 15,
    fontWeight: "900",
  },
});
