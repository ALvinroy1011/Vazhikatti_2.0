import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { HomeIcon, SearchIcon, ClockIcon, UserIcon } from "./Icons";

const NavItem = ({ icon: Icon, label }) => (
  <TouchableOpacity style={styles.navItem}>
    <Icon />
    <Text style={styles.navLabel}>{label}</Text>
  </TouchableOpacity>
);

const BottomNav = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <NavItem icon={HomeIcon} label="Home" />
        <NavItem icon={SearchIcon} label="Search" />
        <NavItem icon={ClockIcon} label="History" />
        <NavItem icon={UserIcon} label="Profile" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 413,
    height: 85,
    paddingHorizontal: 21,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#161616",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    gap: 50,
    paddingBottom: 14,
  },
  navItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 14,
  },
  navLabel: {
    color: "#8B8B8B",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 16,
    textTransform: "capitalize",
  },
});

export default BottomNav;
