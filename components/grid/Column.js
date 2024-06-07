import { View } from 'react-native';

const Column = ({ children, size, style }) => {
  // Calculate the width percentage based on the size prop
  const width = (size / 12) * 100 + '%';
  const columnStyle = {
    width,
    paddingHorizontal: 10,
  };

  return <View style={[columnStyle, style]}>{children}</View>;
};



export default Column;
