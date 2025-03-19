import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import NavigationBar from '../../components/Homescreen/NavigationBar';
import Header from '../../components/Shoretemple/Description/Header';
import { useNavigation } from '@react-navigation/native';


const ShoreTempleImage = require('../../assets/Shore_temple.png');

const Description = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Description');
  const tabs = ['Description', 'Hotels', 'Things To Do'];

  const handleTabPress = (tab) => {
    if (tab === activeTab) return;
    setActiveTab(tab);
    if (tab === 'Hotels') {
      navigation.navigate('Hotels');
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
            <View style={styles.section}>
              <View style={styles.sectionTitleContainer}>
                <Text style={styles.sectionTitle}>You know what?</Text>
                <View style={styles.iconContainer}>
                  <Ionicons name="bulb-outline" size={36} color="#FFD700" />
                </View>
              </View>
              <Text style={styles.sectionText}>
                The Shore Temple in Mahabalipuram, located on the southeastern coast of India, is a stunning 8th-century architectural marvel.
              </Text>
            </View>
            <View style={styles.section}>
              <View style={styles.sectionTitleContainer}>
                <Text style={styles.sectionTitle}>When is the best time to visit?</Text>
                <View style={styles.iconContainer}>
                  <MaterialCommunityIcons name="bag-suitcase-outline" size={36} color="#FF4500" />
                </View>
              </View>
              <Text style={styles.sectionText}>November - February</Text>
            </View>
            <View style={styles.section}>
              <View style={styles.sectionTitleContainer}>
                <Text style={styles.sectionTitle}>History</Text>
                <View style={styles.iconContainer}>
                  <Ionicons name="book-outline" size={36} color="#4682B4" />
                </View>
              </View>
              <Text style={styles.sectionText}>
                Built during the reign of Narasimhavarman II of the Pallava dynasty, this UNESCO World Heritage site showcases Dravidian architectural style and is one of the oldest structural temples in South India.
              </Text>
            </View>
            <View style={styles.section}>
              <View style={styles.sectionTitleContainer}>
                <Text style={styles.sectionTitle}>How to get there?</Text>
                <View style={styles.iconContainer}>
                  <Ionicons name="car-outline" size={36} color="#228B22" />
                </View>
              </View>
              <Text style={styles.sectionText}>
                Located approximately 60km from Chennai. You can reach here by:
                {'\n'}- Public bus from Chennai
                {'\n'}- Taxi/private car (recommended)
                {'\n'}- Organized tours from Chennai
              </Text>
            </View>
            <View style={{ height: 100 }} />
          </ScrollView>
        </View>
        
        <TouchableOpacity 
        style={styles.chatbotButton}
        onPress={() => navigation.navigate('Chatbot')}
        >
          <MaterialCommunityIcons name="robot" size={28} color="#FFF" />
        </TouchableOpacity>
        <NavigationBar activeTab="Home"/>
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
  section: {
    marginBottom: 24,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15, // Increased gap for larger icons
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginRight: 8,
  },
  iconContainer: {
    width: 36,  // Increased container size for larger icons
    height: 36, // Increased container size for larger icons
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionText: {
    fontSize: 15,
    color: '#444',
    lineHeight: 24,
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

export default Description;