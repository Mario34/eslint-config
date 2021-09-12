module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: { sourceType: 'module', ecmaVersion: 2020 },
  plugins: ['@typescript-eslint'],
  extends: [
    '@mario34/eslint-config-base/rules/style',
    'plugin:@typescript-eslint/recommended',
    ...[
      './rules/overrides-eslint.js',
    ].map(require.resolve),
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/type-annotation-spacing': [1],
    '@typescript-eslint/member-delimiter-style': [
      1,
      {
        multiline: {
          delimiter: 'none',
          requireLast: false,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-explicit-any': 0,
    // 数组类型始终使用[]格式声明
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/indent': ['error', 2],
    // 禁止变量在声明前使用：取消
    '@typescript-eslint/no-use-before-define': 0,
    // 空函数
    '@typescript-eslint/no-empty-function': 0,
    // class的方法必须声明public/private，constructors除外
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          constructors: 'no-public',
        },
      },
    ],
  },
}
