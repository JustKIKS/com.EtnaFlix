// MY IMPORT
import * as React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Button, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card/Card'
import LoginForm from '../components/Auth/LoginForm'

//MY LOGIN FUNCTION
export default function Login({ navigation, setIsLogged }) {
  return (
    <LinearGradient
      colors={['#331a7d', '#7a52f1', '#331a7d']} // Ton gradient
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <Card title="Bienvenue sur EtnaFlix !" />
      {/* //give to my login form the function to change the state of the log user when he press the connect button  */}
      <LoginForm setIsLogged={setIsLogged} />
      <Button
        title="S'inscrire"
        onPress={() => {
          navigation.navigate('Register')
        }}
      />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
