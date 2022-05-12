import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";
import { Categories } from "../components/Categories";
import { HeaderTabs } from "../components/HeaderTabs";
import { Restaurants } from "../components/Restaurants";
import { SearchBar } from "../components/SearchBar";
import {client} from '../client';


export const Home = () => {
  const [businessData, setBusinessData] = useState([]);

  const fetchBusinessData = async () => {
    const res = await client.get('/businesses/search?term=restaurants&location=SanDiego')
    setBusinessData(res.data.businesses);
  };

  useEffect(() => {
    fetchBusinessData();
  }, []);

  // console.log("YELP BUSINESS DATA", businessData[0]);
  return (
    <SafeAreaView style={styles.home}>
      <View style={styles.view}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <Restaurants localRestos={businessData} />
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


// Stopped at 1:43:33