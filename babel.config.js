module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: [
          'react-native-paper/babel',
          'transform-replace-expressions',
          {
            replace: [
              {
                identifierName: 'localStorage',
                replacement: {
                  type: 'identifier',
                  value: 'asyncStoragePolyfill'
                }
              }
            ]
          }

        ],
      },
    },
  };
};
