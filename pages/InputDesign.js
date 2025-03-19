import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { colors, typography, layout } from "../components/Homescreen/styles";
import Header from "../components/Homescreen/Header";
import SearchBar from "../components/Homescreen/SearchBar";
import CategoryCard from "../components/Homescreen/CategoryCard";
import EventCard from "../components/Homescreen/EventCard";
import HeritageCard from "../components/Homescreen/HeritageCard";
import NavigationBar from "../components/Homescreen/NavigationBar";

const InputDesign = ({ navigation }) => { // Add navigation prop
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.content}>
        <View style={styles.mainContent}>
          <SearchBar style={styles.searchBar} />

          <View style={styles.categoriesSection}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <View style={styles.categoriesContainer}>
              <TouchableOpacity onPress={() => navigation.navigate("Cultural")}>
                <CategoryCard
                  image="https://cdn.builder.io/api/v1/image/assets/TEMP/21f0e4f71f5f6881fa89169dda3a3fdc2bcab050"
                  title="Culture"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Natural")}>
                <CategoryCard
                  image="https://cdn.builder.io/api/v1/image/assets/TEMP/7fcd59723657bcd5aa2220fb7923ce329a077aaf"
                  title="Natural"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Mixed")}>
                <CategoryCard
                  image="https://cdn.builder.io/api/v1/image/assets/TEMP/dbc18526d7750459f28ca0a155a517179b5f894a"
                  title="Mixed"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.eventsSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Events</Text>
              <Text style={styles.viewAll}>View all</Text>
            </View>
            <EventCard
              images={[
                "https://cdn.builder.io/api/v1/image/assets/TEMP/6147506f8cabd05387c309d35db3e47bbc84d003",
                "https://cdn.builder.io/api/v1/image/assets/TEMP/20cc6b22efb40a58d623e05595f6b59deb5e747d",
                "https://cdn.builder.io/api/v1/image/assets/TEMP/20cc6b22efb40a58d623e05595f6b59deb5e747d"
              ]}
              title="Visit This Historic Place"
              location="@Five Pagodas"
            />
          </View>

          <View style={styles.heritageSection}>
            <Text style={styles.sectionTitle}>Popular Heritage Sites</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.heritageScroll}
            >
              <HeritageCard
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/6147506f8cabd05387c309d35db3e47bbc84d003"
                title="Five Pagodas"
                location="Mahabalipuram"
              />
              <HeritageCard
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/20cc6b22efb40a58d623e05595f6b59deb5e747d"
                title="Five Pagodas"
                location="Mahabalipuram"
              />
              <HeritageCard
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/6147506f8cabd05387c309d35db3e47bbc84d003"
                title="Five Pagodas"
                location="Mahabalipuram"
              />
              <HeritageCard
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/20cc6b22efb40a58d623e05595f6b59deb5e747d"
                title="Five Pagodas"
                location="Mahabalipuram"
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
    maxWidth: 412,
    width: "100%",
  },
  searchBar: {
    marginTop: -40, // Pull the SearchBar closer to the Header
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  mainContent: {
    padding: 20,
  },
  categoriesSection: {
    marginTop: 30,
  },
  sectionTitle: {
    ...typography.h2,
    color: colors.black,
    marginBottom: 20,
  },
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Distributes cards evenly across the container
    paddingHorizontal: 10, // Adds padding to the edges for better spacing
  },
  eventsSection: {
    marginTop: 30,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  viewAll: {
    color: colors.orange,
    fontSize: 16,
    fontWeight: "600",
  },
  heritageSection: {
    marginTop: 30,
  },
  heritageScroll: {
    flexDirection: "row",
    gap: 15,
  },
});

export default InputDesign;