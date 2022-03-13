import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const handlePress = () => alert('Pressed')
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello World. A very very long line that is used to check the number of lines parameter of the text property in react native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
