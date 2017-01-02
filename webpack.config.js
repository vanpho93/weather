var webpack = require('webpack');
module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  externals:{
    jquery: 'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({"$":"jquery"})
  ],
  resolve: {
    root: __dirname,
    alias: {
      About: 'app/Components/About.js',
      Weather: 'app/Components/Weather.js',
      WeatherForm: 'app/Components/WeatherForm.js',
      WeatherMessage: 'app/Components/WeatherMessage.js',
      getTemp: 'app/api/getTemp.js',
      Main: 'app/Components/Main.js',
      Nav: 'app/Components/Nav.js'
    }
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  }
};
