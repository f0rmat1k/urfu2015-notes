var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var webpack = require('webpack');

module.exports = {
	context: __dirname + '/bundles',
    entry: {
        main: './main/main.js',
        notes: './notes/notes.js',
        note: './note/note.js'
    },
	devtool: 'source-map',
	output: {
		path: __dirname + '/public',
		filename: '[name].bundle.js',
		sourceMapFilename: '[name].map'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style', ['css?importLoaders=1', 'postcss'])
			},
			{ test: /\.(png|jpg)$/, loader: 'file-loader' }
		]
	},
	plugins: [
		new ExtractTextPlugin('[name].bundle.css'),
		//new webpack.optimize.UglifyJsPlugin()
	],
	postcss: function () {
		return [
			autoprefixer,
			cssnano
		];
	}
};
