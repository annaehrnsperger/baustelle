module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
    requireConfigFile: false,
  },
  extends: ['plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    'no-console': 1,
    'vue/multi-word-component-names': 0,
    'vue/require-default-prop': 0,
    'vue/require-explicit-emits': 0,
    'vue/no-unused-vars': 1,
  },
};
