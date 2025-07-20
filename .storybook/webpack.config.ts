import webpack, { RuleSetRule } from "webpack";
import path from "path";
import { BuildPaths } from "../config/build/types/config";

export default ({config}: webpack.Configuration) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', 'src'),
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');

    config.plugins.push(
        new webpack.DefinePlugin({
            '__IS_DEV__': process.env.NODE_ENV === 'development'
        })
    );

    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config.module.rules = config.module.rules.filter(
        rule => !rule.test?.toString().includes('scss')
    );

    config.module.rules.push({
        test: /\.module\.scss$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: { modules: true },
            },
            'sass-loader',
        ],
    });
    config.module.rules.push({
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader',
        ],
    });

    return config;
};
