// components/Homescreen/SearchBar.jsx
import React from "react";
import { View, Text, TextInput, StyleSheet, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Import the icon library
import { colors, typography } from "./styles";

const SearchBar = ({ title, placeholder, value, onChangeText }) => {
  // Debug: Log the title prop to verify it's being passed
  console.log("SearchBar title:", title);

  // If no title is provided, it means this is the Home page (InputDesign)
  const isHomePage = !title;

  return (
    <ImageBackground
      source={require("../../assets/Header_background.png")} // Tamil Nadu map image
      style={styles.mapBackground}
      imageStyle={styles.mapBackgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.locationHeader}>
          {isHomePage ? (
            // Split text for Home page (InputDesign) into "Explore" and "Tamil Nadu"
            <>
              <Text style={styles.exploreText}>Explore</Text>
              <Text style={styles.locationText}>Tamil Nadu</Text>
            </>
          ) : (
            // Single text for other pages like Natural, Cultural, Mixed
            <Text style={styles.locationText}>{title}</Text>
          )}
        </View>
        <View style={styles.searchBarContainer}>
          <Icon name="search" size={24} color={colors.gray} style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            placeholder={placeholder || "Search..."} // Use provided placeholder or default
            value={value} // Bind the value from props
            onChangeText={onChangeText} // Handle text changes
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
    marginBottom: 20,
    marginLeft: 10,
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
    paddingVertical: 15,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginLeft: -10,
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