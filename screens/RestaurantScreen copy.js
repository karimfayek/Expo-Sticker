import React, { useRef } from 'react';
import { View, Text, StyleSheet, ImageBackground, Animated, TouchableOpacity,FlatList, Image } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
const DATA = [
  {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Trending',
  },
  {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Rating 4.0 +',
  },
  {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Free Delivery',
  }, {
      id: '58694a0f-3da1-471f-bd96-145571e2asda',
      title: 'Third Item',
  }, {
      id: '58694a0f-3da1-471f-bd96-145571e29cve',
      title: 'Third Item',
  }, {
      id: '58694a0f-3da1-471f-bd96-145571e29axf',
      title: 'Third Item',
  },
];

const Filterbutton = ({ title, icon, onPress }) => (

  <View style={{
      flex: 1,
      marginLeft: 10,
      padding: 10,
      marginTop: 20,
      marginBottom: 20,
      borderRadius: 5, borderWidth: 1, borderColor: 'gray'

  }}>
      <TouchableOpacity style={{ color: 'gray', flexDirection: 'row', alignItems: 'center' }} onPress={onPress}>
          <Text>{title}</Text>
          {icon && <AntDesign name={icon} size={10} color="black" style={{ marginLeft: 7 }} />}
      </TouchableOpacity>
  </View>


)
const RestaurantScreen = ({ navigation }) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 250],
    outputRange: [250, 70],
    extrapolate: 'clamp',
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 250],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 250],
    outputRange: [0, 25],
    extrapolate: 'clamp',
  });
  const restaurantNameFontSize = scrollY.interpolate({
    inputRange: [0, 250],
    outputRange: [24, 16],
    extrapolate: 'clamp',
  });
  const filterButtonTranslateY = scrollY.interpolate({
    inputRange: [0, 250],
    outputRange: [0, 100],
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
            <Animated.View style={[styles.backButtonContainer, { opacity: 1 }]}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons name="arrow-back" size={24} color="white" />
              </TouchableOpacity>
            </Animated.View>
            <View style={styles.restaurantInfo}>
              <Animated.View style={[styles.restaurantName, { transform: [{ translateY: headerTranslateY }] }]}>
              <Animated.Text style={[styles.restaurantNameText, { fontSize: restaurantNameFontSize }]}>Restaurant Name</Animated.Text>
              </Animated.View>
              <Animated.View style={[styles.restaurantDescription, { opacity: headerOpacity }]}>
                <Text style={styles.restaurantDescriptionText}>Shawrma , burger , sandwitch, beef</Text>
                
              </Animated.View>
              
            </View>
           
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
        <Animated.View style={[styles.flatListContainer, { transform: [{ translateY: filterButtonTranslateY }] }]}>
          <FlatList
            data={DATA}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <Filterbutton title={item.title} icon={item.icon} />}
            keyExtractor={item => item.id}
          />
        </Animated.View>
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
  restaurantInfo: {
    alignItems: 'center',
  },
  restaurantName: {
    position: 'absolute',
    bottom: 10,
  },
  restaurantNameText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  restaurantDescription: {
    marginTop: 10,
  },
  restaurantDescriptionText: {
    color: 'white',
    fontSize: 14,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  flatListContainer: {
    marginTop: -200, // Adjust based on the position you want the filter buttons to stick
    zIndex: 1,
    backgroundColor: 'white', // Adjust the background color if needed
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 5,
    backgroundColor: '#f0f0f0',
  },
  item: {
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 12,

},
flatListContainer: {
  marginTop: 10, // Adjust based on the position you want the filter buttons to stick
  zIndex: 1,
  backgroundColor: 'white', // Adjust the background color if needed
},
});

export default RestaurantScreen;
