var webpack=require('webpack');
module.exports={
	entry:{
		bundle:'./src/main.js'
	},
	output:{
		path:__dirname+'/dist',
		filename:'[name].js'
	},
	module:{
		rules:[
			{
				test:/\.vue$/,
				use:['vue-loader']
			},
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			},
			{
				test:/\.(png|jpg|jpeg|gif)$/,
				use:{
					loader:'url-loader',
					options:{

					}
				}
			},
			// {
			// 	test:/\.js$/,
			// 	use:[
			// 		loader:'babel-loader',
			// 		options:{
			// 			presets:['env']
			// 		}
			// 	]
			// }
		]
	},
	devServer:{
		open:true,
		port:9000,
		inline:true,
		compress:true,
		hot:true
	},
	devtool:'cheap-eval-source-map',
	resolve:{
		alias:{
			"vue":"vue/dist/vue.js"
		},
		extensions:['.js','.vue','.css']
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin()
	]
}