module.exports = {
  extends: ['eslint:recommended', 'airbnb', 'prettier'],
  env: {
    mocha: true
  },
  plugins: ['chai-friendly', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { "singleQuote": true, "printWidth": 200 }],
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2,
    'comma-dangle': 0
  }
};
