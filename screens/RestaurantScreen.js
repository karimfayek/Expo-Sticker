import React, { useRef } from 'react';
import { View, Text, StyleSheet, ImageBackground, Animated, ScrollView, FlatList } from 'react-native';
import { Appbar } from 'react-native-paper';

const DATA = [
  { id: '1', title: 'Filter 1', icon: 'filter-1' },
  { id: '2', title: 'Filter 2', icon: 'filter-2' },
  // Add more filter items here
];

const FilterButton = ({ title, icon }) => (
  <View style={styles.filterButton}>
    <Text>{title}</Text>
  </View>
);

const RestaurantScreen = ({ navigation }) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const appBarBackgroundColor = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: ['transparent', 'white'],
    extrapolate: 'clamp',
  });

  const appBarTitleOpacity = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const filterButtonTranslateY = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [0, -150],
    extrapolate: 'clamp',
  });

  return (
    <View style={{ flex: 1 }}>
      <Animated.View style={{ ...styles.appbarContainer, backgroundColor: appBarBackgroundColor }}>
        <Appbar.Header style={{ backgroundColor: 'transparent', justifyContent: 'space-between' }}>
          <Appbar.BackAction onPress={() => { navigation.navigate("Home") }} style={styles.appbarButton} />
          <Animated.View style={{ opacity: appBarTitleOpacity }}>
            <Appbar.Content title="Title" />
          </Animated.View>
          <View style={styles.appbarActions}>
            <Appbar.Action icon="calendar" onPress={() => { }} style={styles.appbarButton} />
            <Appbar.Action icon="magnify" onPress={() => { }} style={styles.appbarButton} />
          </View>
        </Appbar.Header>
      </Animated.View>

      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={{ paddingTop: 0 }} // Ensure content starts below the header
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <ImageBackground
          source={require('../assets/images/shawrma.jpg')}
          style={styles.imageBackground}
        >
          <View style={styles.descriptionContainer}>
            <Text>Shwram</Text>
            <Text>ShwramShwramShwramShwramShwramShwram</Text>
          </View>
        </ImageBackground>

        <View style={styles.content}>
          <FlatList
            data={DATA}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <FilterButton title={item.title} icon={item.icon} />}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.flatListContainer}
          />
          <Text> Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...Rest of the content goes here...
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
  appbarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  appbarButton: {
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  appbarActions: {
    flexDirection: 'row',
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -39,
    padding: 20,
    margin: 20,
    borderRadius: 5,
  },
  scrollView: {
    flex: 1,
  },
  imageBackground: {
    height: 300,
    marginBottom: 20,
  },
  flatListContainer: {
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  content: {
    padding: 20,
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
});

export default RestaurantScreen;
