module.exports = {
  rules: {
    // 在数组开括号后和闭括号前强制换行
    // enforce line breaks after opening and before closing array brackets
    // https://eslint.org/docs/rules/array-bracket-newline
    'array-bracket-newline': ['off', 'consistent'], // object option alternative: { multiline: true, minItems: 3 }

    // 强制数组方括号中使用一致的空格
    // enforce spacing inside array brackets
    'array-bracket-spacing': ['error', 'never'],

    // 强制数组元素间出现换行
    // enforce line breaks between array elements
    // https://eslint.org/docs/rules/array-element-newline
    'array-element-newline': ['off', { multiline: true, minItems: 3 }],

    // 禁止或强制在代码块中开括号前和闭括号后有空格
    // enforce spacing inside single-line blocks
    // https://eslint.org/docs/rules/block-spacing
    'block-spacing': ['error', 'always'],

    // 强制在代码块中使用一致的大括号风格
    // enforce one true brace style
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // 强制使用骆驼拼写法命名约定
    // require camel case names
    camelcase: ['off', { properties: 'never', ignoreDestructuring: false }],

    // 强制或禁止对注释的第一个字母大写
    // enforce or disallow capitalization of the first letter of a comment
    // https://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': ['off', 'never', {
      line: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
      block: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
    }],

    // 要求或禁止末尾逗号
    // require trailing commas in multiline object literals
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],

    // 强制在逗号前后使用一致的空格
    // enforce spacing before and after comma
    'comma-spacing': ['error', { before: false, after: true }],

    // 强制使用一致的逗号风格
    // enforce one true comma style
    'comma-style': ['error', 'last', {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      },
    }],

    // 强制在计算的属性的方括号中使用一致的空格
    // disallow padding inside computed properties
    'computed-property-spacing': ['error', 'never'],

    // 当获取当前执行环境的上下文时，强制使用一致的命名
    // enforces consistent naming when capturing the current execution context
    'consistent-this': 'off',

    // 要求或禁止文件末尾存在空行
    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': ['error', 'always'],

    // 要求或禁止在函数标识符和其调用之间有空格
    // enforce spacing between functions and their invocations
    // https://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': ['error', 'never'],

    // 要求函数名与赋值给它们的变量名或属性名相匹配
    // requires function names to match the name of the variable or property to which they are
    // assigned
    // https://eslint.org/docs/rules/func-name-matching
    'func-name-matching': ['off', 'always', {
      includeCommonJSModuleExports: false,
      considerPropertyDescriptor: true,
    }],

    // 要求或禁止使用命名的 function 表达式
    // require function expressions to have a name
    // https://eslint.org/docs/rules/func-names
    'func-names': 'warn',

    // 强制一致地使用 function 声明或表达式
    // enforces use of function declarations or expressions
    // https://eslint.org/docs/rules/func-style
    'func-style': ['off', 'expression'],

    // 强制在函数括号内使用一致的换行
    // enforce consistent line breaks inside function parentheses
    // https://eslint.org/docs/rules/function-paren-newline
    'function-paren-newline': ['error', 'consistent'],

    // 禁用指定的标识符
    // Blacklist certain identifiers to prevent them being used
    // https://eslint.org/docs/rules/id-blacklist
    'id-blacklist': 'off',

    // 强制标识符的最小和最大长度
    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    'id-length': 'off',

    // 要求标识符匹配一个指定的正则表达式
    // require identifiers to match the provided regular expression
    'id-match': 'off',

    // 强制隐式返回的箭头函数体的位置
    // Enforce the location of arrow function bodies with implicit returns
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': ['error', 'beside'],

    // 强制使用一致的缩进
    // this option sets a specific tab width for your code
    // https://eslint.org/docs/rules/indent
    indent: ['error', 2, {
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

    // 强制在 JSX 属性中一致地使用双引号或单引号
    // specify whether double or single quotes should be used in JSX attributes
    // https://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ['warn', 'prefer-double'],

    // 强制在对象字面量的属性中键和值之间使用一致的间距
    // enforces spacing between keys and values in object literal properties
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // 强制在关键字前后使用一致的空格
    // require a space before & after certain keywords
    'keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true },
      },
    }],

    // 强制行注释的位置
    // enforce position of line comments
    // https://eslint.org/docs/rules/line-comment-position
    'line-comment-position': ['off', {
      position: 'above',
      ignorePattern: '',
      applyDefaultPatterns: true,
    }],

    // 强制使用一致的换行风格
    // disallow mixed 'LF' and 'CRLF' as linebreaks
    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': ['error', 'unix'],

    // 要求在注释周围有空行
    // enforces empty lines around comments
    'lines-around-comment': 'off',

    // 要求或禁止类成员之间出现空行
    // require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],

    // 强制可嵌套的块的最大深度
    // specify the maximum depth that blocks can be nested
    'max-depth': ['off', 4],

    // 强制一行的最大长度
    // specify the maximum length of a line in your program
    // https://eslint.org/docs/rules/max-len
    'max-len': ['off', 100, 2, {
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // 强制最大行数
    // specify the max number of lines in a file
    // https://eslint.org/docs/rules/max-lines
    'max-lines': ['off', {
      max: 300,
      skipBlankLines: true,
      skipComments: true,
    }],

    // 强制函数最大代码行数
    // enforce a maximum function length
    // https://eslint.org/docs/rules/max-lines-per-function
    'max-lines-per-function': ['off', {
      max: 50,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    }],

    // 强制回调函数最大嵌套深度
    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': 'off',

    // 强制函数定义中最多允许的参数数量
    // limits the number of parameters that can be used in the function declaration.
    'max-params': ['off', 3],

    // 强制函数块最多允许的的语句数量
    // specify the maximum number of statement allowed in a function
    'max-statements': ['off', 10],

    // 强制每一行中所允许的最大语句数量
    // restrict the number of statements per line
    // https://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': ['off', { max: 1 }],

    // 强制对多行注释使用特定风格
    // enforce a particular style for multiline comments
    // https://eslint.org/docs/rules/multiline-comment-style
    'multiline-comment-style': ['off', 'starred-block'],

    // 要求或禁止在三元操作数中间换行
    // require multiline ternary
    // https://eslint.org/docs/rules/multiline-ternary
    'multiline-ternary': ['off', 'never'],

    // 要求构造函数首字母大写
    // require a capital letter for constructors
    'new-cap': ['error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],

    // 强制或禁止调用无参构造函数时有圆括号
    // disallow the omission of parentheses when invoking a constructor with no arguments
    // https://eslint.org/docs/rules/new-parens
    'new-parens': 'error',

    // 要求方法链中每个调用都有一个换行符
    // enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    // https://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    // 禁用 Array 构造函数
    // disallow use of the Array constructor
    'no-array-constructor': 'error',

    // 禁用按位运算符
    // disallow use of bitwise operators
    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'error',

    // 禁用 continue 语句
    // disallow use of the continue statement
    // https://eslint.org/docs/rules/no-continue
    'no-continue': 'error',

    // 禁止在代码后使用内联注释
    // disallow comments inline after code
    'no-inline-comments': 'off',

    // 禁止 if 作为唯一的语句出现在 else 语句中
    // disallow if as the only statement in an else block
    // https://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',

    // 禁止混合使用不同的操作符
    // disallow un-paren'd mixes of different operators
    // https://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': ['error', {
      // the list of arithmetic groups disallows mixing `%` and `**`
      // with other arithmetic operators.
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['/', '*'],
        ['&', '|', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!=='],
        ['&&', '||'],
      ],
      allowSamePrecedence: false,
    }],

    // 禁止空格和 tab 的混合缩进
    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',

    // 禁止连续赋值
    // disallow use of chained assignment expressions
    // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': ['error'],

    // 禁止出现多行空行
    // disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
    // https://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

    // 禁用否定的表达式
    // disallow negated conditions
    // https://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'off',

    // 禁用嵌套的三元表达式
    // disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // 禁用 Object 的构造函数
    // disallow use of the Object constructor
    'no-new-object': 'error',

    // 禁用一元操作符 ++ 和 --
    // disallow use of unary operators, ++ and --
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'off',

    // 禁用特定的语法
    // disallow certain syntax forms
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    // 禁用 tab
    // disallow tab characters entirely
    'no-tabs': 'error',

    // 禁用三元操作符
    // disallow the use of ternary operators
    'no-ternary': 'off',

    // 禁用行尾空格
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': ['error', {
      skipBlankLines: false,
      ignoreComments: false,
    }],

    // 禁止标识符中有悬空下划线
    // disallow dangling underscores in identifiers
    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': ['off', {
      allow: [],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true,
    }],

    // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // 禁止属性前有空白
    // disallow whitespace before properties
    // https://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'error',

    // 强制单个语句的位置
    // enforce the location of single-line statements
    // https://eslint.org/docs/rules/nonblock-statement-body-position
    'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],

    // 强制大括号内换行符的一致性
    // enforce line breaks between braces
    // https://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    }],

    // 强制在大括号中使用一致的空格
    // require padding inside curly braces
    'object-curly-spacing': ['error', 'always'],

    // 强制将对象的属性放在不同的行上
    // enforce "same line" or "multiple line" on object properties.
    // https://eslint.org/docs/rules/object-property-newline
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true,
    }],

    // 强制函数中的变量要么一起声明要么分开声明
    // allow just one var statement per function
    'one-var': ['error', 'never'],

    // 要求或禁止在变量声明周围换行
    // require a newline around variable declaration
    // https://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': ['error', 'always'],

    // 要求或禁止在可能的情况下使用简化的赋值操作符
    // require assignment operator shorthand where possible or prohibit it entirely
    // https://eslint.org/docs/rules/operator-assignment
    'operator-assignment': ['error', 'always'],

    // 强制操作符使用一致的换行符
    // Requires operator at the beginning of the line in multiline statements
    // https://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

    // 要求或禁止块内填充
    // disallow padding within blocks
    'padded-blocks': ['error', {
      blocks: 'never',
      classes: 'never',
      switches: 'never',
    }, {
      allowSingleLineBlocks: true,
    }],

    // 要求或禁止在语句间填充空行
    // Require or disallow padding lines between statements
    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': 'error',

    // 止使用以对象字面量作为第一个参数的 Object.assign，优先使用对象扩展。
    // Prefer use of an object spread over Object.assign
    // https://eslint.org/docs/rules/prefer-object-spread
    'prefer-object-spread': 'error',

    // 要求对象字面量属性名称用引号括起来
    // require quotes around object literal property names
    // https://eslint.org/docs/rules/quote-props.html
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

    // 强制使用一致的反勾号、双引号或单引号
    // specify whether double or single quotes should be used
    quotes: ['error', 'single', { avoidEscape: true }],

    // 要求或禁止使用分号代替 ASI
    // require or disallow use of semicolons instead of ASI
    semi: ['error', 'never'],

    // 强制分号之前和之后使用一致的空格
    // enforce spacing before and after semicolons
    'semi-spacing': ['error', { before: false, after: true }],

    // 强制分号的位置
    // Enforce location of semicolons
    // https://eslint.org/docs/rules/semi-style
    'semi-style': ['error', 'last'],

    // 要求对象属性按序排列
    // requires object keys to be sorted
    'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

    // 要求同一个声明块中的变量按顺序排列
    // sort variables within the same declaration block
    'sort-vars': 'off',

    // 强制在块之前使用一致的空格
    // require or disallow space before blocks
    'space-before-blocks': 'error',

    // 强制在 function的左括号之前使用一致的空格
    // require or disallow space before function opening parenthesis
    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],

    // 强制在圆括号内使用一致的空格
    // require or disallow spaces inside parentheses
    'space-in-parens': ['error', 'never'],

    // 要求操作符周围有空格
    // require spaces around operators
    'space-infix-ops': 'error',

    // 强制在一元操作符前后使用一致的空格
    // Require or disallow spaces before/after unary operators
    // https://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
      overrides: {
      },
    }],

    // 强制在注释中 // 或 /* 使用一致的空格
    // require or disallow a space immediately following the // or /* in a comment
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!', '/'], // space here to support sprockets directives, slash for TS /// comments
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
        balanced: true,
      },
    }],

    // 强制在 switch 的冒号左右有空格
    // Enforce spacing around colons of switch statements
    // https://eslint.org/docs/rules/switch-colon-spacing
    'switch-colon-spacing': ['error', { after: true, before: false }],

    // 要求或禁止在模板标记和它们的字面量之间有空格
    // Require or disallow spacing between template tags and their literals
    // https://eslint.org/docs/rules/template-tag-spacing
    'template-tag-spacing': ['error', 'never'],

    // 要求或禁止 Unicode 字节顺序标记 (BOM)
    // require or disallow the Unicode Byte Order Mark
    // https://eslint.org/docs/rules/unicode-bom
    'unicode-bom': ['error', 'never'],

    // 要求正则表达式被括号括起来
    // require regex literals to be wrapped in parentheses
    'wrap-regex': 'off',
  },
}
