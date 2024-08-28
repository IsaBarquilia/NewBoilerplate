import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'

import style from './style'


export default function Home() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Text style={style.title}>Home page</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Totoro')
      } style={style.button}
      >
        <Text>Go to Totoro</Text>
      </TouchableOpacity>
    </View>
  )
}