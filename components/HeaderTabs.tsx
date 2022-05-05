import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  txt: string;
  activeTab: string;
  setActiveTab: (value: string) => void;
}

export const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState<string>("Delivery");
  
  return (
    <View style={styles.headerTabs}>
      <HeaderBtn
        txt="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderBtn
        txt="Pickup"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

const HeaderBtn = (props: Props) => {
  const {txt, activeTab, setActiveTab} = props;
  return (
    <TouchableOpacity
      style={{
        ...styles.headerBtn,
        backgroundColor: activeTab === txt ? "black" : "white"
      }} 
      onPress={() => setActiveTab(txt)}>
      <Text
        style={{
          ...styles.headerBtnTxt,
          color: activeTab === txt ? "white" : "black",
        }}
      >
        {txt}
      </Text>
    </TouchableOpacity>
  );
};

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
