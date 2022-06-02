import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface Props {
  navigation: any;
  restoName: string;
}
export const ViewCart = ({ navigation }: Props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>ViewCart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: 130,
    zIndex: 999,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  btn: {
    backgroundColor: "#000",
    marginTop: 20,
    alignItems: "center",
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: "relative",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});

// Stopped at 3:42:02