module.exports = (api, _options, _dirname) => {
    api.assertVersion(7);

    const env = process.env.BABEL_ENV || process.env.NODE_ENV;
    if (!["development", "test", "production"].includes(env)) {
        throw new Error(
            "Using `focus-preset-babel` requires that you specify `NODE_ENV` or " +
                '`BABEL_ENV` environment variables. Valid values are "development" ' +
                '"test", and "production". Instead, received: ' +
                JSON.stringify(env) +
                "."
        );
    }
    const development = env === "development";
    const test = env === "test";
    const production = env === "production";
    const browsers = process.env.BROWSERS || ">1%|last 4 versions|Firefox ESR|not ie < 9";
    const LEGACY_EXPORTS = process.env.LEGACY_EXPORTS ? JSON.parse(process.env.LEGACY_EXPORTS) : false;
    const LEGACY_LODASH = process.env.LEGACY_LODASH ? JSON.parse(process.env.LEGACY_LODASH) : false;

    return {
        presets: [
            [
                "@babel/preset-env",
                {
                    useBuiltIns: "entry",
                    modules: test || LEGACY_EXPORTS ? "commonjs" : false,
                    targets: {
                        browsers: browsers.split("|")
                    }
                }
            ],
            [
                "@babel/preset-react",
                {
                    useBuiltIns: true,
                    development: development || test
                }
            ]
        ].filter(Boolean),
        plugins: [
            ["@babel/plugin-proposal-decorators", { legacy: true }], // https://babeljs.io/docs/en/next/babel-plugin-proposal-decorators
            ["@babel/plugin-proposal-class-properties", { loose: true }],
            ["@babel/plugin-proposal-function-bind"],
            ["@babel/plugin-proposal-object-rest-spread", { useBuiltIns: true }],
            ["@babel/plugin-proposal-optional-chaining"]["@babel/plugin-proposal-nullish-coalescing-operator"],
            !test && [
                "@babel/plugin-transform-runtime", // https://babeljs.io/docs/en/next/babel-plugin-transform-runtime
                {
                    corejs: false,
                    helper: true,
                    regenerator: false,
                    useESModules: false
                }
            ],
            ["@babel/plugin-syntax-dynamic-import"],
            !LEGACY_LODASH && ["babel-plugin-lodash"],
            LEGACY_EXPORTS && ["babel-plugin-add-module-exports"],
            development && ["react-hot-loader/babel"],
            production && ["@babel/plugin-transform-react-inline-elements"],
            production && ["@babel/plugin-transform-react-constant-elements"],
            production && [
                "babel-plugin-transform-react-remove-prop-types",
                {
                    mode: "remove" // https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types#ignorefilenames
                }
            ]
        ].filter(Boolean)
    };
};
