module.exports = {
  root: true,

  env: {
    node: true
  },

  parserOptions: {
    parser: '@babel/eslint-parser'
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production'
      ? ['error', {
          allow: ['warn', 'error']
        }]
      : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'padding-line-between-statements': [2,
      {
        blankLine: 'always',
        prev: ['const', 'let'],
        next: '*'
      },
      {
        blankLine: 'never',
        prev: ['const', 'let'],
        next: ['const', 'let']
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      }],
    semi: [2, 'never'],
    quotes: [2, 'single'],
    'vue/return-in-computed-property': ['off', {
      treatUndefinedAsUnspecified: false
    }]
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/standard'
  ]
}
