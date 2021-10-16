module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: { sourceType: 'module', ecmaVersion: 2020 },
  plugins: ['@typescript-eslint'],
  extends: [
    '@mario34/eslint-config-base/rules/style',
    'plugin:@typescript-eslint/recommended',
    ...[
      './rules/all.js',
      './rules/overrides-eslint.js',
    ].map(require.resolve),
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
