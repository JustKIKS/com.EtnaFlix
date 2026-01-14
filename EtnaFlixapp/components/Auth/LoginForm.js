// MY IMPORT
import * as React from 'react'
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native'

//my login form components
export default function LoginForm({ setIsLogged }) {
  // create my 2 state of my input text to update it at every change
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleLogin = () => {
    if (email && password) {
      setIsLogged(true)
    } else {
      alert('Veuillez remplir tous les champs')
    }
  }

  return (
    // mail input
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#ddd"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* // mdp input */}
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        placeholderTextColor="#ddd"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {/* // connect output */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    marginTop: 20
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    color: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
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
