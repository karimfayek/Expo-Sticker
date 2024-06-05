import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'
import { I18nManager, Platform, Text , View} from 'react-native';
import { useEffect, useState } from 'react';
import i18n from './i18n'; 
import * as Font from 'expo-font';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import MyBottomNavigation from './components/MyBottomNavigation ';
const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  fonts: {
    ...DefaultTheme.fonts,
    default: {
      fontFamily: 'RB-Regular',
    },
  },
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
  I18nManager.allowRTL(true);
  I18nManager.forceRTL(true);
  i18n.locale = "ar";
}, []);
const loadFonts = async () => {
  await Font.loadAsync({
    'RB-Bold': require('./assets/fonts/RB-Bold.ttf'),
    'RB-Regular': require('./assets/fonts/RB-Regular.ttf'),
  });
  setFontsLoaded(true);
};

useEffect(() => {
  loadFonts();
}, []);

if (!fontsLoaded) {
  return <Text>App Loading ...</Text>;
}
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={MyBottomNavigation} />
          </Stack.Navigator>
          
      </NavigationContainer>
    </PaperProvider>
  );
}