import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

const root = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

const config: webpack.Configuration = {
  entry: './src/main.ts',
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
          },
          {
            loader: 'angularjs-template-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: ['raw-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      {
        from: `${root}/assets/data/people.json`,
        to: `${dist}/data/people.json`,
      },
    ]),
    new HtmlWebpackPlugin({
      template: `${root}/index.html`,
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'main.js',
    publicPath: '/',
    path: `${dist}/`,
  },
  devServer: {
    historyApiFallback: true,
  },
};

export default config;
