import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
  Alert
} from 'react-native'

export default function App() {
  const handlePress = () => alert('Pressed')
  return (
    <View style={styles.container}>
      <Button
        color='dodgerblue'
        title='Click me'
        onPress={() =>
          // Alert.alert('My title', 'My Message', [
          //   { text: 'Yes', onPress: () => console.log('Yes') },
          //   { text: 'No' }
          // ])
          Alert.prompt('My message', 'My title', text => console.log(text))
        }
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
