// src/components/WelcomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, Image, Dimensions } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get('window'); // Get the screen dimensions

  return (
    <View style={[styles.container, { width, height }]}>  {/* Set container to take full screen size */}
      <ImageBackground 
        source={require('../assets/welcomeBg.jpeg')} // Your background image
        style={[styles.background, { width, height }]} // Set background to full screen
      >
        <View style={styles.content}>
          {/* Text Container */}
          <View style={styles.textContainer}>
            <Text style={styles.title}>Welcome to Our App!</Text>
            <Text style={styles.subtitle}>We are excited to have you here.</Text>
            <Button 
              title="Get Started"
              onPress={() => navigation.navigate('Home')} // Navigate to the "Home" screen after tapping the button
            />
          </View>

          {/* Avatar Image */}
          <Image 
            source={require('../assets/welcomeAvatar.png')} // Your avatar image
            style={styles.avatar}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container takes up the entire screen
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  background: {
    flex: 1, // Ensure the background fills the entire screen
    justifyContent: 'center', // Center content vertically inside the background
    alignItems: 'center', // Center content horizontally inside the background
    resizeMode: 'cover', // Make the image cover the entire screen while maintaining its aspect ratio
  },
  content: {
    flexDirection: 'row', // Layout the avatar and text horizontally
    justifyContent: 'flex-start', // Align items to the left
    alignItems: 'center', // Align items vertically in the center
    paddingHorizontal: 20, // Add some horizontal padding for spacing
    marginLeft: 40, // Move both the avatar and text more to the left
    height: '80%', // Increase the overall height for the content
  },
  avatar: {
    width: 220,  // Decrease the width of the avatar (from 250 to 220)
    height: 450, // Keep the height of the avatar high
    resizeMode: 'contain', // Ensure the image does not stretch
    borderRadius: 110, // Keep it circular with a radius half of the width
    marginRight: 10, // Reduce the margin to make the avatar closer to the text
  },
  textContainer: {
    justifyContent: 'center', // Center the text vertically
    alignItems: 'flex-start', // Align text to the left
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // White background with transparency
    paddingLeft: '1%', // Apply padding only to the left side
    paddingRight: 0, // Remove right padding
    borderRadius: 10, // Optional: Add rounded corners to the text container
    maxWidth: '50%', // Increased width of the text container (from 45% to 50%)
    marginLeft: 10, // Reduce the margin to make the text container closer to the avatar
    height: '50%', // Keep the height of the text container to maintain balanced layout
  },
  title: {
    fontSize: 16, // Smaller title font size
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10, // Adjust margin for better spacing
  },
  subtitle: {
    fontSize: 12, // Smaller subtitle font size
    color: '#666',
    marginBottom: 20, // Adjust margin for better spacing
    textAlign: 'left', // Align subtitle text to the left
  },
});

export default WelcomeScreen;