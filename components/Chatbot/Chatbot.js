import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  FlatList, 
  ActivityIndicator, 
  StyleSheet 
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from 'axios';
import ChatBubble from "./ChatBubble";
import { speak, isSpeakingAsync, stop } from "expo-speech";
import NavigationBar from '../Homescreen/NavigationBar';
import { useNavigation } from '@react-navigation/native';

const Chatbot = (props) => {
    const navigation = useNavigation();
    
    // Get route params if they exist
    const route = props.route;
    const sourceScreen = route && route.params ? route.params.sourceScreen : 'Description';

    const handleBackPress = () => {
        // Navigate back to the previous screen
        if (navigation) {
            navigation.goBack();
        } else {
            console.warn("Navigation object is undefined");
        }
    };

    const [chat, setChat] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isSpeaking, setIsSpeaking] = useState(false);

    // Better to use environment variables, but for quick fix:
    const API_KEY = "AIzaSyDZJaLIyh-weNNwF17jXRC0wNqdu5pufXM";

    const handleUserInput = async () => {
        if (!userInput.trim()) return;

        const prompt = "Act as a professional tour guide. Your responses should be concise and helpful, providing the tourist with the information they need. Please avoid very long answers and do not use bold, underlined, or italicized text in your responses. ";
        const userMessageContent = prompt + userInput;
        
        const userMessage = {
            role: "user",
            parts: [{text: userInput}]
        };
        
        const updatedChat = [...chat, userMessage];
        setChat(updatedChat);
        setUserInput("");
        setLoading(true);
        setError(null);
        
        try {
            const requestBody = {
                contents: [
                    {
                        role: "user",
                        parts: [{ text: userMessageContent }]
                    }
                ],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 1024,
                }
            };
            
            const response = await axios.post(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
                requestBody
            );
            
            console.log("Gemini API Response:", response.data);
            
            if (response.data && 
                response.data.candidates && 
                response.data.candidates.length > 0 && 
                response.data.candidates[0].content) {
                
                const modelResponse = response.data.candidates[0].content.parts[0].text || "";
                
                if (modelResponse) {
                    const modelMessage = {
                        role: "model",
                        parts: [{ text: modelResponse }]
                    };
                    
                    setChat([...updatedChat, modelMessage]);
                } else {
                    setError("Received empty response from Gemini");
                }
            } else {
                setError("Invalid response format from Gemini API");
                console.error("Invalid response format:", response.data);
            }
        } catch (error) {
            console.error("Error calling Gemini API:", error);
            if (error.response) {
                console.error("Error response data:", error.response.data);
                setError(`API Error: ${error.response.data?.error?.message || "Unknown error"}`);
            } else if (error.request) {
                console.error("No response received:", error.request);
                setError("Network error: No response received");
            } else {
                console.error("Error:", error.message);
                setError(`Error: ${error.message}`);
            }
        } finally {
            setLoading(false);
        }
    };

    const handleSpeech = async (text) => {
        try {
            const currentlySpeaking = await isSpeakingAsync();
            
            if (isSpeaking || currentlySpeaking) {
                stop();
                setIsSpeaking(false);
            } else {
                speak(text, {
                    onDone: () => setIsSpeaking(false),
                    onError: (error) => {
                        console.error("Speech error:", error);
                        setIsSpeaking(false);
                    }
                });
                setIsSpeaking(true);
            }
        } catch (error) {
            console.error("Speech handling error:", error);
            setIsSpeaking(false);
        }
    };

    const renderChatItem = ({ item }) => (
        <ChatBubble
            role={item.role}
            text={item.parts[0].text}
            onSpeech={() => handleSpeech(item.parts[0].text)}
        />
    );

    return (
        <View style={styles.container}>
            {/* Custom Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
                    <Ionicons name="chevron-back-outline" size={24} color="#FFF" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Explorer</Text>
                <TouchableOpacity style={styles.bellButton}>
                    {/* <Ionicons name="notifications-outline" size={24} color="#FFF" /> */}
                    {/* <View style={styles.notificationBadge}>
                        <Text style={styles.notificationText}>1</Text>
                    </View> */}
                </TouchableOpacity>
            </View>

            {/* Chat Area */}
            <FlatList
                data={chat}
                renderItem={renderChatItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.chatContainer}
            />

            {/* Input Area */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Message here ..."
                    placeholderTextColor="#888"
                    value={userInput}
                    onChangeText={setUserInput}
                    multiline={true}
                    maxHeight={50}
                />
                <TouchableOpacity 
                    style={[styles.sendButton, !userInput.trim() && styles.sendButtonDisabled]} 
                    onPress={handleUserInput}
                    disabled={!userInput.trim() || loading}
                >
                    <Ionicons name="play" size={24} color="#FFF" />
                </TouchableOpacity>
            </View>

            {loading && <ActivityIndicator style={styles.loading} color="#8B2936" size="large" />}
            {error && <Text style={styles.error}>{error}</Text>}

            {/* Navigation Bar */}
            <NavigationBar navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#8B2936",
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    backButton: {
        padding: 5,
        paddingTop:25
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "600",
        color: "#FFF",
        paddingTop:20
    },
    bellButton: {
        padding: 5,
        position: "relative",
    },
    notificationBadge: {
        position: "absolute",
        top: 0,
        right: 0,
        backgroundColor: "#FF0000",
        borderRadius: 10,
        width: 18,
        height: 18,
        justifyContent: "center",
        alignItems: "center",
    },
    notificationText: {
        color: "#FFF",
        fontSize: 12,
        fontWeight: "bold",
    },
    chatContainer: {
        flexGrow: 1,
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 20,
        backgroundColor: "#FFF",
    },
    input: {
        flex: 1,
        height: 50,
        paddingHorizontal: 15,
        borderRadius: 25,
        backgroundColor: "#F0F0F0",
        color: "#333",
        fontSize: 16,
    },
    sendButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#9F0B1D",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
    },
    sendButtonDisabled: {
        backgroundColor: "#9F0B1D",
    },
    loading: {
        marginTop: 20,
    },
    error: {
        color: 'red',
        marginTop: 10,
        textAlign: 'center',
    },
});

export default Chatbot;