import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen';

const FavoritesRoute = () => <Text>Favorites</Text>;
const ProfileRoute = () => <Text>Profile</Text>;

const MyBottomNavigation = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'favorites', title: 'Favorites', focusedIcon: 'heart' , unfocusedIcon: 'heart-outline'},
    { key: 'profile', title: 'Profile', focusedIcon: 'account' , unfocusedIcon: 'account-outline'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    favorites: FavoritesRoute,
    profile: ProfileRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyBottomNavigation;
