/* eslint-disable func-names */
module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      '@babel/env',
      {
        targets: {
          edge: '17',
          firefox: '60',
          chrome: '67',
          safari: '11.1'
        },
        useBuiltIns: 'usage'
      }
    ],
    '@babel/preset-react',
    '@babel/preset-flow'
  ];
  const plugins = ['@babel/plugin-proposal-class-properties', '@loadable/babel-plugin'];

  return {
    presets,
    plugins
  };
};
