import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import any icons you need
import HomeScreen from '../screens/HomeScreen';
import Cart from '../screens/Cart';

const Tab = createBottomTabNavigator();

const MyBottomNavigation  = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false}}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ 
          tabBarLabel: 'Home', 
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Cart" 
        component={Cart} 
        options={{ 
          tabBarLabel: 'Cart', 
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
      />
      {/* Add other tabs here */}
    </Tab.Navigator>
  );
};

export default MyBottomNavigation ;
