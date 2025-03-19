import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import Chatbot from '../components/Chatbot/Chatbot';

export default function Chat_bot(){
    return (
        <View style={styles.container}>
          <Chatbot />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });