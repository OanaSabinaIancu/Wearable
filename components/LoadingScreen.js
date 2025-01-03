import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, View, Animated, Easing, Image, Dimensions } from 'react-native';

const LoadingScreen = () => {
  const { width, height } = Dimensions.get('window');

  const leftDoorAnim = useRef(new Animated.Value(0)).current;
  const rightDoorAnim = useRef(new Animated.Value(0)).current;
  
  const [startAnimation, setStartAnimation] = useState(false); // State to trigger door animation

  useEffect(() => {
    // Show the background for 2 seconds before starting the animation
    const timer = setTimeout(() => {
      setStartAnimation(true); // After 2 seconds, start the door animation
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  useEffect(() => {
    if (startAnimation) {
      // When ready to start the animation, trigger door opening animation
      Animated.parallel([
        Animated.timing(leftDoorAnim, {
          toValue: -width / 2, // Move the left door completely off the screen
          duration: 1500,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(rightDoorAnim, {
          toValue: width / 2, // Move the right door completely off the screen
          duration: 1500,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [startAnimation, width]);

  return (
    <View style={styles.container}>
      <View style={[styles.closetContainer, { width, height }]}>
        {/* Background Image: Rendered immediately before the animation */}
        <Image source={require('../assets/loadingCloset.png')} style={styles.closetImage} />

        {/* Left Door: Will animate later */}
        <Animated.Image
          source={require('../assets/leftDoorCloset.png')}
          style={[
            styles.doorImage,
            styles.leftDoor,
            { transform: [{ translateX: leftDoorAnim }] },
          ]}
        />
        
        {/* Right Door: Will animate later */}
        <Animated.Image
          source={require('../assets/rightDoorCloset.png')}
          style={[
            styles.doorImage,
            styles.rightDoor,
            { transform: [{ translateX: rightDoorAnim }] },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Ensure container has no background to show the image properly
  },
  closetContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  doorImage: {
    position: 'absolute',
    width: '50%', // Each door covers exactly half the screen width
    height: '100%',
    resizeMode: 'stretch', // Ensures the image stretches to fit
  },
  leftDoor: {
    left: -1, // Slight overlap to prevent white space
  },
  rightDoor: {
    right: -1, // Slight overlap to prevent white space
  },
  closetImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Ensure the image covers the full screen
  },
});

export default LoadingScreen;