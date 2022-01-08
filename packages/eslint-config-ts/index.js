module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    '@mario34/eslint-config-base/rules/style',
    './rules/overrides-eslint.js',
    './rules/style.js',
    './rules/error.js',
  ],
  rules: {},
}
