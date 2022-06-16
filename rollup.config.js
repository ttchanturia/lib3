import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import dts from "rollup-plugin-dts"
import postcss from "rollup-plugin-postcss"
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { babel } from '@rollup/plugin-babel';

const packageJson = require("./package.json")

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            babel({
                exclude: 'node_modules/**',
                presets: [
                    "@babel/preset-env",
                    ["@babel/preset-react", { "runtime": "automatic" }]
                ]
            }),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            postcss(),
            peerDepsExternal(),
            terser()
        ],
        //external: ["react", "react-dom", "styled-components"],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],

        external: [/\.(css|less|scss|sass)$/]
    },
];