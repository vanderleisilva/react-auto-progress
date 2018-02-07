module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactAutoProgress',
      externals: {
        react: 'React'
      }
    }
  }
}
