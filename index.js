module.exports = {
  extends: ['eslint:recommended', 'airbnb'],
  env: {
    mocha: true
  },
  plugins: ['chai-friendly'],
  rules: {
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2,
    'comma-dangle': 0
  }
};
