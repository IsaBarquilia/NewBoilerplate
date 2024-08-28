import { View, Text } from 'react-native'
import React from 'react'
import style from '../Button/style'

const TextButton = ({text}) => {
  return (
    <View>
      <Text style={style.TextButton}>{text}</Text>
    </View>
  )
}

export default TextButton