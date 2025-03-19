// components/Header.js
import React from "react";
import { View, Text, Image, StyleSheet, Alert } from "react-native";
import { colors, typography } from "./styles";

const Header = () => {
  const handleImageError = (error) => {
    console.log("Image load error:", error.nativeEvent.error);
    Alert.alert("Image Load Error", "The profile image could not be loaded. Using a placeholder.");
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View style={styles.menuIcon}>
          <Text style={styles.menuText}>☰</Text>
        </View>
        <View style={styles.greeting}>
          <Text style={styles.hello}>Hello!</Text>
          <Text style={styles.explorer}>Daniel Duke</Text>
        </View>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f", // Replaced with a reliable placeholder image
          }}
          style={styles.profileImage}
          onError={handleImageError}
          onLoad={() => console.log("Profile image loaded successfully")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingLeft: 16,
    paddingRight: 8,
    marginTop: 20,
    backgroundColor: colors.darkBg, // Ensures contrast
    marginBottom: 3,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  menuIcon: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  menuText: {
    fontSize: 24,
    color: colors.white,
  },
  greeting: {
    flexDirection: "column",
  },
  hello: {
    ...typography.tiny,
    color: colors.white,
    fontWeight: "300",
  },
  explorer: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.white,
  },
  profileContainer: {
    width: 48,
    height: 48,
    borderRadius: 50,
    overflow: "hidden",
    backgroundColor: "#ccc", // Added to make the container visible if the image fails
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default Header;