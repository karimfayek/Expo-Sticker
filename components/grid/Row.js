import React from 'react';
import { View, StyleSheet } from 'react-native';

// Row Component
const Row = ({ children, style }) => {
  return <View style={[styles.row, style]}>{children}</View>;
};

// Column Component


// Styles
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -10,
  },
});

export default Row;
