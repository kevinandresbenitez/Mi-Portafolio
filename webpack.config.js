const HtmlWebpackPlugin = require('html-webpack-plugin');
const path =require('path') ;

module.exports ={

    entry:"./src/App/index.js",
    mode:"development",
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname , 'build')
    },

    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.less$/i,
            use: [
              {
                loader: "style-loader",
              },
              {
                loader: "css-loader",
              },
              {
                loader: "less-loader",
                options: {
                  lessOptions: {
                    strictMath: true,
                  },
                },
              },
            ],
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          }

        ]
      },
      
    plugins: [new HtmlWebpackPlugin({
        template: __dirname + '/src/App/index.html'
      })],

      devServer: {
        contentBase: path.join(__dirname, 'src/App/index.js'),
        compress: true,
        port: 9000,
      }

}
