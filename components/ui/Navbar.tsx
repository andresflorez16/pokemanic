import { FC } from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import { useTheme, Text, Spacer, Link } from '@nextui-org/react'

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
			<NextLink href='/'>
				<Link css={{ display: 'flex', alignItems: 'center' }} >
					<Image src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'} alt='Logo' width={70} height={70}/>
					<Text color="white" h1>P</Text>
					<Text color="white" h2>okemanic</Text>
				</Link>
			</NextLink>
			<Spacer css={{ flex: 1 }} />
			<NextLink href='/favorites'>
				<Link>
					<Text color="white" h4 margin='0 25px 0 0'>Favorites</Text>
				</Link>
			</NextLink>
    </div>
  )
}	
