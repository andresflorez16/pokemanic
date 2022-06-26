import { FC } from 'react'
import Image from 'next/image'
import { useTheme, Text, Spacer } from '@nextui-org/react'

export const Navbar: FC = () => {
	const { theme } = useTheme()

  return (
		<div style={{
			display: 'flex',
			width: '100%',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'start',
			padding: '5px 0',
			backgroundColor: theme?.colors.gray50.value
		}}>
			<Image src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'} alt='Logo' width={70} height={70}/>
			<Text color="white" h1>P</Text>
			<Text color="white" h2>okemanic</Text>
			<Spacer css={{ flex: 1 }} />
			<Text color="white">Favoritos</Text>

    </div>
  )
}	
