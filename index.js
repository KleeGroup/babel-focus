module.exports = {
  presets: [
    require('babel-preset-stage-0'),
    require('babel-preset-react'),
    require('babel-preset-es2015')
  ],
  plugins: [
    require('babel-plugin-transform-class-properties'),
    require('babel-plugin-transform-decorators-legacy'),
    require('babel-plugin-add-module-exports')
  ],
  env: {
    development: {
      presets: [
        require('babel-preset-react-hmre')
      ]
    }
  }
}
