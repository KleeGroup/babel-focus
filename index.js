let env = process.env.BABEL_ENV || process.env.NODE_ENV;
if (env !== 'development' && env !== 'test' && env !== 'production') {
    throw new Error(
        'Using `focus-preset-babel` requires that you specify `NODE_ENV` or ' +
        '`BABEL_ENV` environment variables. Valid values are "development" ' +
        '"test", and "production". Instead, received: ' +
        JSON.stringify(env) +
        '.'
    );
}

let browsers = process.env.BROWSERS || "'>1%'|'last 4 versions'|'Firefox ESR'|'not ie < 9'";

module.exports = {
    presets: [
        // Latest stable ECMAScript features
        [
            'babel-preset-env',
            {
                targets: {
                    browsers: browsers.split('|'),
                    // // We currently minify with uglify
                    // // Remove after https://github.com/mishoo/UglifyJS2/issues/448
                    uglify: false,
                },
                // Enable polyfill transforms
                useBuiltIns: true,
                // Do not transform modules to CJS
                modules: false,
            },
        ],
        'babel-preset-react'
    ],
    plugins: [
        'babel-plugin-transform-decorators-legacy',
        'babel-plugin-transform-class-properties',
        'babel-plugin-lodash'
        ['babel-plugin-transform-object-rest-spread', { useBuiltIns: true, }],
        'babel-plugin-transform-function-bind',
        ['babel-plugin-transform-react-jsx', { useBuiltIns: true, }],
        ['babel-plugin-transform-runtime', { helpers: false, polyfill: false, regenerator: true, }],
        ['babel-plugin-transform-regenerator', { async: false }],
        'babel-plugin-syntax-dynamic-import'
        // 'babel-plugin-transform-proto-to-assign',
        // ['babel-plugin-transform-es2015-classes', { loose: true }]
    ],
    env: {
        development: {
            "plugins": ['babel-plugin-transform-react-jsx-source', 'babel-plugin-transform-react-jsx-self', 'react-hot-loader/babel']
        },
        production: {
            plugins: ['transform-react-remove-prop-types']
        }
    }
};