import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import Button from '../../components/Button'
import style from './style'
import Title from '../../components/Title'

export default function Home() {

  return (
    <View style={style.container}>
      <Title title={"Home page"} />
      <Button screen={"Totoro"} name={"Go to Totoro"}/>
      <Button screen={"Ghibli"} name={"Go to Ghibli"}/>
    </View>
  )
}