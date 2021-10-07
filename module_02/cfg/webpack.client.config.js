const path = require('path')

const NODE_ENV = process.env.NODE_ENV
const IS_DEV = NODE_ENV === 'development'

function setupDevtool() {
	if (IS_DEV) return 'eval'
	else return false
}

module.exports = {
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
	},
	mode: NODE_ENV ? NODE_ENV : 'development',
	entry: path.resolve(__dirname, '../src/client/index.jsx'),
	output: {
		path: path.resolve(__dirname, '../dist/client'),
		filename: 'index.js',
	},
	module: {
		rules: [
			{
				test: /\.[tj]sx?$/,
				use: ['ts-loader']
			},
		],
	},
	devtool: setupDevtool(),
}
