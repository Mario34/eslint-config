module.exports = {
  rules: {
    // 要求成员重载是连续的
    // Require that member overloads be consecutive
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    // TODO: 依赖.tsconfig.json
    // 禁止等待不是Promise类型的值
    // Disallows awaiting a value that is not a Thenable
    // '@typescript-eslint/await-thenable': 'error',

    // 需要对数组使用T[]或Array<T>
    // Requires using either T[] or Array<T> for arrays
    '@typescript-eslint/array-type': 'error',

    // 禁止泛型数组构造函数
    // Disallow generic Array constructors
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',

    // 强制默认参数是最后一个
    // Enforce default parameters to be last
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',

    // TODO: 依赖.tsconfig.json
    // 禁止使用类似eval()的方法
    // Disallow the use of eval()-like methods
    // 'no-implied-eval': 'off',
    // '@typescript-eslint/no-implied-eval': 'error',

    // 禁止显式声明初始化为数字、字符串或布尔值的变量或参数的类型
    // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
    '@typescript-eslint/no-inferrable-types': 'error',

    // 禁止失去精度的文字数
    // Disallow literal numbers that lose precision
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'off',

    // 强制new和constructor的有效定义
    // Enforce valid definition of new and constructor
    '@typescript-eslint/no-misused-new': 'error',

    // TODO: 依赖.tsconfig.json
    // 避免在不是用来处理承诺的地方使用承诺
    // Avoid using promises in places not designed to handle them
    // '@typescript-eslint/no-misused-promises': 'error',

    // 禁止使用自定义的TypeScript模块和命名空间
    // Disallow the use of custom TypeScript modules and namespaces
    '@typescript-eslint/no-namespace': 'error',

    // 禁止在可选链表达式后使用非空断言
    // Disallows using a non-null assertion after an optional chain expression
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

    // TODO: 依赖.tsconfig.json
    // 如果类型断言没有更改表达式的类型，则发出警告
    // Warns if a type assertion does not change the type of an expression
    // '@typescript-eslint/no-unnecessary-type-assertion': 'error',

    // 禁止对泛型类型的不必要约束
    // Disallows unnecessary constraints on generic types
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',

    // TODO: 依赖.tsconfig.json
    // 禁止调用具有任何类型值的函数
    // Disallows calling a function with an any type value
    // '@typescript-eslint/no-unsafe-argument': 'error',

    // TODO: 依赖.tsconfig.json
    // 禁止为变量和属性指定任何值
    // Disallows assigning any to variables and properties
    // '@typescript-eslint/no-unsafe-assignment': 'error',

    // TODO: 依赖.tsconfig.json
    // 禁止调用任何类型的值
    // Disallows calling an any type value
    // '@typescript-eslint/no-unsafe-call': 'error',

    // TODO: 依赖.tsconfig.json
    // 禁止成员访问任何类型化变量
    // Disallows member access on any typed variables
    // '@typescript-eslint/no-unsafe-member-access': 'error',

    // TODO: 依赖.tsconfig.json
    // 禁止没有await表达式的异步函数
    // Disallow async functions which have no await expression
    // 'require-await': 'off',
    // '@typescript-eslint/require-await': 'error',

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

    // 优先使用const而不是文字类型
    // Prefer usage of as const over literal type
    '@typescript-eslint/prefer-as-const': 'error',

    // 建议使用@ts-expect-error而不是@ts-ignore
    // Recommends using @ts-expect-error over @ts-ignore
    '@typescript-eslint/prefer-ts-expect-error': 'error',

    // TODO: 依赖.tsconfig.json
    // 要求任何返回Promise的函数或方法被标记为异步
    // Requires any function or method that returns a Promise to be marked async
    // '@typescript-eslint/promise-function-async': 'error',

    // TODO: 依赖.tsconfig.json
    // 相加加两个变量时，操作数必须都是number类型或string类型
    // When adding two variables, operands must both be of type number or of type string
    // '@typescript-eslint/restrict-plus-operands': 'error',

    // 强制模板字面量表达式为字符串类型
    // Enforce template literal expressions to be of string type
    '@typescript-eslint/restrict-template-expressions': ['off', {
      // if true, also allow number type in template expressions
      allowNumber: true,
      // if true, also allow boolean type in template expressions
      allowBoolean: true,
      // if true, also allow any in template expressions
      allowAny: true,
      // if true, also allow null and undefined in template expressions
      allowNullish: true,
      // if true, also allow RegExp in template expressions
      allowRegExp: true,
    }],

    // TODO: 依赖.tsconfig.json
    // 强制等待值的一致返回
    // Enforces consistent returning of awaited values
    // 'no-return-await': 'off',
    // '@typescript-eslint/return-await': 'error',

    // TODO: 依赖.tsconfig.json
    // 强制使用未绑定方法的预期范围调用
    // Enforces unbound methods are called with their expected scope
    // '@typescript-eslint/unbound-method': 'error',
  },
}
