import { FC } from 'react'
import { useRouter } from 'next/router'
import { SmallPokemon } from '../../interfaces'
import { Grid, Card, Text, Row } from '@nextui-org/react'

interface Props {
  pokemon: SmallPokemon,
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter()

  const handleClick = () => router.push(`/name/${pokemon.name}`)
  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable onClick={handleClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Header>
            <Text size="100%" transform='capitalize'>{pokemon.name}</Text>
          </Card.Header>
          <Card.Image src={pokemon.image} alt='Pokemon image' width="100%" height={70} />
          <Card.Footer>
            <Row justify='flex-start'>
              <Text>#{pokemon.id}</Text>
            </Row>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Grid>
  )
}
