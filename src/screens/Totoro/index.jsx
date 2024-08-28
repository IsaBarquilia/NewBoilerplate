import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'

export default function Totoro() {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Totoro page</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Back to Home</Text>
        </TouchableOpacity>
    </View>
  )
}