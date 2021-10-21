module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    '@mario34/eslint-config-base',
    'plugin:@typescript-eslint/recommended',
    ...[
      // './rules/all.js',
      './rules/overrides-eslint.js',
    ].map(require.resolve),
  ],
  rules: { },
}
