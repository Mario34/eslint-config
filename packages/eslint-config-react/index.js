module.exports = {
  extends: [
    'plugin:react/recommended',
    '@mario34/eslint-config-ts',
    'plugin:react/jsx-runtime',
  ],
  settings: {
    react: {
      version: '17.0',
    },
  },
  rules: {
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
    'react/no-string-refs': 'error',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-indent': [
      'warn',
      2,
      { checkAttributes: true, indentLogicalExpressions: true },
    ],
    'react/jsx-wrap-multilines': [
      'warn',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore',
      },
    ],
    'react/jsx-closing-bracket-location': [
      'warn',
      {
        nonEmpty: 'tag-aligned',
        selfClosing: 'tag-aligned',
      },
    ],
    'react/jsx-closing-tag-location': ['warn'],
    'react/jsx-tag-spacing': [
      'warn',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'allow',
      },
    ],
    'react/jsx-max-props-per-line': ['warn', { maximum: 1, when: 'multiline' }],
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: false,
        noSortAlphabetically: false,
      },
    ],
    'react/no-unused-state': 'error',
    'react/require-default-props': ['off', { forbidDefaultForRequired: true }],
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: false,
      },
    ],
    'react/prop-types': 'off',
  },
}
