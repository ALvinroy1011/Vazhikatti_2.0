import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from 'expo-linear-gradient';

const Header = ({ title = "Five Pagodas", location = "Mahabalipuram" }) => {
  return (
    <ImageBackground 
      source={require('../../../assets/Shore_temple.png')} 
      style={styles.container}
      resizeMode="cover"
    >
      {/* Lighten the gradient to reduce darkness */}
      <LinearGradient
        colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.3)']} // Reduced opacity for brighter effect
        style={styles.gradient}
      >
        <TouchableOpacity style={styles.backButton}>
          <View style={styles.backButtonCircle}>
            <Ionicons name="chevron-back" size={24} color="#FFF" />
          </View>
        </TouchableOpacity>
        
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.locationContainer}>
            <Ionicons name="location-outline" size={16} color="#FFF" />
            <Text style={styles.location}>{location}</Text>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 280,
    width: '100%',
  },
  gradient: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  backButton: {
    marginTop: 20,
    alignSelf: 'flex-start',
    zIndex: 1,
  },
  backButtonCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0,0,0,0.4)', // Kept as is, but can lighten if needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    color: "#FFF",
    fontSize: 26,
    fontWeight: "700",
    lineHeight: 32,
    textTransform: "capitalize",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  location: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    textTransform: "capitalize",
    marginLeft: 4,
  },
});

export default Header;