import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'
import style from './style'
import Button from '../../components/Button'
export default function Filmes() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Text style={style.title}>Meus filmes favoritos</Text>
      <Text>Castelo Animado</Text>
      <Text>O castelo animado é um longa animado do diretor Hayao Miyazaki que retrata a história de Sophie, uma garota que é transformada em uma mulher de 90 anos pela maldição de uma bruxa, e Howl (Uivo), um lindo feiticeiro que está envolvido em meio a uma guerra com o país vizinho.</Text>
      <Text>A viagem de Chihiro</Text>
      <Text>
        A protagonista, Chihiro, é uma jovem garota que está de mudança com seus pais. A caminho da nova casa, eles atravessam um túnel e ficam presos num outro mundo onde coisas estranhas acontecem. Para encontrar uma saída e retornar ao seu mundo humano, ela enfrenta diversos desafios.</Text>
      <Button screen={"Home"} name={"Volte para a página inicial!"} />
      <Button screen={"HobbiesIsa"} name={"Veja meus hobbies!"} />
    </View>
  )
}