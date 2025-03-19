import React, { useState, useRef } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import { colors, shared } from "./styles";

const { width } = Dimensions.get("window");

const EventCard = ({ images, title, location }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);

  // If we only receive a single image as a string, convert it to an array
  const imageArray = Array.isArray(images) ? images : [images];

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setActiveIndex(currentIndex);
  };

  const scrollToImage = (index) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: width * index,
        animated: true,
      });
    }
  };

  return (
    <View style={[styles.container, shared.card]}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.scrollView}
      >
        {imageArray.map((img, index) => (
          <Image 
            key={index} 
            source={{ uri: img }} 
            style={styles.image} 
            resizeMode="cover"
          />
        ))}
      </ScrollView>
      
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
      
      <View style={styles.indicators}>
        {imageArray.map((_, index) => (
          <TouchableOpacity 
            key={index} 
            style={[
              styles.indicator, 
              index === activeIndex && styles.activeIndicator
            ]}
            onPress={() => scrollToImage(index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 183,
    position: "relative",
    overflow: "hidden",
  },
  scrollView: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: width - 40, // Accounting for the 20px padding on each side from parent container
    height: "100%",
  },
  content: {
    position: "absolute",
    bottom: 20,
    left: 20,
    zIndex: 2,
  },
  title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "800",
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  location: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "500",
    marginTop: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  indicators: {
    position: "absolute",
    bottom: 20,
    left: "50%",
    transform: [{ translateX: -30 }],
    flexDirection: "row",
    gap: 10,
    zIndex: 2,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "rgba(255,255,255,0.5)",
  },
  activeIndicator: {
    backgroundColor: colors.white,
  },
});

export default EventCard;