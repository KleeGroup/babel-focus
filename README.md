# babel-preset-focus

> Babel preset for focus plugins

[![Dependencies Status](https://david-dm.org/KleeGroup/babel-preset-focus.svg)](https://david-dm.org/KleeGroup/babel-preset-focus)
[![Dev Dependencies Status](https://david-dm.org/KleeGroup/babel-preset-focus/dev-status.svg)](https://david-dm.org/KleeGroup/babel-preset-focus?type=dev)
[![Peer Dependencies Status](https://david-dm.org/KleeGroup/babel-preset-focus/peer-status.svg)](https://david-dm.org/KleeGroup/babel-preset-focus?type=peer)

## What's inside ?

```json
{
  "presets": ["stage-0", "react", "es2015"],
  "plugins": [
    "transform-class-properties",
    "transform-decorators-legacy",
    "add-module-exports",
    "transform-proto-to-assign",
    [
      "transform-es2015-classes",
      {
        "loose": true
      }
    ]
  ],
  "env": {
    "development": {
      "presets": ["react-hmre"]
    }
  }
}

```

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
