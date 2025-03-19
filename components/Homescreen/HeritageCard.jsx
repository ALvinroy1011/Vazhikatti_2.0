import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { colors, shared } from "./styles";

const HeritageCard = ({ image, title, location }) => {
  return (
    <View style={[styles.container, shared.card]}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.locationContainer}>
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 260,
    height: 200,
    flexShrink: 0,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  content: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    color: colors.white,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 8,
  },
  location: {
    fontSize: 14,
    color: colors.white,
  },
});

export default HeritageCard;
