import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const InfoCard = ({ title, description, icon, iconStyle }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Image source={icon} style={[styles.icon, iconStyle]} />
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
    width: 372,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  title: {
    width: 326,
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
  },
  icon: {
    width: 47,
    height: 47,
  },
  description: {
    width: 372,
    color: "#5A5A5A",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
  },
});

export default InfoCard;
