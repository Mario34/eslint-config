module.exports = {
  rules: {
    // 要求成员重载是连续的
    // Require that member overloads be consecutive
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    // 需要对数组使用T[]或Array<T>
    // Requires using either T[] or Array<T> for arrays
    '@typescript-eslint/array-type': 'error',

    // 禁止等待不是Promise类型的值
    // Disallows awaiting a value that is not a Thenable
    '@typescript-eslint/await-thenable': 'error',

    // 禁止@ts-<指令>注释被使用或要求指令后的描述
    // Bans @ts-<directive> comments from being used or requires descriptions after directive
    '@typescript-eslint/ban-ts-comment': ['error', {
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': 'allow-with-description',
      'ts-nocheck': 'allow-with-description',
      'ts-check': false,
      minimumDescriptionLength: 3,
    }],

    // 禁止使用// tslint:<rule-flag>注释(tslint迁移)
    // Bans // tslint:<rule-flag> comments from being used
    '@typescript-eslint/ban-tslint-comment': 'off',

    // TODO: 统一风格后开启
    // Bans specific types from being used
    '@typescript-eslint/ban-types': 'off',

    'brace-style': 'off',

    // 对块强制一致的大括号样式
    // Enforce consistent brace style for blocks
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // 确保类上的文字以一致的样式公开
    // Ensures that literals on classes are exposed in a consistent style
    '@typescript-eslint/class-literal-property-style': 'error',

    'comma-dangle': 'off',

    // 要求或禁止尾随逗号
    // Require or disallow trailing comma
    '@typescript-eslint/comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],

    'comma-spacing': 'off',

    // 强制逗号前后的空格保持一致
    // Enforces consistent spacing before and after commas
    '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],

    // 强制或禁止使用记录类型Record<string, unknown> => {}
    // Enforce or disallow the use of the record type
    '@typescript-eslint/consistent-indexed-object-style': 'error',

    // 强制类型断言的一致使用
    // Enforces consistent usage of type assertions
    '@typescript-eslint/consistent-type-assertions': 'off',

    // 强制类型定义的一致使用
    '@typescript-eslint/consistent-type-definitions': 'off',

    // 强制类型导入的一致使用 import type { Foo } from 'Foo';
    '@typescript-eslint/consistent-type-imports': 'off',

    // 强制默认参数是最后一个
    // Enforce default parameters to be last
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',

    // 只要可能，就强制使用点表示法
    // enforce dot notation whenever possible
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'error',

    // 要求函数和类方法的显式返回类型
    // Require explicit return types on functions and class methods
    '@typescript-eslint/explicit-function-return-type': 'off',

    // 要求类属性和方法上的显式可访问性修饰符
    // Require explicit accessibility modifiers on class properties and methods
    '@typescript-eslint/explicit-member-accessibility': 'off',

    // 在导出的函数和类的公共类方法上要求显式的返回和参数类型
    // Require explicit return and argument types on exported functions' and classes' public class methods
    '@typescript-eslint/explicit-module-boundary-types': 'error',

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

    // 要求或禁止在变量声明中进行初始化
    // require or disallow initialization in variable declarations
    'init-declarations': 'off',
    '@typescript-eslint/init-declarations': 'off',

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

    // 需要一致的成员声明顺序
    // Require a consistent member declaration order
    '@typescript-eslint/member-ordering': 'error',

    // 使用特定的方法签名语法强制执行
    // Enforces using a particular method signature syntax
    '@typescript-eslint/method-signature-style': 'error',

    // 强制代码库中所有内容的命名约定
    // Enforces naming conventions for everything across a codebase
    '@typescript-eslint/naming-convention': 'off',

    // 禁止泛型数组构造函数
    // Disallow generic Array constructors
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',

    // 要求只在字符串化时提供有用信息的对象上调用.toString()
    // Requires that .toString() is only called on objects which provide useful information when stringified
    '@typescript-eslint/no-base-to-string': 'error',

    // 禁止在可能混淆的位置使用非空断言
    // Disallow non-null assertion in locations that may be confusing
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',

    // 要求void类型的表达式出现在语句位置
    // Requires expressions of type void to appear in statement position
    '@typescript-eslint/no-confusing-void-expression': 'error',

    // 禁止重复类成员
    // Disallow duplicate class members
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'off',

    // 不允许重复导入
    // Disallow duplicate imports
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': 'off',

    // 禁止使用计算键表达式的删除操作符
    // Disallow the delete operator with computed key expressions
    '@typescript-eslint/no-dynamic-delete': 'off',

    // 不允许空函数
    // Disallow empty functions
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'error',

    // 禁止声明空接口
    // Disallow the declaration of empty interfaces
    '@typescript-eslint/no-empty-interface': 'off',

    // 禁止使用任何类型
    // Disallow usage of the any type
    '@typescript-eslint/no-explicit-any': 'error',

    // 禁止额外的非空断言
    // Disallow extra non-null assertion
    '@typescript-eslint/no-extra-non-null-assertion': 'off',

    // 禁止不必要的括号
    // Disallow unnecessary parentheses
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': 'off',

    // 禁止不必要的分号
    // Disallow unnecessary semicolons
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'error',

    // 禁止使用类作为名称空间
    // Forbids the use of classes as namespaces
    '@typescript-eslint/no-extraneous-class': 'off',

    // 要求适当地处理类似promise的值
    // Requires Promise-like values to be handled appropriately
    '@typescript-eslint/no-floating-promises': 'off',

    // 禁止使用for-in循环遍历数组
    // Disallow iterating over an array with a for-in loop
    '@typescript-eslint/no-for-in-array': 'off',

    // 禁止在catch子句中使用隐式的any类型
    // Disallow usage of the implicit any type in catch clauses
    '@typescript-eslint/no-implicit-any-catch': 'off',

    // 禁止使用类似eval()的方法
    // Disallow the use of eval()-like methods
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'error',

    // 禁止显式声明初始化为数字、字符串或布尔值的变量或参数的类型
    // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
    '@typescript-eslint/no-inferrable-types': 'error',

    // 禁止在类或类类对象之外使用该关键字
    // Disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'off',

    // 禁止在泛型或返回类型之外使用void类型
    // Disallows usage of void type outside of generic or return types
    '@typescript-eslint/no-invalid-void-type': 'error',

    // 禁止在循环语句中包含不安全引用的函数声明
    // Disallow function declarations that contain unsafe references inside loop statements
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'off',

    // 禁止失去精度的文字数
    // Disallow literal numbers that lose precision
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'off',

    // 不允许魔法数字
    // Disallow magic numbers
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',

    // 禁止使用void操作符，除非用于丢弃一个值
    // Disallow the void operator except when used to discard a value
    '@typescript-eslint/no-meaningless-void-operator': 'error',

    // 强制new和constructor的有效定义
    // Enforce valid definition of new and constructor
    '@typescript-eslint/no-misused-new': 'error',

    // 避免在不是用来处理承诺的地方使用承诺
    // Avoid using promises in places not designed to handle them
    '@typescript-eslint/no-misused-promises': 'error',

    // 禁止使用自定义的TypeScript模块和命名空间
    // Disallow the use of custom TypeScript modules and namespaces
    '@typescript-eslint/no-namespace': 'error',

    // 禁止在空合并操作符的左操作数中使用非空断言
    // Disallows using a non-null assertion in the left operand of the nullish coalescing operator
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing)': 'off',

    // 禁止在可选链表达式后使用非空断言
    // Disallows using a non-null assertion after an optional chain expression
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

    // 禁止使用!后缀运算符
    // Disallows non-null assertions using the ! postfix operator
    '@typescript-eslint/no-non-null-assertion': 'off',

    // 禁止在类构造函数中使用参数属性
    // Disallow the use of parameter properties in class constructors
    '@typescript-eslint/no-parameter-properties': 'off',

    // 不允许变量重复声明
    // Disallow variable redeclaration
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',

    // 禁止调用require()
    // Disallows invocation of require()
    '@typescript-eslint/no-require-imports': 'off',

    // 当导入时不允许指定的模块
    // Disallow specified modules when loaded by import
    'no-restricted-imports': 'off',
    '@typescript-eslint/no-restricted-imports': 'off',

    // 禁止变量声明隐藏在外部作用域中声明的变量
    // Disallow variable declarations from shadowing variables declared in the outer scope
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',

    // 不允许混叠this
    // Disallow aliasing this
    '@typescript-eslint/no-this-alias': 'off',

    // 禁止将文字作为异常抛出
    // Disallow throwing literals as exceptions
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': 'off',

    // 禁止使用类型别名
    // Disallow the use of type aliases
    '@typescript-eslint/no-type-alias': 'off',

    // Flags unnecessary equality comparisons against boolean literals
    // 标记对布尔字面值不必要的相等比较
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

    // 防止类型总是真或总是假的条件句
    // Prevents conditionals where the type is always truthy or always falsy
    '@typescript-eslint/no-unnecessary-condition': 'off',

    // 当名称空间限定符不需要时发出警告
    // Warns when a namespace qualifier is unnecessary
    '@typescript-eslint/no-unnecessary-qualifier': 'off',

    // 强制在不需要的情况下不使用类型参数
    // Enforces that type arguments will not be used if not required
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',

    // 如果类型断言没有更改表达式的类型，则发出警告
    // Warns if a type assertion does not change the type of an expression
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',

    // 禁止对泛型类型的不必要约束
    // Disallows unnecessary constraints on generic types
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',

    // 禁止调用具有任何类型值的函数
    // Disallows calling a function with an any type value
    '@typescript-eslint/no-unsafe-argument': 'error',

    // 禁止为变量和属性指定任何值
    // Disallows assigning any to variables and properties
    '@typescript-eslint/no-unsafe-assignment': 'error',

    // 禁止调用任何类型的值
    // Disallows calling an any type value
    '@typescript-eslint/no-unsafe-call': 'error',

    // 禁止成员访问任何类型化变量
    // Disallows member access on any typed variables
    '@typescript-eslint/no-unsafe-member-access': 'error',

    // 禁止从函数返回任何值
    // Disallows returning any from a function
    '@typescript-eslint/no-unsafe-return': 'off',

    // 不允许未使用的表达式
    // Disallow unused expressions
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    }],

    // 不允许未使用的变量
    // Disallow unused variables
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    // 禁止在定义变量之前使用变量
    // Disallow the use of variables before they are defined
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['off', { functions: false, classes: true, variables: true }],

    // 禁止不必要的构造函数
    // Disallow unnecessary constructors
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    // 除了在import语句中，禁止使用require语句
    // Disallows the use of require statements except in import statements
    '@typescript-eslint/no-var-requires': 'off',

    // 如果可能，宁愿使用非空断言而不是显式类型强制转换
    // Prefers a non-null assertion over explicit type cast when possible
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',

    // 强制大括号内保持一致的空格
    // Enforce consistent spacing inside braces
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],

    // TODO: 规则不存在
    // 优要求或禁止在语句之间填充行
    // require or disallow padding lines between statements
    // 'padding-line-between-statements': 'off',
    // '@typescript-eslint/padding-line-between-statements': 'error',

    // 优先使用const而不是文字类型
    // Prefer usage of as const over literal type
    '@typescript-eslint/prefer-as-const': 'error',

    // 最好初始化每个枚举成员值
    // Prefer initializing each enums member value
    '@typescript-eslint/prefer-enum-initializers': 'off',

    // 如果索引只用于访问要迭代的数组，那么最好使用' for-of '循环而不是标准的' for '循环
    // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
    '@typescript-eslint/prefer-for-of': 'off',

    // 使用函数类型而不是具有呼叫签名的接口
    // Use function types instead of interfaces with call signatures
    '@typescript-eslint/prefer-function-type': 'off',

    // 强制include方法优于indexOf方法
    // Enforce includes method over indexOf method
    '@typescript-eslint/prefer-includes': 'off',

    // 要求所有枚举成员都是文字值，以防止意外的枚举成员名阴影问题
    // Require that all enum members be literal values to prevent unintended enum member name shadow issues
    '@typescript-eslint/prefer-literal-enum-member': 'off',

    // 要求使用namespace关键字而不是module关键字来声明自定义的TypeScript模块
    // Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
    '@typescript-eslint/prefer-namespace-keyword': 'off',

    // 强制使用空合并操作符而不是逻辑链接
    // Enforce the usage of the nullish coalescing operator instead of logical chaining
    '@typescript-eslint/prefer-nullish-coalescing': 'off',

    // 最好使用简洁的可选链表达式，而不是链式逻辑和
    // Prefer using concise optional chain expressions instead of chained logical ands
    '@typescript-eslint/prefer-optional-chain': 'off',

    // 要求函数参数的类型为只读，以防止输入的意外变异
    // Requires that function parameters are typed as readonly to prevent accidental mutation of inputs
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',

    // 如果私有成员从未在构造函数外部修改，则要求它们被标记为只读
    // Requires that private members are marked as readonly if they're never modified outside of the constructor
    '@typescript-eslint/prefer-readonly': 'off',

    // 当调用Array#reduce时，最好使用类型参数而不是强制类型转换
    // Prefer using type parameter when calling Array#reduce instead of casting
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',

    // 如果没有提供全局标志，则强制使用RegExp#exec而不是String#match
    // Enforce that RegExp#exec is used instead of String#match if no global flag is provided
    '@typescript-eslint/prefer-regexp-exec': 'off',

    // 强制当仅返回此类型时使用this
    // Enforce that this is used when only this type is returned
    '@typescript-eslint/prefer-return-this-type': 'off',

    // 强制使用String#startsWith和String#endsWith，而不是其他检查子字符串的等效方法
    // Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',

    // 建议使用@ts-expect-error而不是@ts-ignore
    // Recommends using @ts-expect-error over @ts-ignore
    '@typescript-eslint/prefer-ts-expect-error': 'error',

    // 要求任何返回Promise的函数或方法被标记为异步
    // Requires any function or method that returns a Promise to be marked async
    '@typescript-eslint/promise-function-async': 'error',

    // 强制一致使用反引号、双引号或单引号
    // Enforce the consistent use of either backticks, double, or single quotes
    quotes: 'off',
    '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],

    // 要求Array#sort调用总是提供一个compareFunctio
    // Requires Array#sort calls to always provide a compareFunction
    '@typescript-eslint/require-array-sort-compare': 'error',

    // 禁止没有await表达式的异步函数
    // Disallow async functions which have no await expression
    'require-await': 'off',
    '@typescript-eslint/require-await': 'error',

    // 相加加两个变量时，操作数必须都是number类型或string类型
    // When adding two variables, operands must both be of type number or of type string
    '@typescript-eslint/restrict-plus-operands': 'error',

    // 强制模板字面量表达式为字符串类型
    // Enforce template literal expressions to be of string type
    '@typescript-eslint/restrict-template-expressions': 'error',

    // 强制等待值的一致返回
    // Enforces consistent returning of awaited values
    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'error',

    // 要求或禁止使用分号代替ASI
    // Require or disallow semicolons instead of ASI
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'never'],

    // 强制类型联合/交集的成员按字母顺序排序
    // Enforces that members of a type union/intersection are sorted alphabetically
    '@typescript-eslint/sort-type-union-intersection-members': 'off',

    // 强制函数括号前的空格保持一致
    // Enforces consistent spacing before function parenthesis
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],

    // 该规则旨在确保中缀操作符周围有空格
    // This rule is aimed at ensuring there are spaces around infix operators
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': 'off',

    // 限制布尔表达式中允许的类型
    // Restricts the types allowed in boolean expressions
    '@typescript-eslint/strict-boolean-expressions': 'off',

    // 联合式开关的耗竭检查
    // Exhaustiveness checking in switch with union type
    '@typescript-eslint/switch-exhaustiveness-check': 'off',

    // 设置三斜杠指令与es6风格的导入声明的优先级
    // Sets preference level for triple slash directives versus ES6-style import declarations
    '@typescript-eslint/triple-slash-reference': 'error',

    // 要求类型注释周围保持一致的空格
    // Require consistent spacing around type annotations
    '@typescript-eslint/type-annotation-spacing': ['error', { before: false, after: true }],

    // 需要类型注释存在
    // Requires type annotations to exist
    '@typescript-eslint/typedef': [
      'error',
      {
        arrowParameter: true,
        variableDeclaration: true,
      },
    ],

    // 强制使用未绑定方法的预期范围调用
    // Enforces unbound methods are called with their expected scope
    '@typescript-eslint/unbound-method': 'error',

    // 对于任何两个可以通过使用union或可选/rest参数统一为一个的重载发出警告
    // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
    '@typescript-eslint/unified-signatures': 'error',
  },
}
