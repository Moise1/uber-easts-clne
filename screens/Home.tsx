import React, { useEffect, useState } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { Categories } from "../components/home/Categories";
import { HeaderTabs } from "../components/home/HeaderTabs";
import { Restaurants } from "../components/home/Restaurants";
import { SearchBar } from "../components/home/SearchBar";
import {client} from '../client';
import { Divider } from "react-native-elements";
import { BottomTabs } from "../components/home/BottomTabs";


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
      <Divider />
      <BottomTabs/>
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
 
