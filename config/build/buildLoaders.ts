import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule [] => {
    const {isDev} = options;



    const sassLoader = {
            test: /\.s[ac]ss$/i,
        exclude: '/node-modules/',

        use: [
                { loader:isDev ? 'style-loader' : MiniCssExtractPlugin.loader},
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: (resPath: string) => Boolean(resPath.includes('.module')),
                            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                        }
                    }
                },
                { loader: "sass-loader"},
            ],
        }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node-modules/'
    }

    return [
        typescriptLoader,
        sassLoader
    ]
}