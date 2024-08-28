import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'
import Button from '../../components/Button'
import style from './style'
import Title from '../../components/Title'


export default function Home() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Title title={"Home page"} />
      <Button screen={"Totoro"} name={"Go to Totoro"}/>
    </View>
  )
}