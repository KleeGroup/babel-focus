# babel-preset-focus

> Babel preset for focus plugins.

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
