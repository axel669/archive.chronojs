import json from "rollup-plugin-json"

export default {
    input: "src/api.js",
    output: [
        {
            file: "es6/index.js",
            format: "es"
        },
        {
            file: "index.js",
            format: "cjs"
        },
        {
            file: "standalone/chrono.js",
            format: "iife",
            name: "Chrono"
        }
    ],
    plugins: [
        json({indent: '    '}),
    ]
};
