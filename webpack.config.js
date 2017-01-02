module.exports = {
  entry: './app/app.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      About: 'app/Components/About.js',
      Weather: 'app/Components/Weather.js',
      WeatherForm: 'app/Components/WeatherForm.js',
      WeatherMessage: 'app/Components/WeatherMessage.js',
      getTemp: 'app/api/getTemp.js'
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
