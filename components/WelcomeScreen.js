import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, Dimensions } from 'react-native';
import { useFonts } from 'expo-font'; // Import useFonts from expo-font
import AppLoading from 'expo-app-loading'; // Import AppLoading to handle font loading

const WelcomeScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get('window'); // Get the screen dimensions

  // Load the custom font using useFonts
  const [fontsLoaded] = useFonts({
    'PlaywriteAU': require('../assets/fonts/PlaywriteAUSA-VariableFont_wght.ttf'), // Adjust path as necessary
  });

  // If fonts are not loaded yet, show AppLoading
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={[styles.container, { width, height }]}> {/* Set container to take full screen size */}
      <ImageBackground
        source={require('../assets/welcomeBg.jpeg')} // Your background image
        style={[styles.background, { width, height }]} // Set background to full screen
      >
        <View style={styles.content}> {/* Container for the avatar and message */}
          {/* Text Container */}
          <View style={styles.textContainer}>
            <Text style={[styles.title, { fontFamily: 'PlaywriteAU' }]}>
              Hello there!
              {"\n"}I am Lisa and I'm gonna help you create your own avatar.
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Home')} // Navigate to the "Home" screen after tapping the button
            >
              <Text style={[styles.buttonText, { fontFamily: 'PlaywriteAU' }]}>Let's get started!</Text>
            </TouchableOpacity>
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
    flexDirection: 'row', // Layout the text and avatar horizontally
    justifyContent: 'space-between', // Space out items across the screen
    alignItems: 'center', // Center items vertically
    width: '100%', // Take full screen width
    height: '100%', // Take full screen height
    paddingHorizontal: 20, // Add some horizontal padding for spacing
  },
  textContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background for readability
    padding: 20, // Padding for the text container
    borderRadius: 10, // Rounded corners for the text container
    width: '60%', // Increase text container width
    alignItems: 'flex-start', // Align text to the left
    marginRight: 'auto', // Move text container further to the left
  },
  title: {
    fontSize: 16, // Smaller title font size
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10, // Adjust margin for spacing
    textAlign: 'left', // Align text to the left
  },
  button: {
    backgroundColor: 'magenta', // Magenta button background
    borderRadius: 25, // Rounded border for the button
    paddingVertical: 10, // Vertical padding
    paddingHorizontal: 20, // Horizontal padding
    marginTop: 10, // Add spacing above the button
  },
  buttonText: {
    color: '#fff', // White text color
    fontSize: 14, // Slightly smaller button text size
    fontWeight: 'bold', // Bold text
    textAlign: 'center', // Center-align text
  },
  avatar: {
    width: 140, // Avatar width
    height: 350, // Avatar height
    resizeMode: 'contain', // Ensure the image does not stretch
  },
});

export default WelcomeScreen;