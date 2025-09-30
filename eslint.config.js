module.exports = [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '.git/**',
      '.github/**'
    ]
  },

  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: require('@babel/eslint-parser'),
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        },
        babelOptions: {
          presets: [
            '@babel/preset-react'
          ],
          plugins: [
            '@babel/plugin-syntax-jsx'
          ]
        }
      },
      globals: {
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        process: 'readonly',
        Buffer: 'readonly'
      }
    },
    plugins: {
      react: require('eslint-plugin-react'),
      'react-hooks': require('eslint-plugin-react-hooks'),
      'jsx-a11y': require('eslint-plugin-jsx-a11y')
    },
    rules: {
      'semi': ['error', 'always'],
      'quotes': ['error', 'single', { avoidEscape: true }],
      'indent': ['error', 2],
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'off',

      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];
