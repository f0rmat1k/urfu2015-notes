module.exports = {
	context: __dirname + "/bundles",
	entry: {
		main: './main/main.js',
		innerPage: './innerPage.js'
	},
	output: {
		path: __dirname + "/public",
		publicPath: "/public/",
		filename: "[name].bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style!css'
			},
			{ test: /\.(png|jpg)$/, loader: 'file-loader' }
			//{ test: /\.hbs/, loader: 'handlebars-loader' }
		]
	}
};
