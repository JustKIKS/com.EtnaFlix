// MY IMPORT
import React, { useEffect, useState } from 'react'
import { TextInput, ImageBackground, ScrollView, View, Text, FlatList, Image, StyleSheet } from 'react-native'
import { getMovies } from '../api/film/request'
import Background from '../assets/bg.png'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'

// MY HOME FUNCTION
export default function Home() {
  //my state for every categorie of film
  const [popular, setPopular] = useState([])
  const [topRated, setTopRated] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [nowPlaying, setNowPlaying] = useState([])
  const [search, setSearch] = useState('')

  // my naviguation const
  const navigation = useNavigation()

  //dl film and put it on popular by setpopular
  useEffect(() => {
    getMovies('popular').then(setPopular)
    getMovies('top_rated').then(setTopRated)
    getMovies('upcoming').then(setUpcoming)
    getMovies('now_playing').then(setNowPlaying)
  }, [])

  const filterMovies = (movies) => {
    //take the search of my user whit out space, if ! search rim return all my movies
    if (!search.trim()) return movies
    //Filter the movies array and return only the movies whose title includes the search text in lowercase
    return movies.filter((m) => m.title.toLowerCase().includes(search.toLowerCase()))
  }

  return (
    //my background canva with my logo
    <ImageBackground source={Background} style={{ flex: 1 }} resizeMode="cover">
      {/* //flexgrow to take all the space avalaible */}
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingVertical: 20 }}>
        <View style={{ alignItems: 'center', marginBottom: 10 }}>
          {/* my search input */}
          <TextInput
            style={styles.searchInput}
            placeholder="Rechercher un film..."
            placeholderTextColor="#aaa"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* //show the section only if the popular section have minimum 1 film */}
        {filterMovies(popular).length > 0 && (
          <>
            <Text style={styles.title}>💯​ Films Populaires 💯​</Text>
            <FlatList
              data={filterMovies(popular)}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              contentContainerStyle={{ paddingBottom: 20 }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.movieCard}
                  onPress={() => navigation.navigate('MovieDetails', { movie: item })}
                >
                  <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.poster} />
                  <Text style={styles.movieTitle}>{item.title}</Text>
                </TouchableOpacity>
              )}
            />
          </>
        )}
        {/* //show the section only if the toprated section have minimum 1 film */}
        {filterMovies(topRated).length > 0 && (
          <>
            <Text style={styles.title}>⭐​ Film les mieux notés ⭐​</Text>
            <FlatList
              data={filterMovies(topRated)}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              contentContainerStyle={{ paddingBottom: 20 }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.movieCard}
                  onPress={() => navigation.navigate('MovieDetails', { movie: item })}
                >
                  <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.poster} />
                  <Text style={styles.movieTitle}>{item.title}</Text>
                </TouchableOpacity>
              )}
            />
          </>
        )}
        {/* //show the section only if the upcoming section have minimum 1 film */}
        {filterMovies(upcoming).length > 0 && (
          <>
            <Text style={styles.title}>⌛​ Film bientôt disponible ⌛​</Text>
            <FlatList
              data={filterMovies(upcoming)}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              contentContainerStyle={{ paddingBottom: 20 }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.movieCard}
                  onPress={() => navigation.navigate('MovieDetails', { movie: item })}
                >
                  <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.poster} />
                  <Text style={styles.movieTitle}>{item.title}</Text>
                </TouchableOpacity>
              )}
            />
          </>
        )}
        {/* //show the section only if the nowplaying section have minimum 1 film */}
        {filterMovies(nowPlaying).length > 0 && (
          <>
            <Text style={styles.title}>🎬​ Films au Cinéma 🎬​</Text>
            <FlatList
              data={filterMovies(nowPlaying)}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              contentContainerStyle={{ paddingBottom: 20 }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.movieCard}
                  onPress={() => navigation.navigate('MovieDetails', { movie: item })}
                >
                  <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.poster} />
                  <Text style={styles.movieTitle}>{item.title}</Text>
                </TouchableOpacity>
              )}
            />
          </>
        )}
        {/* //if all of the section are empty after the search show no film for this search */}
        {filterMovies(popular).length === 0 &&
          filterMovies(topRated).length === 0 &&
          filterMovies(upcoming).length === 0 &&
          filterMovies(nowPlaying).length === 0 && (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', minHeight: 600 }}>
              <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center', marginTop: 40 }}>
                Aucun film ne correspond à ta recherche 😔
              </Text>
            </View>
          )}
      </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 10 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 35, marginTop: 10, color: '#fff', textAlign: 'center' },
  movieCard: { marginBottom: 20, alignItems: 'center', marginRight: 15 },
  poster: { width: 200, height: 300, borderRadius: 10 },
  movieTitle: { marginTop: 10, fontSize: 16, fontWeight: '500', textAlign: 'center', color: '#fff', width: 200 },
  searchInput: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: '#fff',
    borderRadius: 8,
    width: '90%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16
  }
})
