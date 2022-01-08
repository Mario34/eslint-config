module.exports = {
  rules: {
    // 对块强制一致的大括号样式
    // Enforce consistent brace style for blocks
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // 要求或禁止尾随逗号
    // Require or disallow trailing comma
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],

    // 强制逗号前后的空格保持一致
    // Enforces consistent spacing before and after commas
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],

    // TODO: 依赖.tsconfig.json
    // 只要可能，就强制使用点表示法
    // enforce dot notation whenever possible
    'dot-notation': 'warn',
    // '@typescript-eslint/dot-notation': 'error',

    // 要求或禁止函数标识符与其调用之间有空格
    // Require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['error', 'never'],

    // 强制一致的缩进
    // Enforce consistent indentation
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },
      FunctionExpression: {
        parameters: 1,
        body: 1,
      },
      CallExpression: {
        arguments: 1,
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
      ignoreComments: false,
    }],

    // 强制关键字前后保持一致的空格
    // Enforce consistent spacing before and after keywords
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true },
      },
    }],

    // 要求或禁止类成员之间有空行
    // Require or disallow an empty line between class members
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],

    // 需要接口和类型字面值的特定成员分隔符样式
    // Require a specific member delimiter style for interfaces and type literals
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

    // 强制大括号内保持一致的空格
    // Enforce consistent spacing inside braces
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],

    // 强制一致使用反引号、双引号或单引号
    // Enforce the consistent use of either backticks, double, or single quotes
    quotes: 'off',
    '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],

    // 要求或禁止使用分号代替ASI
    // Require or disallow semicolons instead of ASI
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'never'],

    // 强制函数括号前的空格保持一致
    // Enforces consistent spacing before function parenthesis
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],

    // 不允许空函数
    // Disallow empty functions
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'error',

    // 禁止不必要的括号
    // Disallow unnecessary parentheses
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': 'off',

    // 禁止不必要的分号
    // Disallow unnecessary semicolons
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'error',

    // 要求类型注释周围保持一致的空格
    // Require consistent spacing around type annotations
    '@typescript-eslint/type-annotation-spacing': ['error', { before: false, after: true, overrides: { arrow: { before: true, after: true } } }],
  },
}
