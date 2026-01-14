// MY IMPORT
import { api } from '../api'

// my get movie const
export const getMovies = async (type) => {
  try {
    const response = await api.get(`/movie/${type}`) //doing a api request and waiting the response before continue
    return response.data.results
  } catch (error) {
    console.error(`Erreur lors du chargement des films (${type}) :`, error)
    return []
  }
}
// my get trailer const
export const getMovieTrailers = async (movieId) => {
  try {
    const response = await api.get(`/movie/${movieId}/videos`)
    // only ytb trailer
    return response.data.results.filter((v) => v.type === 'Trailer' && v.site === 'YouTube') // array of video, and compare the type of it with trailer, and ytb
  } catch (error) {
    console.error(`Erreur lors du chargement des trailers du film ${movieId} :`, error)
    return []
  }
}

getMovies('popular')
getMovies('top_rated')
getMovies('upcoming')
getMovies('now_playing')
