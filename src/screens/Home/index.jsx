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

      <Button screen={"FilmesIsa"} name={"Veja os filmes favoritos da Isa"} />
      <Button screen={"HobbiesIsa"} name={"Veja os hobbies favoritos da Isa!"} />
      
      <Title title={"Luana Fassini"} />

      <Button screen={"FilmesLu"} name={"Veja os filmes favoritos da Lu"} />
      <Button screen={"HobbiesLu"} name={"Veja os hobbies favoritos da Lu!"} />
    </View>
  )
}