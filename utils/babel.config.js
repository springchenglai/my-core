module.exports = {
  presets: [
    [
      '@babel/preset-env', 
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ],
  plugins: [
    // [
    //   require('./plugins/index.js').default,
    //   {
    //     option1: true
    //   }
    // ]
  ]
}