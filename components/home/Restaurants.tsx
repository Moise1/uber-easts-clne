import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

interface Props {
  localRestos: {
    image_url: string;
    name: string;
    rating: string;
    [key: string]: string;
  }[];
  restoImg?: string;
  restoName?: string;
  rating?: string;
  navigation: any;
}

export const Restaurants = ({ navigation, ...rest }: Props) => {
  const { localRestos } = rest;
  return (
    <>
      {localRestos?.map((resto, idx: number) => (
        <TouchableOpacity
          key={idx}
          activeOpacity={1}
          style={styles.restoActiveOpacity}
          onPress={() =>
            navigation.navigate("RestoDetail", {
              name: resto.name,
              img: resto.image_url,
              rating: resto.rating,
              categories: resto.categories,
              price: resto.price,
              reviews: resto.review_count,
            })
          }
        >
          <View style={styles.mainRestoView}>
            <RestoImg restoImg={resto.image_url} />
            <RestoInfo restoName={resto.name} rating={resto.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

const RestoImg = ({ restoImg }: { restoImg: Props["restoImg"] }) => (
  <>
    <Image source={{ uri: restoImg }} style={styles.img} />
    <TouchableOpacity style={styles.iconContainer}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestoInfo = ({
  restoName,
  rating,
}: {
  restoName: Props["restoName"];
  rating: Props["rating"];
}) => (
  <View style={styles.restoInfo}>
    <View>
      <Text style={styles.description}>{restoName}</Text>
      <Text style={styles.prepTime}>30-40 . min</Text>
    </View>
    <View style={styles.ratingView}>
      <Text>{rating}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  restoActiveOpacity: {
    marginTop: 30,
  },
  mainRestoView: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "#fff",
  },
  img: {
    width: "100%",
    height: 180,
  },
  iconContainer: {
    position: "absolute",
    right: 20,
    top: 20,
  },
  restoInfo: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  description: {
    fontSize: 15,
    fontWeight: "bold",
  },
  prepTime: {
    fontSize: 13,
    color: "gray",
  },
  ratingView: {
    backgroundColor: "#eee",
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
});
