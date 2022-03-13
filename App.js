import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button
} from 'react-native'

export default function App() {
  const handlePress = () => alert('Pressed')
  return (
    <View style={styles.container}>
      <Button
        color='dodgerblue'
        title='Click me'
        onPress={() => alert('Button cliked')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
