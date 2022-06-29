import { Container, Text, Image } from '@nextui-org/react'

export const NoFavorites = () => {
  return (
    <Container display='flex' justify='center' alignItems='center' css={{ width: '100%', height: 'calc(100vh - 100px)' }} direction='column'>
			<Text h1>No Favorites</Text>
			<Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg' width={250} height={250} />
    </Container>
  )
}
