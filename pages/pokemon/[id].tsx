import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { pokeApi } from '../../api'
import { SmallPokemon } from '../../interfaces'
import { Layout } from '../../components/layouts'

interface Props {
  name: string,
  id: string
}

const PokemonPage: NextPage<Props> = ({ name, id }) => {
  return (
    <Layout title='Pokemanic | Pokemon'>
      <h1>{id} - {name}</h1>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const paramsArr = [...Array(151)].map((val, index) => `${index + 1}`)
  return {
    paths: paramsArr.map(id => ({ params: { id } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = (ctx) => {

  return {
    props: {
      id: '1',
      name: 'Andrew'
    }
  }
}

export default PokemonPage
