let env = process.env.BABEL_ENV || process.env.NODE_ENV;
if (env !== 'development' && env !== 'test' && env !== 'production') {
    throw new Error(
        'Using `focus-preset-babel` requires that you specify `NODE_ENV` or ' +
        '`BABEL_ENV` environment variables. Valid values are "development", ' +
        '"test", and "production". Instead, received: ' +
        JSON.stringify(env) +
        '.'
    );
}

// const plugins = [
//     'babel-plugin-transform-decorators-legacy',
//     'babel-plugin-transform-class-properties',
//     ['babel-plugin-transform-object-rest-spread', { useBuiltIns: true, }],
//     ['babel-plugin-transform-react-jsx', { useBuiltIns: true, }],
//     'babel-plugin-transform-function-bind',
//     ['babel-plugin-transform-runtime', { helpers: false, polyfill: false, regenerator: true, }],
//     // 'babel-plugin-add-module-exports',
//     // ['babel-plugin-transform-regenerator', { async: false }],
//     // 'babel-plugin-syntax-dynamic-import'
// ];

// if (env === 'development' || env === 'test') {
//     // The following two plugins are currently necessary to make React warnings
//     // include more valuable information. They are included here because they are
//     // currently not enabled in babel-preset-react. See the below threads for more info:
//     // https://github.com/babel/babel/issues/4702
//     // https://github.com/babel/babel/pull/3540#issuecomment-228673661
//     // https://github.com/facebookincubator/create-react-app/issues/989
//     plugins.push(
//         // Adds component stack to warning messages
//         'babel-plugin-transform-react-jsx-source',
//         // Adds __self attribute to JSX which React will use for some warnings
//         'babel-plugin-transform-react-jsx-self'
//     );
// }

// if (env === 'test') {
//     module.exports = {
//         presets: [
//             // ES features necessary for user's Node version
//             [
//                 require('babel-preset-env').default,
//                 {
//                     targets: {
//                         node: 'current',
//                     },
//                 },
//             ],
//             // JSX, Flow
//             require.resolve('babel-preset-react'),
//         ],
//         plugins: plugins.concat([
//             // Compiles import() to a deferred require()
//             require.resolve('babel-plugin-dynamic-import-node'),
//         ]),
//     };
// } else {
//     module.exports = {
//         presets: [
//             // Latest stable ECMAScript features
//             [
//                 'babel-preset-env',
//                 {
//                     targets:
//                     {
//                         browers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
//                         uglify: true
//                     },
//                     // Disable polyfill transforms
//                     useBuiltIns: false,
//                     // Do not transform modules to CJS
//                     modules: false,
//                 }
//             ],
//             // JSX, Flow
//             'babel-preset-react',
//         ],
//         plugins: plugins.concat([
//             // function* () { yield 42; yield 43; }
//             [
//                 'babel-plugin-transform-regenerator',
//                 {
//                     // Async functions are converted to generators by babel-preset-env
//                     async: false,
//                 },
//             ],
//             // Adds syntax support for import()
//             'babel-plugin-syntax-dynamic-import',
//         ]),
//     };
// }
module.exports = {
    presets: [
        // Latest stable ECMAScript features
        [
            'babel-preset-env',
            {
                targets: {
                    browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
                    // // We currently minify with uglify
                    // // Remove after https://github.com/mishoo/UglifyJS2/issues/448
                    uglify: false,
                },
                // Disable polyfill transforms
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
        'babel-plugin-add-module-exports',
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