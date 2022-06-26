import { FC, ReactNode } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui'

interface Props {
	children: ReactNode,
	title?: string
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
		<>
			<Head>
				<title>{title || 'Pokemanic App'}</title>
				<meta name='author' content="Andres Florez" />
				<meta name='description' content="Website to pokemanics" />
			</Head>
			<Navbar />
			<div style={{
				padding: '0 20px'
			}}>
				{children}
			</div>
		</>
  )
}
