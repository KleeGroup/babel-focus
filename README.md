# babel-preset-focus

> Babel preset for focus plugins

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
