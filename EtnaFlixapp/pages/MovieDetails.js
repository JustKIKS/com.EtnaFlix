// MY IMPORT
import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { getMovieTrailers } from '../api/film/request'
import { useEffect, useState } from 'react'
import YoutubePlayer from 'react-native-youtube-iframe'

//MY MOVIEDETAILS FUNCTION
export default function MovieDetails({ route }) {
  // Get the movie object passed from the previous screen
  const { movie } = route.params
  // State the YouTube key of the movie trailer, initially empty
  const [trailerKey, setTrailerKey] = useState(null)

  useEffect(() => {
    const fetchTrailer = async () => {
      const trailers = await getMovieTrailers(movie.id) // call the API to get trailers
      if (trailers.length > 0) {
        // take the FIRST key and put it in the trailerKey
        setTrailerKey(trailers[0].key)
      }
    }
    //call the function
    fetchTrailer()
  })

  return (
    <LinearGradient
      colors={['#121212', '#7a52f1', '#000000']}
      locations={[0, 0.5, 1]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <ScrollView style={styles.container}>
        <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} style={styles.poster} />
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.overview}>{movie.overview}</Text>
        <Text style={styles.info}>note : {movie.vote_average} / 10</Text>
        <Text style={styles.info}>date de sortie : {movie.release_date}</Text>

        {trailerKey && (
          <View style={{ marginTop: 20, borderRadius: 10, overflow: 'hidden' }}>
            <YoutubePlayer height={230} play={false} videoId={trailerKey} />
          </View>
        )}
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  poster: { width: '100%', height: 500, borderRadius: 10, marginBottom: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 10, textAlign: 'center' },
  overview: { color: '#ccc', fontSize: 16, marginBottom: 15, lineHeight: 22 },
  info: { color: '#aaa', fontSize: 14, marginBottom: 5, textAlign: 'center' },
  trailerButton: {
    marginTop: 20,
    paddingVertical: 12,
    backgroundColor: '#7a52f1',
    borderRadius: 8,
    alignItems: 'center'
  },
  trailerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
})
