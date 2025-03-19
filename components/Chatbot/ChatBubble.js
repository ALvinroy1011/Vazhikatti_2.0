import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

const ChatBubble = ({ role, text, onSpeech }) => {
    return (
        <View
          style={[
            styles.chatItem,
            role === "user" ? styles.userChatItem : styles.modelChatItem,
          ]}
        >
          <Text style={[
            styles.chatText, 
            role === "model" ? styles.modelChatText : styles.userChatText
          ]}>
            {text}
          </Text>
          
          {role === "model" && (
            <TouchableOpacity onPress={onSpeech} style={styles.speakerIcon}>
              <Ionicons name="volume-high-outline" size={20} color="#8B2936" />
            </TouchableOpacity>
          )}
        </View>
    );
};

const styles = StyleSheet.create({
    chatItem: {
        marginVertical: 8,
        padding: 12,
        borderRadius: 16,
        maxWidth: "75%",
        minWidth: 50,
    },
    userChatItem: {
        alignSelf: "flex-end",
        backgroundColor: "#8B2936",
        marginLeft: 50,
    },
    modelChatItem: {
        alignSelf: "flex-start",
        backgroundColor: "#E5E5EA",
        marginRight: 50,
    },
    chatText: {
        fontSize: 16,
        marginRight: 25, // Space for the speaker icon
    },
    userChatText: {
        color: "#FFF",
    },
    modelChatText: {
        color: "#333",
    },
    speakerIcon: {
        position: "absolute",
        bottom: 8,
        right: 8,
        backgroundColor: "rgba(255,255,255,0.7)",
        borderRadius: 12,
        padding: 4,
    },
});

export default ChatBubble;