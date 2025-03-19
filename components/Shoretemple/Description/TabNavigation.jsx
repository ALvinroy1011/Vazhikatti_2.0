import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TabNavigation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        <Text style={styles.tabText}>Description</Text>
        <Text style={styles.tabText}>Hotels</Text>
        <Text style={styles.tabText}>Things to do</Text>
      </View>
      <View style={styles.indicatorContainer}>
        <View style={styles.background} />
        <View style={styles.indicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    marginBottom: 20,
  },
  tabsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 40,
  },
  tabText: {
    color: "#8B8B8B",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
    textTransform: "capitalize",
  },
  indicatorContainer: {
    width: 372,
    height: 3,
    position: "relative",
  },
  background: {
    width: "100%",
    height: 1,
    borderRadius: 24,
    position: "absolute",
    top: 2,
    backgroundColor: "#E3E2E2",
  },
  indicator: {
    width: 99,
    height: 3,
    borderRadius: 32,
    position: "absolute",
    top: 0,
    backgroundColor: "#8B2936",
  },
});

export default TabNavigation;
