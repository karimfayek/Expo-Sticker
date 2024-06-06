import { View, StyleSheet } from 'react-native';

const Column = ({ children, size, style }) => {
  const columnStyle = {
    flex: size ? size : 1,
    paddingHorizontal: 10,
  };

  return <View style={[columnStyle, style]}>{children}</View>;
};



export default Column;
