import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const SellerRegistration = ({ navigation }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState(null);
  const [mapRegion, setMapRegion] = useState(null);
  const [distance, setDistance] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setLocation({ latitude, longitude });
      setMapRegion({
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
      setLoading(false);
    })();
  }, []);

  const handleRegionChange = (region) => {
    setLocation({ latitude: region.latitude, longitude: region.longitude });
  };

  const handleSubmit = () => {
    // Validate the form data
    if (!name || !location || !distance) {
      alert('Please fill out all fields');
      return;
    }

    // Send data to the backend
    const sellerData = {
      name,
      location,
      distance,
    };

    // TODO: Implement your backend logic here
    console.log('Seller Data:', sellerData);

    // Navigate back or to another screen
    navigation.navigate('Home');
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Register as a Seller</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginBottom: 8, padding: 8 }}
      />
      <MapView
        style={{ height: 300, marginBottom: 8 }}
        region={mapRegion}
        showsUserLocation
        followsUserLocation
        onRegionChange={handleRegionChange}
      >
        {location && (
          <Marker coordinate={location} />
        )}
      </MapView>
      <TextInput
        placeholder="Delivery Distance (km)"
        value={distance}
        onChangeText={setDistance}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 8, padding: 8 }}
      />
      <Button title="Register" onPress={handleSubmit} />
    </View>
  );
};

export default SellerRegistration;