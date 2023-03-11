const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const { withNxWebpack } = require('@nrwl/expo');

module.exports = async function (env, argv) {
  let config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ['nativewind'],
      },
    },
    argv
  );
  config = await withNxWebpack(config);

  // You can override the config here, for example:
  // config.resolve.alias = {
  //   ...config.resolve.alias,
  //   react: path.resolve('../../node_modules/react'),
  // };
  config.module.rules.push({
    test: /\.css$/i,
    use: ['postcss-loader'],
  });

  return config;
};
