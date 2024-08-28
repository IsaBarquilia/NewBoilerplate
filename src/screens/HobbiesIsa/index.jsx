import { useNavigation } from '@react-navigation/native'
import { View} from 'react-native'
import Button from '../../components/Button'
import style from './style'
import Title from '../../components/Title'


export default function Hobbies() {

  const navigation = useNavigation()

  return (
    <View style={style.container}>
      <Title title={"Hobbies page"} />
      <Text> Meus hobbies:</Text>
      <Text></Text>
      <Button screen={"Home"} name={"Volte para a página inicial"}/>
      <Button screen={"FilmesIsa"} name={"Veja meus filmes favoritos"}/>
    </View>
  )
}