module.exports = {
  rules: {
    'complexity': ['warn', 12],
    'consistent-this': ['warn', 'that'],
    'curly': ['warn', 'all'],
    'linebreak-style': 'off',
    'no-multiple-empty-lines': 'warn',
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'no-unexpected-multiline': 'error',
    'object-curly-newline': ['off'],
    'semi': ['warn', 'never'],
    'valid-jsdoc': ['error'],
  },
}
