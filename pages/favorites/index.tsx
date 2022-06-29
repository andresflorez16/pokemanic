import { useState, useEffect } from 'react'
import { NextPage } from 'next'
import { localFavorites } from '../../utils'
import { Layout } from '../../components/layouts'
import { NoFavorites, FavoritePokemons } from '../../components/ui'

const Favorites: NextPage = () => {
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    setFavorites( localFavorites.favoritesPokemons() )
  }, [])

  
  return (
    <Layout title='Pokemanic | Favorites'>
      {
        favorites.length ? <FavoritePokemons pokemons={favorites} /> : <NoFavorites />
      }
    </Layout>
  )
}

export default Favorites
