module.exports = {
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/.test\.js$/))
    return config
  },
}
