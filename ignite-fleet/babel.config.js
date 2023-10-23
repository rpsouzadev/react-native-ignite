module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@dtos': './src/dtos',
            '@utils': './src/utils',
            '@hooks': './src/hooks',
            '@routes': './src/routes',
            '@assets': './src/assets',
            '@screens': './src/screens',
            '@storage': './src/storage',
            '@contexts': './src/contexts',
            '@services': './src/services',
            '@components': './src/components',
          },
        },
      ],
    ],
  }
}
