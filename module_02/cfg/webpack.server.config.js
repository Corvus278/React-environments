const { triggerAsyncId } = require('async_hooks')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

const NODE_ENV = process.env.NODE_ENV
const IS_DEV = NODE_ENV === 'development'

function setupDevtool() {
	if (IS_DEV) return 'eval'
	else return false
}

module.exports = {
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
	},
	target: 'node',
	mode: NODE_ENV ? NODE_ENV : 'development',
	entry: path.resolve(__dirname, '../src/server/server.js'),
	output: {
		path: path.resolve(__dirname, '../dist/server'),
		filename: 'server.js',
	},
	externals: [nodeExternals()],
	module: {
		rules: [
			{
				test: /\.[tj]sx?$/,
				use: ['ts-loader']
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: 'css-loader',
						options: {
							modules: {
								mode: 'local',
								localIdentName: '[name]__[local]--[hash:base64:5]',
							},
							onlyLocals: true,
						}
					},
					'less-loader',
				],
			},
		],
	},
	devtool: setupDevtool(),
	optimization: {
		minimize: false,
	}
}
