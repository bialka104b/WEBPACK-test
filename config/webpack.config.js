//jest to moduł node-owy
const path = require("path"); //odwołanie(import) do modułu path webpacka
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //import do pluginu do czyszczenia folderu po przebudowie webpackiem
const HtmlWebpackPlugin = require("html-webpack-plugin"); //plugin wykorzystywany przy hashah
//const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //plugin do łączenia 2 plików css w jeden

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  }, //plik wejściowy
  output: {
    filename: "js/[name].js", //nazwa pliku wyjściowego to main-bundle.js, "name" oznacza "main" z obiektu entry
    //path: __dirname + "/dist",//ścieżka absolutna __dirname plus podfolder dist
    path: path.resolve(__dirname, "../", "build"), // działa tak samo jak linijka wyżej tylko z zaimportowanym path
  },
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, "../public"),
    port: 8000,
  },
  module: {
    rules: [
      {
        test: /\.txt$/, //dla danych typów plików txt
        use: "raw-loader", //chcemy uzywać ten loader
      },
      {
        test: /\.css$/, //dla danych typów plików css
        use: ["style-loader", "css-loader"], //załaduje nam 2 osobne pliki
        //use: [MiniCssExtractPlugin.loader, "css-loader"], //załaduje nam 1 skondensowany plik
      },
      {
        test: /\.(sass|scss)$/, //dla danych typów plików css
        //use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        use: ["style-loader", "css-loader", "sass-loader"],
      }, //tutaj trzeba użyć obu bo musi kompilowac z sass na css

      {
        test: /\.(jpg|png|gif|jpeg|svg)$/, //dla danych typów plików graficznych
        //use: 'file-loader', //chcemy uzywać ten loader
        loader: "file-loader", //zamiennik use:
        options: {
          name: "[name][contenthash:2].[ext]", //[ext] inaczej rozszerzenie
          outputPath: "images",
        },
      },
      {
        //babel
        test: /\.js$/,
        loader: "babel-loader", //można uzuć też use:
        exclude: /node_modules/, //jeśli w ścieżce pojawi się napis node_modules to nie zostanie to uwzględnione przez babel-loader, bo tych plików nie chcemy transpilować
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(), //dodana właściwość pluginu do czyszenia folderu po przebudowie webpackiem
    new HtmlWebpackPlugin({
      //używane przy plikach hashowanych
      template: "src/template/template.html",
      title: "nowa apka", //zmieni nam title naszej strony
    }),
    new HtmlWebpackPlugin({
      //używane przy plikach hashowanych
      title: "nowa apka", //zmieni nam title naszej strony
      filename: "about.html",
    }),

    // new MiniCssExtractPlugin({
    //   //plugin do łączenia 2 plików css w jeden
    //   filename: "css/[name].css", //nazwa pliku po bbundlingu
    // }),
  ],
};
