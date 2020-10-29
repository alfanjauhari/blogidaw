module.exports = {
  root: true,
  extends: ['blvd/react', 'prettier', 'prettier/@typescript-eslint', 'prettier/react', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-props-no-spreading': 'off',
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'react/no-danger': 'off',
    'prefer-destructuring': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'no-nested-ternary': 'off'
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        warnOnUnsupportedTypeScriptVersion: true
      },
      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'spaced-comment': [
          'error',
          'always',
          {
            markers: ['/']
          }
        ],
        'import/no-unresolved': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_'
          }
        ]
      }
    },
    {
      files: ['.eslintrc.js', '*.config.js'],
      parserOptions: {
        sourceType: 'script'
      },
      env: {
        node: true
      }
    }
  ]
};
