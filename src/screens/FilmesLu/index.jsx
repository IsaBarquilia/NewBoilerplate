import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'
import style from './style'
import Button from '../../components/Button'
export default function FilmesLu() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Text style={style.title}>Filmes page</Text>
      
    </View>
  )
}