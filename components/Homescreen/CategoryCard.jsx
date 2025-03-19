// components/CategoryCard.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { colors, shared } from "./styles";

const CategoryCard = ({ image, title }) => {
  return (
    <View style={[styles.container, shared.card]}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.gradient} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 90, // Size is already correct
    height: 90, // Size is already correct
    marginHorizontal: 10, // Added margin to create gap between cards
  },
  image: {
    width: "100%",
    height: "100%",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 65,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  title: {
    position: "absolute",
    bottom: 12,
    left: 12,
    color: colors.white,
    fontSize: 16,
    fontWeight: "500",
  },
});

export default CategoryCard;