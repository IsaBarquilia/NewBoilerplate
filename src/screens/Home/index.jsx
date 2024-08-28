import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'

export default function Home() {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Home page</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Totoro')}>
        <Text>Go to Totoro</Text>
      </TouchableOpacity>
    </View>
  )
}