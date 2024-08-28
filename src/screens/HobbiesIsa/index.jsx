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
      <Button screen={"Home"} name={"Volte para a página inicial"}/>
      <Button screen={"Filmes"} name={"Veja nossos filmes favoritos"}/>
    </View>
  )
}