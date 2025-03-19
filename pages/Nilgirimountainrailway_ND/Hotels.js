import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, StatusBar, Image } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import NavigationBar from '../../components/Homescreen/NavigationBar';
import Header from '../../components/Shoretemple/Description/Header';
import { useNavigation } from '@react-navigation/native';


const ShoreTempleImage = require('../../assets/Shore_temple.png');
const HotelTamilnaduImage1 = require('../../assets/Hotel_Tamilnadu.jpg');
const HotelTamilnaduImage2 = require('../../assets/Hotel_Tamilnadu.jpg');

const Hotels = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState('Hotels');
    const tabs = ['Description', 'Hotels', 'Things To Do'];

  const hotels = [
    { name: 'Hotel Tamilnadu', rating: 4.8, distance: '2.5 km', image: HotelTamilnaduImage1 },
    { name: 'Hotel Tamilnadu', rating: 4.8, distance: '2.5 km', image: HotelTamilnaduImage2 },
    { name: 'Hotel Tamilnadu', rating: 4.8, distance: '2.5 km', image: HotelTamilnaduImage1 },
    { name: 'Hotel Tamilnadu', rating: 4.8, distance: '2.5 km', image: HotelTamilnaduImage1 },
  ];

  const handleTabPress = (tab) => {
    if (tab === activeTab) return;
    setActiveTab(tab);
    if (tab === 'Description') {
      navigation.navigate('Description');
    } else if (tab === 'Things To Do') {
      navigation.navigate('Thingstodo');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Header title="Five Pagodas" location="Mahabalipuram" image={ShoreTempleImage} />
        <View style={styles.contentCard}>
          <View style={styles.tabsContainer}>
            {tabs.map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[styles.tab, activeTab === tab && styles.activeTab]}
                onPress={() => handleTabPress(tab)}
              >
                <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                  {tab.toUpperCase()}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
            {hotels.map((hotel, index) => (
              <View key={index} style={styles.hotelCard}>
                <Image source={hotel.image} style={styles.hotelImage} />
                <View style={styles.hotelInfo}>
                  <Text style={styles.hotelTitle}>{hotel.name}</Text>
                  <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>
                      {hotel.rating} <Ionicons name="star" size={16} color="#FFD700" /> ★★★★☆
                    </Text>
                  </View>
                  <View style={styles.distanceContainer}>
                    <Ionicons name="location-outline" size={16} color="#888" />
                    <Text style={styles.distanceText}> {hotel.distance} from Five Pagodas</Text>
                  </View>
                </View>
              </View>
            ))}
            <View style={{ height: 100 }} />
          </ScrollView>
        </View>
        <NavigationBar activeTab="Home" />
        <TouchableOpacity 
          style={styles.chatbotButton} 
          onPress={() => navigation.navigate('Chatbot')} // Navigate to Chatbot screen
        >         
         <MaterialCommunityIcons name="robot" size={28} color="#FFF" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#000',
    },
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    contentCard: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -20,
    },
    tabsContainer: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    tab: {
        marginRight: 24,
        paddingBottom: 10,
    },
    activeTab: {
        borderBottomWidth: 3,
        borderBottomColor: '#8B0000', // Deep maroon color
    },
    tabText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#888',
    },
    activeTabText: {
        color: '#000',
        fontWeight: '700',
    },
    contentContainer: {
        flex: 1,
        padding: 20,
    },
    hotelCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        marginBottom: 15,
        padding: 10,
    },
    hotelImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 15,
    },
    hotelInfo: {
        flex: 1,
    },
    hotelTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 5,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    ratingText: {
        fontSize: 15,
        color: '#444',
    },
    distanceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    distanceText: {
        fontSize: 15,
        color: '#888',
    },
    // Chatbot button styles
    chatbotButton: {
        position: 'absolute',
        bottom: 110, // Position above the bottom navigation bar (adjust based on NavigationBar height)
        right: 20, // Distance from the right edge
        backgroundColor: '#8B2936', // Circle background color
        borderRadius: 30, // Circular shape
        width: 60, // Circle size
        height: 60, // Circle size
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
});

export default Hotels;