import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

const root = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist');

const config: webpack.Configuration = {
  entry: './src/index.ts',
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
            loader: 'angularjs-template-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: ['raw-loader']
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      {
        from: `${root}/index.html`,
      }
    ]),
    new HtmlWebpackPlugin({
      template: `${root}/index.html`,
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'main.js',
    publicPath: '/',
    path: `${dist}/`,
  }
};

export default config;
