import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  languageOptions: {
    parserOptions: {
      projectService: true,
    },
  },
  files: ['**/*.vue', '**/*.ts', '**/*.tsx'],
  rules: {
    'no-console': 'warn',
    'quotes': ['warn', 'single'],
    'max-len': ['warn', 120],
    'array-element-newline': ['warn', { multiline: true, minItems: 4 }],
    'function-paren-newline': ['warn', 'multiline-arguments'],
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 3 }],
    '@stylistic/semi': ['warn', 'always'],
    '@stylistic/comma-dangle': ['warn', 'never'],
    '@stylistic/no-tabs': 'off',
    '@stylistic/indent': ['warn', 'tab'],
    // @typescript-eslint
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/prefer-readonly': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    // Vue
    'vue/html-indent': ['warn', 'tab'],
    'vue/script-indent': ['warn', 'tab'],
  },
})
