import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, View, Text } from 'react-native'
import Button from '../../components/Button'
import style from './style'
import Title from '../../components/Title'

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <Title title={"Isabelle Barquilia"} />
      <Text>Meus filmes favoritos são: Castelo Animado E Viagem de Chihiro</Text>
      <Text>Meus hobbies favoritos são: Ler e assistir filmes</Text>
      <Button screen={"FilmesIsa"} name={"Veja os filmes favoritos da Isa"} />
      <Button screen={"HobbiesIsa"} name={"Veja os hobbies favoritos da Isa!"} />

      <Title title={"Luana Fassini"} />
      <Text>Meus filmes favoritos são: O rei do show e Barbie</Text>
      <Text>Meus hobbies favoritos são: Dançar e Fazer compras</Text>
      <Button screen={"FilmesLu"} name={"Veja os filmes favoritos da Lu"} />
      <Button screen={"HobbiesLu"} name={"Veja os hobbies favoritos da Lu!"} />
    </View>
  )
}