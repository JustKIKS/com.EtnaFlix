// MY IMPORT
import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native'
import Background from '../assets/bg.png'

//MY FAV FUNCTION
export default function List() {
  return (
    <ImageBackground source={Background} style={{ flex: 1 }} resizeMode="cover">
      <View style={styles.container}>
        <Image source={require('../assets/big.jpeg')} style={styles.image} />
        <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 20, color: 'white', marginTop: 14 }}>
          ❤️❤️ C'est toi mon Favoris ❤️❤️
        </Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 200,
    height: 200
  }
})
