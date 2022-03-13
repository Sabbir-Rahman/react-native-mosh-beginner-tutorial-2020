import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

export default function App() {
  const handlePress = () => alert('Pressed')
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React native
      </Text>
      <TouchableOpacity onPress={() => alert('Tapped')}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: 'https://picsum.photos/200/300'
          }}
        />
      </TouchableOpacity>
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
