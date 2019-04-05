import json from "rollup-plugin-json";
import tea from "@axel669/teascript/rollup";

export default {
    input: "src/chrono.tea",
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
        tea({
            include: "**/*.tea"
        })
    ]
};
