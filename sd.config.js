/*
module.exports = {
  source: ['../*.tokens.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'ux',
      buildPath: 'tokens/',
      files: [
        {
          destination: '_variables.css',
          format: 'css/variables',
        },
      ],
    },
  },
};
*/

import StyleDictionary from 'style-dictionary';

function darkFormatWrapper(format) {
  return function (args) {
    // Create a local copy
    const dictionary = { ...args.dictionary };

    // Override each token's `value` with `darkValue`
    dictionary.allTokens = dictionary.allTokens.map((token) => {
      const { darkValue } = token;
      if (darkValue) {
        return {
          ...token,
          value: token.darkValue,
        };
      } else {
        return token;
      }
    });

    // Use the built-in format but with our customized dictionary object
    // so it will output the darkValue instead of the value
    return StyleDictionary.format[format]({ ...args, dictionary });
  };
}

export default {
  // add custom formats
  format: {
    cssDark: darkFormatWrapper('css/variables'),
  },
  //...
  source: ['**/*.tokens.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'ux',
      buildPath: 'tokens/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
          },
        },
        {
          destination: 'variables-dark.css',
          format: 'cssDark',
          filter: (token) =>
            token.darkValue && token.attributes.category === 'color',
        },
      ],
    },
  },
};
