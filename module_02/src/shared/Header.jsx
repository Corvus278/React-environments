import { hot } from 'react-hot-loader/root'
import * as React from 'react'

function HeaderComponent() {
	return (
		<header>
			<h1>Hello React! 123</h1>
			<p>
				Hello small
				asdf
			</p>
		</header>
	)
}

export const Header = hot(HeaderComponent)
