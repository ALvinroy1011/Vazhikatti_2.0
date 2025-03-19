import * as React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import LocationCard from "../../components/Categories/LocationCard";
import Header from "../../components/Categories/Header";
import NavigationBar from "../../components/Homescreen/NavigationBar";
import SearchBar from "../../components/Categories/SearchBar";
import { useState } from "react";

const Cultural = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
    {
      id: 3,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/995d6097e427b2984ba30a5dcc256a4021a11db3",
      title: "Five Pagodas",
      location: "Mahabalipuram, Tamil Nadu",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header with dynamic title */}
      <Header title="Cultural" style={styles.header} />

      {/* Search Bar */}
      <View style={styles.searchContainer}>
      <SearchBar
        placeholder="Search by place, city..."
        value={searchTerm}
        onChangeText={setSearchTerm}
        title="Cultural"
        />
      </View>

      {/* Scrollable Location Cards */}
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.cardsContainer}>
          {locationImages
            .filter(
              (item) =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.location.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((item) => (
              <LocationCard
                key={item.id}
                imageSource={item.image}
                title={item.title}
                location={item.location}
              />
            ))}
          {locationImages.filter(
            (item) =>
              item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.location.toLowerCase().includes(searchTerm.toLowerCase())
          ).length === 0 && (
            <Text style={styles.noResultsText}>
              No locations found matching "{searchTerm}"
            </Text>
          )}
        </View>
      </ScrollView>
      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    padding: 0,
    marginTop: 0,
    flex: 1,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  scrollContainer: {
    flex: 1,
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    paddingHorizontal: 5,
    marginHorizontal: 10,
    marginTop: 20,
  },
  searchContainer: {
    marginBottom: 20,
    paddingHorizontal: 5
  },
  noResultsText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "#666",
  },
});

export default Cultural;