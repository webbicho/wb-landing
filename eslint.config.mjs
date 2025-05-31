import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  languageOptions: {
    parserOptions: {
      projectService: true,
    },
  },
  files: ['**/*.vue', '**/*.ts', '**/*.tsx', '**/*.mjs'],
  rules: {
    'no-console': 'warn',
    'quotes': ['warn', 'single'],
    'max-len': ['warn', 120],
    'array-element-newline': ['warn', { multiline: true, minItems: 4 }],
    'function-paren-newline': ['warn', 'multiline-arguments'],
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 3 }],
    'semi': ['warn', 'always'],
    'comma-dangle': ['warn', 'never'],
    // @typescript-eslint
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/prefer-readonly': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    // Indent TS and Vue
    'indent': ['warn', 'tab'],
    'vue/html-indent': ['warn', 'tab'],
    'vue/script-indent': ['warn', 'tab'],
  },
})
