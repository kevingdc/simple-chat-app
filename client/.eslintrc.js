module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'import/extensions': [
      'warn',
      {
        tsx: 'never',
        ts: 'never',
        json: 'always',
      },
    ],
    // 'no-unused-vars': [
    //   'warn',
    //   {vars: 'all', args: 'after-used', ignoreRestSiblings: false},
    // ],
    'react/jsx-filename-extension': [
      1,
      {extensions: ['.js', '.jsx', '.ts', '.tsx']},
    ],
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-curly-newline': 0,
    'react/no-array-index-key': 'warn',
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {vars: 'all', args: 'after-used', ignoreRestSiblings: false},
    ],
  },
  globals: {
    JSX: true,
  },
};
