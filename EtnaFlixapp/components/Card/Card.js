// MY IMPORT
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Logo from '../../assets/icon.png'

// my card components
export default function Card({ title }) {
  return (
    <View>
      <Image source={Logo} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 300
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontFamily: 'Roboto_400Regular'
  }
})
