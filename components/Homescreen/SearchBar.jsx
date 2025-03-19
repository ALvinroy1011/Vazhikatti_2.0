// components/Homescreen/SearchBar.jsx
import React from "react";
import { View, Text, TextInput, StyleSheet, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Import the icon library
import { colors, typography } from "./styles";

const SearchBar = () => {
  return (
    <ImageBackground
      source={require("../../assets/Header_background.png")} // Tamil Nadu map image
      style={styles.mapBackground}
      imageStyle={styles.mapBackgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.locationHeader}>
          <Text style={styles.exploreText}>Explore</Text>
          <Text style={styles.locationText}>Tamil Nadu</Text>
        </View>
        <View style={styles.searchBarContainer}>
          <Icon name="search" size={24} color={colors.gray} style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            placeholder="Search..."
            placeholderTextColor={colors.gray}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mapBackground: {
    width: "100%",
    height: 150, // Adjust height to cover the text and search bar
  },
  mapBackgroundImage: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  container: {
    padding: 20,
  },
  locationHeader: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  exploreText: {
    ...typography.h2,
    color: colors.black,
  },
  locationText: {
    ...typography.h1,
    color: colors.primary,
  },
  searchBarContainer: {
    flexDirection: "row", // Align icon and input horizontally
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginLeft: -10,
    marginLeft: -15, // Shift the search bar to the left
  },
  searchIcon: {
    marginRight: 8, // Space between icon and input
  },
  input: {
    flex: 1, // Allow input to take remaining space
    fontSize: 16,
    color: colors.black,
  },
});

export default SearchBar;