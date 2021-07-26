// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'warn',
    // this is the stupidest rule i've ever seen and whoever created it deserves to be shot
    '@typescript-eslint/ban-ts-comment': 'off',
    // use consistent-return instead
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
}
