import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import terser from '@rollup/plugin-terser'

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: true
  },
  plugins: [
    external(),
    resolve(),
    commonjs(),
    typescript(),
    postcss(),
    terser()
  ]
}
