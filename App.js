import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native'; // Import ImageBackground

import LoadingScreen from './components/LoadingScreen';
import WelcomeScreen from './components/WelcomeScreen'; // Import WelcomeScreen

export default function App() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false); // State to track when the loading is complete

  useEffect(() => {
    // After 1.5 seconds (to simulate delay after loading animation), show WelcomeScreen
    setTimeout(() => {
      setIsLoadingComplete(true);
    }, 4000); // Delay after LoadingScreen animation
  }, []);

  return (
    <View style={styles.container}>
      {/* Render LoadingScreen until the loading is complete */}
      {!isLoadingComplete ? (
        <LoadingScreen />
      ) : (
        // Once loading is complete, show WelcomeScreen
        <WelcomeScreen />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Ensure the container has a white background
  },
});