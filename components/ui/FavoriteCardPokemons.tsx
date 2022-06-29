import { FC } from 'react'
import { useRouter } from 'next/router'
import { Grid, Card } from '@nextui-org/react'

interface Props {
	id: number
}

export const FavoriteCardPokemons: FC<Props> = ({ id }) => {

  const router = useRouter()
  const handleClick = () => router.push(`/pokemon/${id}`)

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable onClick={handleClick}>
        <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} width='100%' height={150} />
      </Card>
    </Grid>
  )
}
