import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { colors, typography, layout } from "./styles";
import Header from "./Header";
import SearchBar from "./SearchBar";
import CategoryCard from "./CategoryCard";
import EventCard from "./EventCard";
import HeritageCard from "./HeritageCard";
import NavigationBar from "./NavigationBar";

const InputDesign = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.locationHeader}>
            <Text style={styles.exploreText}>Explore</Text>
            <Text style={styles.locationText}>Tamil Nadu</Text>
          </View>

          <SearchBar />

          <View style={styles.categoriesSection}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.categoriesScroll}
            >
              <CategoryCard
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/21f0e4f71f5f6881fa89169dda3a3fdc2bcab050"
                title="Culture"
              />
              <CategoryCard
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/7fcd59723657bcd5aa2220fb7923ce329a077aaf"
                title="Natural"
              />
              <CategoryCard
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/dbc18526d7750459f28ca0a155a517179b5f894a"
                title="Mixed"
              />
            </ScrollView>
          </View>

          <View style={styles.eventsSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Events</Text>
              <Text style={styles.viewAll}>View all</Text>
            </View>
            <EventCard
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/6147506f8cabd05387c309d35db3e47bbc84d003"
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
                title="Five pagodas"
                location="Mahabalipuram"
              />
              <HeritageCard
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/20cc6b22efb40a58d623e05595f6b59deb5e747d"
                title="Five pagodas"
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
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  mainContent: {
    padding: 20,
  },
  locationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  exploreText: {
    ...typography.h2,
    color: colors.black,
  },
  locationText: {
    ...typography.h1,
    color: colors.primary,
  },
  categoriesSection: {
    marginTop: 30,
  },
  sectionTitle: {
    ...typography.h2,
    color: colors.black,
    marginBottom: 20,
  },
  categoriesScroll: {
    flexDirection: "row",
    gap: 15,
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
