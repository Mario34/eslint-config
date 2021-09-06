module.exports = {
  rules: {
    // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
    // Enforce “for” loop update clause moving the counter in the right direction
    // https://eslint.org/docs/rules/for-direction
    'for-direction': 'error',

    // 强制 getter 函数中出现 return 语句
    // Enforces that a return statement is present in property getters
    // https://eslint.org/docs/rules/getter-return
    'getter-return': ['error', { allowImplicit: true }],

    // 禁止使用异步函数作为 Promise executor
    // disallow using an async function as a Promise executor
    // https://eslint.org/docs/rules/no-async-promise-executor
    'no-async-promise-executor': 'error',

    // 禁止在循环中出现 await
    // Disallow await inside of loops
    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 'off',

    // 禁止与 -0 进行比较
    // Disallow comparisons to negative zero
    // https://eslint.org/docs/rules/no-compare-neg-zero
    'no-compare-neg-zero': 'error',

    // disallow assignment in conditional expressions
    'no-cond-assign': ['error', 'always'],

    // 禁用 console
    // disallow use of console
    'no-console': ['warn', {
      allow: ['warn', 'error'],
    }],

    // 禁止在条件中使用常量表达式
    // disallow use of constant expressions in conditions
    'no-constant-condition': 'warn',

    // 禁止在正则表达式中使用控制字符
    // disallow control characters in regular expressions
    'no-control-regex': 'error',

    // 禁用 debugger
    // disallow use of debugger
    'no-debugger': 'error',

    // 禁止 function 定义中出现重名参数
    // disallow duplicate arguments in functions
    'no-dupe-args': 'error',

    // 在if-else-if链中禁止重复条件
    // Disallow duplicate conditions in if-else-if chains
    // https://eslint.org/docs/rules/no-dupe-else-if
    'no-dupe-else-if': 'off',

    // 禁止对象字面量中出现重复的 key
    // disallow duplicate keys when creating object literals
    'no-dupe-keys': 'error',

    // 禁止出现重复的 case 标签
    // disallow a duplicate case label.
    'no-duplicate-case': 'error',

    // 禁止出现空语句块
    // disallow empty statements
    'no-empty': 'error',

    // 禁止在正则表达式中使用空字符集
    // disallow the use of empty character classes in regular expressions
    'no-empty-character-class': 'error',

    // 禁止对 catch 子句的参数重新赋值
    // disallow assigning to the exception in a catch block
    'no-ex-assign': 'error',

    // 禁止不必要的布尔转换
    // disallow double-negation boolean casts in a boolean context
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'error',

    // 禁止不必要的括号
    // disallow unnecessary parentheses
    // https://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': ['off', 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
      ignoreJSX: 'all', // delegate to eslint-plugin-react
      enforceForArrowConditionals: false,
    }],

    // 禁止不必要的分号
    // disallow unnecessary semicolons
    'no-extra-semi': 'error',

    // 禁止对 function 声明重新赋值
    // disallow overwriting functions written as function declarations
    'no-func-assign': 'error',

    // 禁止对导入的绑定赋值
    // https://eslint.org/docs/rules/no-import-assign
    'no-import-assign': 'off',

    // 禁止在嵌套的块中出现变量声明或 function 声明
    // disallow function or variable declarations in nested blocks
    'no-inner-declarations': 'error',

    // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    // disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': 'error',

    // 禁止不规则的空白
    // disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': 'error',

    // 禁止失去精度的文字数
    // Disallow Number Literals That Lose Precision
    // https://eslint.org/docs/rules/no-loss-of-precision
    'no-loss-of-precision': 'off',

    // 不允许在字符类语法中出现由多个代码点组成的字符
    // Disallow characters which are made with multiple code points in character class syntax
    // https://eslint.org/docs/rules/no-misleading-character-class
    'no-misleading-character-class': 'error',

    // 禁止把全局对象作为函数调用
    // disallow the use of object properties of the global object (Math and JSON) as functions
    'no-obj-calls': 'error',

    // 禁止从Promise执行器函数返回值
    // Disallow returning values from Promise executor functions
    // https://eslint.org/docs/rules/no-promise-executor-return
    'no-promise-executor-return': 'off',

    // 禁止直接调用 Object.prototypes 的内置属性
    // disallow use of Object.prototypes builtins directly
    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'error',

    // 禁止正则表达式字面量中出现多个空格
    // disallow multiple spaces in a regular expression literal
    'no-regex-spaces': 'error',

    // 禁止从setter返回值
    // Disallow returning values from setters
    // https://eslint.org/docs/rules/no-setter-return
    'no-setter-return': 'off',

    // 禁用稀疏数组
    // disallow sparse arrays
    'no-sparse-arrays': 'error',

    // Disallow template literal placeholder syntax in regular strings
    // https://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',

    // 禁止出现令人困惑的多行表达式
    // Avoid code that looks like two expressions but is actually one
    // https://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'error',

    // 禁止在常规字符串中出现模板字面量占位符语法
    // disallow unreachable statements after a return, throw, continue, or break statement
    'no-unreachable': 'error',

    // Disallow loops with a body that allows only one iteration
    // https://eslint.org/docs/rules/no-unreachable-loop
    'no-unreachable-loop': ['off', {
      ignore: [], // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
    }],

    // 禁止在 finally 语句块中出现控制流语句
    // disallow return/throw/break/continue inside finally blocks
    // https://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 'error',

    // 禁止对关系运算符的左操作数使用否定操作符
    // disallow negating the left operand of relational operators
    // https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',

    // 禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值
    // Disallow assignments that can lead to race conditions due to usage of await or yield
    // https://eslint.org/docs/rules/require-atomic-updates
    // note: not enabled because it is very buggy
    'require-atomic-updates': 'off',

    // 要求使用 isNaN() 检查 NaN
    // disallow comparisons with the value NaN
    'use-isnan': 'error',

    // ensure JSDoc comments are valid
    // https://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': 'off',

    // 强制 typeof 表达式与有效的字符串进行比较
    // ensure that the results of typeof are compared against a valid string
    // https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': ['error', { requireStringLiterals: true }],
  },
}
