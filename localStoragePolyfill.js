import AsyncStorage from '@react-native-async-storage/async-storage';

const asyncStoragePolyfill = {
  getItem: async (key) => await AsyncStorage.getItem(key),
  setItem: async (key, value) => await AsyncStorage.setItem(key, value),
  removeItem: async (key) => await AsyncStorage.removeItem(key),
  clear: async () => await AsyncStorage.clear(),
  length: async () => {
    const keys = await AsyncStorage.getAllKeys();
    return keys.length;
  },
  key: async (index) => {
    const keys = await AsyncStorage.getAllKeys();
    return keys[index];
  }
};

global.asyncStoragePolyfill = asyncStoragePolyfill;
