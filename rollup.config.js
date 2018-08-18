const babel = require('rollup-plugin-babel');

export default {
    input: "source/chrono.js",
    output: {
        file: "index.js",
        format: "iife",
        name: "Chrono"
    },
    plugins: [babel({exclude: "node_modules/**"})]
};
