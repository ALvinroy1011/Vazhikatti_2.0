import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "./SearchBar";
import LocationCard from "./LocationCard";

const NatureOfTamilNadu = () => {
  // Sample image URLs - in a real app, these would be actual image paths
  const locationImages = [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/995d6097e427b2984ba30a5dcc256a4021a11db3",
      title: "Five Pagodas",
      location: "Mahabalipuram, Tamil Nadu",
    },
    {
      id: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b55c165ea557dac76b5d8962c72714457a26bebe",
      title: "Five Pagodas",
      location: "Mahabalipuram, Tamil Nadu",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.iconPlaceholder} />
        <Text style={styles.headerTitle}>Nature of Tamil Nadu</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <SearchBar placeholder="Search by place, city..." />
      </View>

      {/* Location Cards */}
      <View style={styles.cardsContainer}>
        {locationImages.map((item) => (
          <LocationCard
            key={item.id}
            imageSource={item.image}
            title={item.title}
            location={item.location}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    padding: 20,
    marginTop: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 20,
  },
  iconPlaceholder: {
    width: 48,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
  },
  headerTitle: {
    fontFamily: "Poppins",
    fontSize: 23,
    fontWeight: "600",
    color: "#8B2936",
  },
  searchContainer: {
    marginBottom: 30,
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
});

export default NatureOfTamilNadu;
