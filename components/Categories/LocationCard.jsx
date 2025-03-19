import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const LocationCard = ({ imageSource, title, location }) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{ uri: imageSource }}
        style={styles.cardImage}
        accessibilityLabel={title}
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardLocation}>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    position: "relative",
    borderRadius: 24,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 284,
    resizeMode: "cover",
  },
  cardContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    paddingTop: 22,
    paddingRight: 39,
    paddingBottom: 22,
    paddingLeft: 39,
  },
  cardTitle: {
    fontFamily: "Poppins",
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 10,
    color: "white",
  },
  cardLocation: {
    fontFamily: "Poppins",
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },
});

export default LocationCard;
