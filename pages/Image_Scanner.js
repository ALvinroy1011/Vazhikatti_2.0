import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator, ScrollView, SafeAreaView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import CameraComponent from '../components/ImageScanner/CameraComponent';
import Header from '../components/Homescreen/Header';
import NavigationBar from '../components/Homescreen/NavigationBar';
import { useNavigation } from '@react-navigation/native';

export default function Image_Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraVisible, setCameraVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      let galleryStatus = 'denied';

      try {
        const galleryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        galleryStatus = galleryPermission.status;
        setHasPermission(galleryStatus === 'granted');

        if (galleryStatus !== 'granted') {
          Alert.alert('Permission required', 'Gallery permission is needed for this app to work properly.');
        }
      } catch (e) {
        console.log('Error requesting permissions:', e);
        Alert.alert('Error', 'Failed to request permissions.');
      }
    })();
  }, []);

  const handleImageCaptured = (photo) => {
    setImage(photo.uri);
    processImage(photo.base64);
  };

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.7,
        base64: true,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const selectedImage = result.assets[0];
        setImage(selectedImage.uri);

        if (!selectedImage.base64) {
          const base64 = await FileSystem.readAsStringAsync(selectedImage.uri, {
            encoding: FileSystem.EncodingType.Base64,
          });
          processImage(base64);
        } else {
          processImage(selectedImage.base64);
        }
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'Failed to pick image. Please try again.');
    }
  };

  const processImage = async (base64Image) => {
    setLoading(true);
    setResult(null);

    try {
      const apiKey = 'AIzaSyDZJaLIyh-weNNwF17jXRC0wNqdu5pufXM';
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const requestData = {
        contents: [
          {
            parts: [
              {
                text: "Identify this heritage site. Provide the name, location, historical significance, and interesting facts about it. If it's not a heritage site, explain what appears in the image."
              },
              {
                inline_data: {
                  mime_type: "image/jpeg",
                  data: base64Image
                }
              }
            ]
          }
        ],
        generation_config: {
          temperature: 0.4,
          top_p: 1,
          top_k: 32,
          max_output_tokens: 2048,
        }
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        const text = data.candidates[0].content.parts[0].text;
        setResult(text);
      } else {
        throw new Error('Invalid response format from Gemini API');
      }
    } catch (error) {
      console.error('Error processing image:', error);
      setResult(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (hasPermission === null) {
    return <View style={styles.container}><Text>Requesting permissions...</Text></View>;
  }

  if (hasPermission === false) {
    return <View style={styles.container}><Text>No access to gallery</Text></View>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {cameraVisible ? (
        <CameraComponent
          onImageCaptured={handleImageCaptured}
          onClose={() => setCameraVisible(false)}
        />
      ) : (
        <ScrollView style={styles.contentContainer}>


          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => setCameraVisible(true)}>
              <Text style={styles.buttonText}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={pickImage}>
              <Text style={styles.buttonText}>Pick from Gallery</Text>
            </TouchableOpacity>
          </View>

          {image && (
            <View style={styles.imageContainer}>
              <Image source={{ uri: image }} style={styles.image} />
            </View>
          )}

          {loading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#0000ff" />
              <Text style={styles.loadingText}>Analyzing image with Gemini AI...</Text>
            </View>
          )}

          {result && (
            <View style={styles.resultContainer}>
              <Text style={styles.resultTitle}>Analysis Result:</Text>
              <Text style={styles.resultText}>{result}</Text>
            </View>
          )}
        </ScrollView>
      )}
      <NavigationBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },button: {
    backgroundColor: '#8B2936',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 3,
    width: '45%',
    alignItems: 'center', // Centers horizontally
    justifyContent: 'center', // Centers vertically
    marginTop: 250,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center', // Ensure text is centered if it wraps (optional but good practice)
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  loadingContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  resultContainer: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  resultText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
  },
});
