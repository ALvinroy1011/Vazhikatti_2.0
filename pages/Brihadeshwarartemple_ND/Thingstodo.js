import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import NavigationBar from '../../components/Homescreen/NavigationBar';
import Header from '../../components/Shoretemple/Description/Header';

const ShoreTempleImage = require('../../assets/Shore_temple.png');

const Thingstodo = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Things To Do');
  const tabs = ['Description', 'Hotels', 'Things To Do'];

  const activities = [
    {
      title: 'Beach Stroll',
      emoji: '🏖️',
      description: 'Take a leisurely stroll along the scenic beaches of Mahabalipuram. Feel the sand between your toes and enjoy the refreshing sea breeze. Best in the cool morning or evening.',
      bestTime: 'Dawn or Dusk',
    },
    {
      title: 'Temple Tour',
      emoji: '⛩️',
      description: 'Explore the ancient temples and rock-cut monuments of Mahabalipuram. A perfect way to dive into history and architecture.',
      bestTime: 'Morning',
    },
    {
      title: 'Seafood Feast',
      emoji: '🍤',
      description: 'Enjoy a delicious seafood meal at a local restaurant by the beach. Savor the fresh catch of the day.',
      bestTime: 'Afternoon',
    },
  ];

  const handleTabPress = (tab) => {
    if (tab === activeTab) return;
    
    if (tab === 'Description') {
      navigation.navigate('Description');
    } else if (tab === 'Hotels') {
      navigation.navigate('Hotels');
    }
  };

  const navigateToChatbot = () => {
    // Navigate to chatbot screen and pass the current screen name as a parameter
    navigation.navigate('Chatbot', { 
      sourceScreen: 'Thingstodo' 
    });
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
          <ScrollView
            style={styles.contentContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
          >
            {activities.map((activity, index) => (
              <View key={index} style={styles.activityCard}>
                <Text style={styles.activityEmoji}>{activity.emoji}</Text>
                <Text style={styles.activityTitle}>{activity.title}</Text>
                <Text style={styles.activityDescription}>{activity.description}</Text>
                <Text style={styles.activityBestTime}>Best: {activity.bestTime}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <NavigationBar activeTab="Home" />
        <TouchableOpacity style={styles.chatbotButton} onPress={navigateToChatbot}>
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
    activityCard: {
        width: 300, // Fixed width for each card to create a carousel effect
        backgroundColor: '#F9F0EA', // Specified card background color
        borderRadius: 15,
        padding: 15,
        marginRight: 15,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    activityEmoji: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 10,
    },
    activityTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 10,
    },
    activityDescription: {
        fontSize: 14,
        color: '#444',
        lineHeight: 20,
        marginBottom: 10,
    },
    activityBestTime: {
        fontSize: 14,
        color: '#888',
        fontStyle: 'italic',
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

export default Thingstodo;