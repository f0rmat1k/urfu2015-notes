module.exports = {
	context: __dirname + "/bundles",
	entry: {
        main: './main/main.js',
        notes: './notes/notes.js',
        note: './note/note.js'
	},
	output: {
        path: __dirname + '/public',
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
		publicPath: "/public/"
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style!css'
			},
			{ test: /\.(png|jpg)$/, loader: 'file-loader' }
		]
	}
};
