# babel-preset-focus

> Babel preset for focus plugins

[![Dependencies Status](https://david-dm.org/KleeGroup/babel-preset-focus.svg)](https://david-dm.org/KleeGroup/babel-preset-focus)
[![Dev Dependencies Status](https://david-dm.org/KleeGroup/babel-preset-focus/dev-status.svg)](https://david-dm.org/KleeGroup/babel-preset-focus?type=dev)
[![Peer Dependencies Status](https://david-dm.org/KleeGroup/babel-preset-focus/peer-status.svg)](https://david-dm.org/KleeGroup/babel-preset-focus?type=peer)

## Install

```sh
$ npm install --save-dev babel-preset-focus
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["focus"]
}
```

### Via CLI

```sh
$ babel script.js --presets focus
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["focus"]
});
```
