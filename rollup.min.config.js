import json from "rollup-plugin-json";
import tea from "@axel669/teascript/rollup";
import {terser} from "rollup-plugin-terser";

export default {
    input: "src/chrono.tea",
    output: [
        {
            file: "es6/min/index.js",
            format: "es"
        },
        {
            file: "min/index.js",
            format: "cjs"
        },
        {
            file: "standalone/chrono.min.js",
            format: "iife",
            name: "Chrono"
        }
    ],
    plugins: [
        json({indent: '    '}),
        tea({
            include: "**/*.tea"
        }),
        terser()
    ]
};
