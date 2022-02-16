import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

module.exports = {  
  entry: path.join(__dirname,'src','index.js'),
  output: {
    path: path.join(__dirname,'build'),
    publicPath: '/', //Avaible to reload frontend at a route different of '/'
    filename: 'index_bundle.js'  
  },  
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),'node_modules'
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "app")
    },
    // Display only errors to reduce the amount of output.
    host: "0.0.0.0", // Defaults to `localhost`
    port: 3000, // Defaults to 8080
    open: false, // Open the page in browser
    headers: { 
      "Access-Control-Allow-Origin": "http://192.168.1.49:5000/",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    },
    historyApiFallback: true //Avaible to reload frontend at a route different of '/'
  },  
  module: {
    rules: [
      {
        // this is so that we can compile any React,
        // ES6 and above into normal ES5 syntax
        test: /\.(js|jsx)$/,
        // we do not want anything from node_modules to be compiled
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader", // compiles Sass to CSS, using Node Sass by default
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|mp3|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'file?name=fonts/[name].[ext]'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {      
        template: path.join(__dirname,'src','index.html')
      }
    ),
    new MiniCssExtractPlugin({
      filename: 'css/mystyles.css'
    })
  ]
};