import { View, Text } from 'react-native'
import React from 'react'
import style from '../Button/style'
const Title = ({title}) => {
  return (
    <View>
      <Text style={style.title}>{title}</Text>
    </View>
  )
}

export default Title