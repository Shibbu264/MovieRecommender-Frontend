import Image from 'next/image'
import { Inter } from 'next/font/google'
import MovieRecommender from './Recommender'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <MovieRecommender/>
  )
}
