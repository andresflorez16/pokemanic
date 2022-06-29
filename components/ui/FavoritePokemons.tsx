import { FC } from 'react'
import { Grid } from '@nextui-org/react'
import { FavoriteCardPokemons } from './FavoriteCardPokemons'

interface Props {
	pokemons: number[]
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container justify='flex-start' direction='row' gap={2}>
      {
        pokemons.map(id => (
          <FavoriteCardPokemons key={id} id={id}/>
        ))
      }
    </Grid.Container>
  )
}
