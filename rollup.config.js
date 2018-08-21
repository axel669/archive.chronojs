const json = require('rollup-plugin-json');
const babel = require('rollup-plugin-babel');

export default {
    input: "source/chrono.js",
    output: [
        {
            file: "browser/chrono.js",
            format: "iife",
            name: "Chrono"
        },
        {
            file: "index.js",
            format: "cjs"
        }
    ],
    plugins: [
        json({indent: '    '}),
        babel({exclude: "node_modules/**"})
    ]
};
