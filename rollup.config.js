import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import del from 'rollup-plugin-delete'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'unique.js',
  output: [
    { file: './dist/unique.cjs.js', format: 'cjs', exports: 'default' },
    { file: './dist/unique.esm.js', format: 'esm' },
    {
      name: 'unique',
      format: 'iife',
      file: './dist/unique.js'
    },
    {
      name: 'unique',
      format: 'iife',
      file: './dist/unique.min.js',
      plugins: [terser()]
    },
    {
      name: 'unique',
      format: 'iife',
      sourcemap: true,
      file: './dist/unique.map.js',
      plugins: [terser()]
    }
  ],
  plugins: [
    del({ targets: 'dist/*' }),
    resolve(),
    babel({ babelHelpers: 'bundled', presets: ['@babel/preset-env'] })
  ]
}
