import babel from 'rollup-plugin-babel'

export default {
  input: './src/index.js',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'cjs'
    },
    {
      file: 'dist/bundle.es.js',
      format: 'esm'
    }
  ],
  plugins: [
    babel({
      exclude: /node_modules/
    })
  ]
}