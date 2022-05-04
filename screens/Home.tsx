import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { HeaderTabs } from "../components/HeaderTabs";
import {SearchBar} from "../components/SearchBar";

export const Home = () => {
  return (
    <SafeAreaView style={styles.home}>
      <View style={styles.view}>
        <HeaderTabs />
        <SearchBar/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#eee",
    flex: 1,
  },
  view: {
    backgroundColor: "#fff",
    padding: 15,
  },
});
