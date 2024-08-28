import { Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import TextButton from '../TextButton'
import style from './style'

const Button = ({ screen, name }) => {
  const navigation = useNavigation()
  return (

    <TouchableOpacity onPress={() => navigation.navigate(screen)}
      style={style.button}>
      <TextButton text={name}></TextButton>
    </TouchableOpacity>

  )
}

export default Button