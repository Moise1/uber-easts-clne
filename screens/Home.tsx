import React from "react";
import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";
import { Categories } from "../components/Categories";
import { HeaderTabs } from "../components/HeaderTabs";
import { Restaurant } from "../components/Restaurant";
import { SearchBar } from "../components/SearchBar";

export const Home = () => {
  return (
    <SafeAreaView style={styles.home}>
      <View style={styles.view}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <Restaurant/>
      </ScrollView>
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
