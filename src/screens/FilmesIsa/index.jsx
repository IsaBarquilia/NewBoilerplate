import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'
import style from './style'
import Button from '../../components/Button'
export default function Filmes() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Text style={style.title}>Filmes page</Text>
      <Button screen={"Home"} name={"Volte para a página inicial!"}/>
      <Button screen={"Hobbies"} name={"Veja nossos hobbies!"}/>
    </View>
  )
}