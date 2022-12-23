module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  ignorePatterns: ['__tests__/*.js'],
  rules: {
    semi: ['error', 'always']
    // 'no-unused-vars': 1,
    // 'no-undef': 1
  }
};
