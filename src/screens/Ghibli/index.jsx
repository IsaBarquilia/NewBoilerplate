import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'
import Button from '../../components/Button'
import style from './style'
import Title from '../../components/Title'


export default function Ghibli() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Title title={"Ghibli page"} />
      <Button screen={"Home"} name={"Go to Home"}/>
      <Button screen={"Totoro"} name={"Go to Totoro"}/>
    </View>
  )
}