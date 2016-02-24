var decoratorLegacyPlugin = require('babel-plugin-transform-decorators-legacy');
//see https://github.com/babel/babel/commit/b5b7e346a04c99da8793e2c65cc3b3c7c720253d
module.exports = {
  presets: [
    require('babel-preset-stage-0'),
    require('babel-preset-react'),
    require('babel-preset-es2015')
  ],
  plugins: [
    require('babel-plugin-transform-class-properties'),
    decoratorLegacyPlugin.__esModule ? decoratorLegacyPlugin.default: decoratorLegacyPlugin,
    require('babel-plugin-add-module-exports'),
    require('babel-plugin-transform-proto-to-assign'),
    [require('babel-plugin-transform-es2015-classes'), {loose: true}]
  ],
  env: {
    development: {
      presets: [
        require('babel-preset-react-hmre')
      ]
    }
  }
};
