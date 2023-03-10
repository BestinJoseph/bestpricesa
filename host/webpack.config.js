const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpack = require('webpack')
// import dotenv from 'dotenv'
const dotenv = require("dotenv")
dotenv.config()

const deps = require("./package.json").dependencies;

const urlPath = process.argv.indexOf('development') !== -1 ? "http://localhost:3000/" : "https://dazzling-sawine-7fa7e2.netlify.app/"

module.exports = {
  output: {
    publicPath: urlPath,
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3000,
    host:"0.0.0.0",
    historyApiFallback: true,
    // watchOptions: { poll: true },
    hot: 'only',
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.json$/,
        type: 'json',
      }
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        host: `host@${urlPath}remoteEntry.js`,
        Dealer: `dealer@http://localhost:3001/remoteEntry.js`,
        Admin: `admin@http://localhost:3002/remoteEntry.js`
      },
      exposes: {
        "./Header":"./src/Layouts/Header",
        "./PopularProducts":"./src/components/PopularProducts",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          eager: true, 
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      favicon: './public/favicon.png',
      assets: './src/assets',
      publicPath: urlPath,
    }),
    new webpack.DefinePlugin({
      process: {
        env: JSON.stringify(process.env)
      }
    })
  ],
};
