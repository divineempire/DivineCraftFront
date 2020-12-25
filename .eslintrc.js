module.exports = {
  root: true,

  env: {
    node: true
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: [2, 'never'],
    quotes: [2, 'single'],
    'vue/return-in-computed-property': ['off', {
      treatUndefinedAsUnspecified: false
    }]
  },

  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/standard'
  ],
}
