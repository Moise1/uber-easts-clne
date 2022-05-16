import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";
import { Categories } from "../components/Categories";
import { HeaderTabs } from "../components/HeaderTabs";
import { Restaurants } from "../components/Restaurants";
import { SearchBar } from "../components/SearchBar";
import {client} from '../client';


export const Home = () => {
  const [businessData, setBusinessData] = useState([]);
  const [city, setCity] = useState<string>('San Francisco');
  const [activeTab, setActiveTab] = useState<string>('Delivery');
  const fetchBusinessData = async () => {
    const res = await client.get(`/businesses/search?term=restaurants&location=${city}`)
    setBusinessData(res.data.businesses.filter((b )=> 
    b.transactions.includes(activeTab.toLowerCase()) 
  ));
  };

  useEffect(() => {
    fetchBusinessData();
  }, [city, activeTab]);

  console.log('active tab', activeTab);
  return (
    <SafeAreaView style={styles.home}>
      <View style={styles.view}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <SearchBar cityHandler={setCity}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <Restaurants localRestos={businessData}/>
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
 
