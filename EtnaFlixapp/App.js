// MY IMPORT
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native'
import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from './pages/login'
import Register from './pages/register'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './pages/home'
import List from './pages/list'
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import MovieDetails from './pages/MovieDetails'
import { Ionicons } from '@expo/vector-icons'

//Configuration of the navigation
//stack
const AuthStack = createNativeStackNavigator()
//onglet
const AppStack = createBottomTabNavigator()
//main stack for the app
const RootStack = createNativeStackNavigator()

//MY FONTS
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  const Tabs = () => (
    <AppStack.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopWidth: 0,
          height: 80
        },
        headerStyle: { backgroundColor: '#000' },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          fontFamily: 'Roboto_700Bold'
        },
        headerRight: () => (
          <TouchableOpacity onPress={() => setIsLogged(false)} style={{ marginRight: 15 }}>
            <Ionicons name="log-out-outline" size={26} color="white" />
          </TouchableOpacity>
        )
      }}
    >
      {/* //create my home and fav onglet */}
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Bienvenue sur EtnaFlix',

          headerStyle: {
            backgroundColor: '#000'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            fontFamily: 'Roboto_700Bold'
          },
          tabBarLabel: 'Accueil',
          tabBarIcon: function ({ color, size }) {
            return <Ionicons name="home" size={size} color={color} />
          }
        }}
      />
      <AppStack.Screen
        name="Favoris"
        component={List}
        options={{
          headerStyle: {
            backgroundColor: '#000'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            fontFamily: 'Roboto_700Bold'
          },

          tabBarLabel: 'Favoris',
          tabBarIcon: function ({ color, size }) {
            return <Ionicons name="heart" size={size} color={color} />
          }
        }}
      />
    </AppStack.Navigator>
  )

  //to change the value of islogged if user is log
  const [isLogged, setIsLogged] = React.useState(false)

  return (
    <NavigationContainer>
      {/* // if the user is log show that */}
      {isLogged ? (
        <RootStack.Navigator>
          <RootStack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
          <RootStack.Screen
            name="MovieDetails"
            component={MovieDetails}
            options={{
              headerStyle: {
                backgroundColor: '#000'
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
                fontFamily: 'Roboto_700Bold'
              }
            }}
          />
        </RootStack.Navigator>
      ) : (
        <AuthStack.Navigator>
          <AuthStack.Screen
            name="Login"
            children={(props) => <Login {...props} setIsLogged={setIsLogged} />}
            options={{ headerShown: false }}
          />
          <AuthStack.Screen
            name="Register"
            children={(props) => <Register {...props} setIsLogged={setIsLogged} />}
            options={{ headerShown: false }} // ← et ici
          />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
