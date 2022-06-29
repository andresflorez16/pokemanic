import { useState } from 'react'
import { useRouter } from 'next/router'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import confetti from 'canvas-confetti'
import { Pokemon } from '../../interfaces'
import { localFavorites, getPokemonInfo } from '../../utils'
import { Layout } from '../../components/layouts'
import { Grid, Card, Text, Button, Container, Image } from '@nextui-org/react'

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const [favorites, setFavorites] = useState(localFavorites.isFavorites(pokemon.id))

  const router = useRouter()

  const handleFavorites = () => {
    localFavorites.toggleFavorites(pokemon.id)
    setFavorites(!favorites)

    if (favorites) return

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    })

    router.push('/favorites')
  }

  return (
    <Layout title={`Pokemanic | ${pokemon.name}`}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ p: 30 }}>
            <Card.Body>
              <Card.Image src={pokemon.sprites?.other?.dream_world.front_default || pokemon.sprites.front_default} width="100%" height={200} alt={pokemon.name}/>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card isHoverable>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text size={30} transform='capitalize'>{pokemon.name}</Text>
              <Button
                color='gradient'
                ghost={!favorites}
                onClick={handleFavorites}
                size='sm'
              >
                {
                  favorites ? 'Favorites' : 'Add to fav'
                }
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction='row' display='flex'>
                <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100}/>
                <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100}/>
                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100}/>
                <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100}/>
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const paramsArr = [...Array(151)].map((el, index) => `${index  + 1}`)
  return {
    paths: paramsArr.map(id => ({ params: { id } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }

  return {
    props: {
      pokemon: await getPokemonInfo(id)
    }
  }
}

export default PokemonPage
