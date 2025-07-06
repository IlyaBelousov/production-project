import type { StorybookConfig } from '@storybook/react-webpack5';
import webpackConfig from "./webpack.config";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-docs"
  ],
  framework: {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  webpackFinal: async (config) => {
    const finalConfig = webpackConfig({config});

    console.log('BIS finalConfig',finalConfig);
    return  finalConfig // просто возвращаем результат вызова функции
  }
};
export default config;
