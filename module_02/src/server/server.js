import express from 'express'
import ReactDOM from 'react-dom/server'
import { Header } from '../shared/Header'
import { indexTemplate } from './indexTemplate'

const app = express()

app.get('/', (req, res) => {
	res.send(
		indexTemplate(ReactDOM.renderToString(Header()))
	)
})

app.use('/static', express.static('./dist/client'))

app.listen(3000, () => {
	console.log('Server started on http://localhost:3000')
})
