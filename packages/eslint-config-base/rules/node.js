module.exports = {
  env: {
    node: true,
  },
  rules: {
    // 强制数组方法的回调函数中有 return 语句
    // enforce return after a callback
    'callback-return': 'off',

    // 要求 require() 出现在顶层模块作用域中
    // require all requires be top-level
    // https://eslint.org/docs/rules/global-require
    'global-require': 'error',

    // 要求回调函数中有容错处理
    // enforces error handling in callbacks (node environment)
    'handle-callback-err': 'off',

    // 禁用 Buffer() 构造函数
    // disallow use of the Buffer() constructor
    // https://eslint.org/docs/rules/no-buffer-constructor
    'no-buffer-constructor': 'error',

    // 禁止混合常规变量声明和 require 调用
    // disallow mixing regular variable and require declarations
    'no-mixed-requires': ['off', false],

    // 禁止调用 require 时使用 new 操作符
    // disallow use of new operator with the require function
    'no-new-require': 'error',

    // 禁止对 __dirname 和 __filename 进行字符串连接
    // disallow string concatenation with __dirname and __filename
    // https://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 'error',

    // 禁用 process.env
    // disallow use of process.env
    'no-process-env': 'off',

    // 禁用 process.exit()
    // disallow process.exit()
    'no-process-exit': 'off',

    // 禁用通过 require 加载的指定模块
    // restrict usage of specified node modules
    'no-restricted-modules': 'off',

    // 禁用同步方法
    // disallow use of synchronous methods (off by default)
    'no-sync': 'off',
  },
}
