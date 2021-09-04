module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-undef': [2],
    'no-multiple-empty-lines': [2, { max: 2, maxEOF: 0 }],
    'space-infix-ops': [1],
    'no-console': [1, { allow: ['warn', 'error'] }],
    'object-curly-spacing': [1, 'always'],
    indent: ['error', 2],
    'keyword-spacing': [2, { 'before': true }],
    'prefer-const': [2],
    'arrow-spacing': [1, { before: true, after: true }],
    'space-before-function-paren': [
      1,
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'comma-spacing': [2, { before: false, after: true }],
    'comma-style': [2, 'last'],
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'key-spacing': [
      1,
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'semi-spacing': [2, { before: false, after: true }],
    semi: [2, 'never'],
    quotes: [1, 'single'],
    'space-before-blocks': [
      1,
      {
        functions: 'always',
        keywords: 'always',
        classes: 'always',
      },
    ],
    'no-trailing-spaces': [1],
    'no-multi-spaces': [1],
    'no-mixed-spaces-and-tabs': 2,
    'no-tabs': 2,
  },
}
