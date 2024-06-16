import React, { useRef } from 'react';
import { View, Text, StyleSheet, ImageBackground, Animated, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const RestaurantScreen = ({ navigation }) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 250],
    outputRange: [250, 70],
    extrapolate: 'clamp',
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 250],
    outputRange: [1, -10],
    extrapolate: 'clamp',
  });

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 250],
    outputRange: [0, 15],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.headerContainer, { height: headerHeight }]}>
        <ImageBackground
          source={require('../assets/images/shawrma.jpg')} // Replace with your background image
          style={styles.header}
        >
          <Animated.View style={[styles.headerOverlay, { opacity: 1 }]}>
            <View style={styles.backButtonContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons name="arrow-back" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <Text style={{color:'#fff'}}>test</Text>
          </Animated.View>
          
       
        </ImageBackground>
        
      </Animated.View>
      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={{ paddingTop: 250 }} // Ensure content starts below the header
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        <View style={styles.content}>
          <Text>
            Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...
            Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...
            Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...
            Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...
            Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...
            Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...
            Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...
            Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...
            Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...

            Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...
            Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...
            Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...

            Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...
            Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...
            Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...
            Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...


          </Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    zIndex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  headerOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  backButtonContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  restaurantNameText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});

export default RestaurantScreen;
