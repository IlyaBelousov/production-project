import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';
import {buildCssLoader} from "./loaders/buildCssLoader";

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule [] => {
    const { isDev } = options;

    const sassLoader = buildCssLoader(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node-modules/',
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [
        typescriptLoader,
        sassLoader,
        svgLoader,
        fileLoader,
    ];
};
