// App.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InputDesign from './pages/InputDesign';
import Description from './pages/Shoretemple/Description';
import Hotels from './pages/Shoretemple/Hotels';
import Thingstodo from './pages/Shoretemple/Thingstodo';
import Chat_bot from './pages/Chat_bot';
import Image_Scanner from './pages/Image_Scanner';
import Natural from './pages/Categories/Natural';
import Cultural from './pages/Categories/Cultural';
import Mixed from './pages/Categories/Mixed';


const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        initialRouteName="Description"
        screenOptions={{
          headerShown: false, // Hide the default header since you have a custom Header component
          cardStyleInterpolator: ({ current }) => ({
            cardStyle: {
              opacity: current.progress, // Fade transition
            },
          }), // Smooth fade transition
        }}
      >
        <Stack.Screen name="Description" component={Description} />
        <Stack.Screen name="Hotels" component={Hotels} />
        <Stack.Screen name="Thingstodo" component={Thingstodo} />
        <Stack.Screen 
          name="Chatbot" 
          component={Chat_bot} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Image_Scanner" 
          component={Image_Scanner} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <InputDesign/> */}
      {/* <Natural/> */}
      {/* <Cultural/> */}
      {/* <Mixed/> */}
      {/* <InputDesign/> */}
      <Stack.Navigator
        initialRouteName="InputDesign" // Set InputDesign as the initial screen
        screenOptions={{
          headerShown: false, // Hide the default header since you have a custom Header component
          cardStyleInterpolator: ({ current }) => ({
            cardStyle: {
              opacity: current.progress, // Fade transition
            },
          }), // Smooth fade transition
        }}
      >
        {/* New navigation setup for Categories */}
        <Stack.Screen name="InputDesign" component={InputDesign} />
        <Stack.Screen name="Cultural" component={Cultural} />
        <Stack.Screen name="Natural" component={Natural} />
        <Stack.Screen name="Mixed" component={Mixed} />

        {/* Existing navigation setup (kept for later use) */}
        <Stack.Screen name="Description" component={Description} />
        <Stack.Screen name="Hotels" component={Hotels} />
        <Stack.Screen name="Thingstodo" component={Thingstodo} />
        <Stack.Screen 
          name="Chatbot" 
          component={Chat_bot} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Image_Scanner" 
          component={Image_Scanner} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
};
export default App;