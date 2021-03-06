module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'prefer-promise-reject-errors': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/prop-types': ['off'],
    'no-return-assign': ['off'],
    'global-require': ['off'],
    'no-multi-assign': ['warn'],
    'no-empty': ['warn'],
    'react/no-danger': ['off'],
    'no-shadow': ['off'],
    'react/forbid-prop-types': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'no-unused-vars': ['off'],
    radix: ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/no-static-element-interactions': ['off'],
    'jsx-a11y/no-noninteractive-element-interactions': ['off'],
    'no-console': ['off'],
  },
};
