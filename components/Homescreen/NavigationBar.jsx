import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "./styles";
// Import icons from react-native-vector-icons
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';


const NavigationBar = ({ activeTab = "Home" }) => {
  const [active, setActive] = useState(activeTab);
  const navigation = useNavigation(); // Get navigation object

  const navigationItems = [
    { name: "Home", icon: "home-outline", activeIcon: "home", label: "Home", library: Ionicons },
    { name: "Search", icon: "search-outline", activeIcon: "search", label: "Search", library: Ionicons },
    { name: "History", icon: "history", activeIcon: "history", label: "History", library: MaterialCommunityIcons },
    { name: "Profile", icon: "person-outline", activeIcon: "person", label: "Profile", library: Ionicons },
  ];

  const handleNavigation = (screen) => {
    setActive(screen);
    navigation.navigate(screen);
  };

  const handlePress = (screenName) => {
    setActive(screenName);
    // If using react-navigation, uncomment the following line:
    // navigation && navigation.navigate(screenName);
  };

  return (
    <View style={styles.navBar}>
      {/* Left Navigation Items (Home, Search) */}
      <View style={styles.navLeft}>
        {navigationItems.slice(0, 2).map((item) => {
          const isActive = active === item.name;
          const IconComponent = item.library;
          
          return (
            <TouchableOpacity
              key={item.name}
              style={styles.navItem}
              onPress={() => handlePress(item.name)}
            >
              <View style={isActive ? styles.activeIconContainer : styles.inactiveIconContainer}>
                <IconComponent
                  name={isActive ? item.activeIcon : item.icon}
                  size={24}
                  color={isActive ? colors.white : colors.darkGray}
                />
              </View>
              <Text style={isActive ? styles.activeNavText : styles.inactiveNavText}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Central Scan Button */}
      <TouchableOpacity onPress={() => handleNavigation('Image_Scanner')} style={styles.centralButton}>
        <Ionicons name="camera" size={26} color={colors.white} />
      </TouchableOpacity>

      {/* Right Navigation Items (History, Profile) */}
      <View style={styles.navRight}>
        {navigationItems.slice(2).map((item) => {
          const isActive = active === item.name;
          const IconComponent = item.library;
          
          return (
            <TouchableOpacity
              key={item.name}
              style={styles.navItem}
              onPress={() => handlePress(item.name)}
            >
              <View style={isActive ? styles.activeIconContainer : styles.inactiveIconContainer}>
                <IconComponent
                  name={isActive ? item.activeIcon : item.icon}
                  size={24}
                  color={isActive ? colors.white : colors.darkGray}
                />
              </View>
              <Text style={isActive ? styles.activeNavText : styles.inactiveNavText}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    height: 87,
    backgroundColor: colors.black,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: "#3d3d3d",
  },
  navLeft: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
  },
  navRight: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
  },
  navItem: {
    alignItems: "center",
    paddingVertical: 5,
  },
  activeIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E7B389",
    justifyContent: "center",
    alignItems: "center",
  },
  inactiveIconContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  activeNavText: {
    color: "#E7B389",
    fontSize: 14,
    marginTop: 5,
    fontWeight: "500",
  },
  inactiveNavText: {
    color: colors.darkGray,
    fontSize: 14,
    marginTop: 5,
  },
  centralButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#8B2936",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -31,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});

export default NavigationBar;