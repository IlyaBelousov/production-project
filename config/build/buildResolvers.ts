import webpack from "webpack";
import {BuildOptions} from "./types/config";

export const buildResolvers = (options: BuildOptions): webpack.ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js', '.css'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {}
    }
}