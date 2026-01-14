// MY IMPORT
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Card from '../components/Card/Card'

// MY REGISTER FUNCTION
export default function Register({ navigation, setIsLogged }) {
  //my state for every input, at the start empty
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //my const to change my logg state to true
  const handleRegister = () => {
    setIsLogged(true)
  }

  return (
    <LinearGradient
      colors={['#331a7d', '#7a52f1', '#331a7d']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <Card />
      <Text style={styles.title}>Créer un compte Etna Flix !</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholderTextColor="#ddd"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#ddd"
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'rgba(255,255,255,0.3)' }]}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={[styles.buttonText, { color: '#fff' }]}>Se connecter</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 20,
    color: 'white',
    marginBottom: 50,
    fontFamily: 'Roboto_400Regular'
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.15)',
    color: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3
  },

  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5
  },
  buttonText: {
    color: '#8157ff',
    fontWeight: 'bold',
    fontSize: 16
  }
})
