const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getConfig = require('./configs');

module.exports = env => {
	const config = getConfig(env.NODE_ENV);
	return {
		devtool: env.NODE_ENV === 'development' ? 'eval-source-map' : undefined,
		entry: ['core-js/stable', 'regenerator-runtime/runtime', path.resolve(__dirname, 'client', 'layout') ],
		output: {
			path: path.join(process.cwd(), 'public'),
			filename: 'assets/js/[name].js',
			publicPath: '/'
		},
		target: 'web',
		module: {
			rules: [
				{
					test: /\.js|jsx$/,
					exclude: /node_modules/,
					use: ['babel-loader']
				},
				{
					test: /\.html$/,
					use: {
						loader: 'html-loader',
						options: { minimize: true }
					}
				},
				{
					test: /\.(jpe?g|png|gif|svg)$/,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 8192
							}
						}
					]
				}
			]
		},
		resolve: {
			extensions: ['.js', '.jsx'],
			alias: {
				'@images': path.resolve(__dirname, 'public/img'),
				'@components': path.resolve(__dirname, 'client/components'),
				'@themes': path.resolve(__dirname, 'client/themes'),
				'@layout': path.resolve(__dirname, 'client/components/layout'),
				'@filters': path.resolve(__dirname, 'client/components/filters'),
				'@helpers': path.resolve(__dirname, 'client/helpers'),
				'@ducks': path.resolve(__dirname, 'client/ducks')
			}
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'client', 'index.ejs'),
				filename: 'index.html',
				hash: true
			}),
			new webpack.NamedModulesPlugin(),
			new webpack.HotModuleReplacementPlugin(),
			new webpack.DefinePlugin({
				config: JSON.stringify(config)
			})
		],
		devServer: {
			inline: true,
			hot: true,
			port: 8080,
			historyApiFallback: true,
			overlay: true,
			headers: { 'Access-Control-Allow-Origin': '*' },
			publicPath: '/',
			contentBase: './public/'
		}
	};
};
