const webpack=require("webpack");
module.exports={
	entry: "./src/index",
  output: {
  	path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module:{
    loaders: [
      {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel'
      }
    ]
  },
  devServer:{
    connectBase:"/dist",
    port:"9000"
  }
}
