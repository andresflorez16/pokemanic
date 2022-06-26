import { NextPage, GetStaticProps } from 'next'
import { Grid } from '@nextui-org/react'
import { pokeApi } from '../api'
import { Layout } from '../components/layouts'
import { PokemonCard } from '../components/pokemon'
import { PokemonListResp, SmallPokemon } from '../interfaces'

type Props = {
  pokemons: SmallPokemon[],
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Pokemanic | Home'>
      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon}/>
          ))
        }
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResp>('/pokemon?limit=151')

  const pokemons: SmallPokemon[] = data.results.map(({ name, url }) => {
    const id = url.split('/').filter(el => el).pop()
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
    return { name, url, id, image }
  })

  return { props: { pokemons } }
}

export default Home
