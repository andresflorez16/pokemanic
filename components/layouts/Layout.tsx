import { FC, ReactNode } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui'

interface Props {
	children: ReactNode,
	title?: string
}

const originPath = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<Props> = ({ children, title }) => {
  return (
		<>
			<Head>
				<title>{title || 'Pokemanic App'}</title>
				<meta name='author' content="Andres Florez" />
				<meta name='description' content="Website to pokemanics" />

				<meta property="og:title" content={`About ${title}`} />
				<meta property="og:description" content={`A Website for Pokemanics, ${title}`} />
				<meta property="og:image" content={`${originPath}/img/banner.png`} />
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
