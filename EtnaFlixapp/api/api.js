// MY IMPORT
import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '28232743a47e8930a73e9ba4172cef59',
    language: 'fr-FR'
  }
})
