// webpack.config.js
import { createRequire } from 'node:module';
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import AssetsPlugin from 'assets-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { fileURLToPath } from 'url';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const require = createRequire(import.meta.url);
const isDev = process.env.NODE_ENV !== 'production';

// Fix for ES modules (no __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('webpack').Configuration} */
export default {
  mode: isDev ? 'development' : 'production',
  entry: './src/index.tsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isDev ? '[name]-bundle.js' : '[name]-bundle-[contenthash].js',
    publicPath: '/',
    clean: true,
    assetModuleFilename: 'assets/[hash][ext][query]',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  devtool: isDev ? 'eval-source-map' : 'source-map',

  devServer: isDev
    ? {
        static: path.resolve(__dirname, 'public'),
        host: 'localhost',
        port: 3000,
        historyApiFallback: true,
        open: true,
        hot: true,
      }
    : undefined,

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            plugins: [isDev && require.resolve('react-refresh/babel')].filter(
              Boolean
            ),
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      favicon: path.resolve(__dirname, 'public/favicon.ico'),
      minify: !isDev && {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
      },
    }),

    new AssetsPlugin({
      filename: 'webpack-assets.json',
      path: __dirname,
    }),

    isDev && new ReactRefreshWebpackPlugin(),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        isDev ? 'development' : 'production'
      ),
    }),

    new ForkTsCheckerWebpackPlugin(),
  ].filter(Boolean),

  optimization: {
    minimize: !isDev,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    runtimeChunk: { name: 'runtime' },
  },

  performance: { hints: false },

  stats: {
    assets: true,
    modules: false,
    entrypoints: false,
    children: false,
  },
};
