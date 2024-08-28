import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'
import style from './style'
import Button from '../../components/Button'
export default function FilmesLu() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Text style={style.title}>Meus filmes favoritos</Text>
      <Text style={style.text}>O Rei do show</Text>
      <Text>Barnum (Hugh Jackman), showman empreendedor conhecido como `Príncipe das falcatruas´. Entre suas criações estão um museu de curiosidades e um circo próprio, em que eram apresentados animais, freaks e fraudes de todo tipo.</Text>
      <Text style={style.text}>Barbie</Text>
      <Text>Barbie é uma franquia de mídia americana que é uma linha de bonecas produzida pela empresa americana de brinquedos Mattel e lançada em março de 1959.</Text>
      <Button screen={"Home"} name={"Volte para a página inicial!"} />
      <Button screen={"HobbiesLu"} name={"Veja meus hobbies!"} />
    </View>
  )
}