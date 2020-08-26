const path = require("path"); //odwołanie(import) do modułu path webpacka
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //import do pluginu do czyszczenia folderu po przebudowie webpackiem
const HtmlWebpackPlugin = require("html-webpack-plugin"); //plugin wykorzystywany przy hashah
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //plugin do łączenia 2 plików css w jeden

module.exports = {
  mode: "production",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "js/[name]-[contenthash:4].js", //nazwa pliku wyjściowego to main-bundle.js, "name" oznacza "main" z obiektu entry
    path: path.resolve(__dirname, "../", "build"), // działa tak samo jak linijka wyżej tylko z zaimportowanym path
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: "raw-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"], //chcemy uzywać ten loader
      },
      {
        test: /\.(sass|scss)$/, //dla danych typów plików css
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], //chcemy uzywać ten loader
      },
      {
        test: /\.(jpg|png|gif|jpeg|svg)$/, //dla danych typów plików graficznych
        //use: 'file-loader', //chcemy uzywać ten loader
        use: [
          {
            loader: "file-loader", //zamiennik use:
            options: {
              name: "[name][contenthash:2].[ext]", //[ext] inaczej rozszerzenie
              outputPath: "images",
            },
          },
          {
            loader: "image-webpack-loader", //optymalizacja grafik
            options: {
              mozjpeg: {
                quality: 50, //ilość optymalizacji
                progressive: true, //sposób wczytywania
              },
            },
          },
        ],
      },
      {
        //babel
        test: /\.js$/,
        loader: "babel-loader", //można uzuć też use:
        exclude: /node_modules/, //jeśli w ścieżce pojawi się napis node_modules to nie zostanie to uwzględnione przez babel-loader, bo tych plików nie chcemy transpilować
        options: {
          presets: ["@babel/preset-env"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(), //dodana właściwość pluginu do czyszenia folderu po przebudowie webpackiem
    new HtmlWebpackPlugin({
      template: "src/template/template.html",
      title: "nowa apka",
    }),
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash:3].css", //nazwa pliku po bbundlingu
    }),
  ],
};