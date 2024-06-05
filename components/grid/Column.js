import { View, StyleSheet } from 'react-native';

const Column = ({ children, size, style }) => {
  const columnStyle = {
    flex: size,
    paddingHorizontal: 10,
  };

  return <View style={[columnStyle, style]}>{children}</View>;
};

Column.defaultProps = {
  size: 1,
};

export default Column;
