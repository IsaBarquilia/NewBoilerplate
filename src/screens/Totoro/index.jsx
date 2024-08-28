import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'
import style from './style'

export default function Totoro() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Text style={style.title}>Totoro page</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}
        style={style.button}>
        <Text>Back to Home</Text>
        </TouchableOpacity>
    </View>
  )
}