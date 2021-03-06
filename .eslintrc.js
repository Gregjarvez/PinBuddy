// Apply best pratices by enabling eslint:recommended
// Never repeat rules that eslint:recommended sets as a default
// Explicitly add more rules categorized in categories taken from official docs

module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    }
  },

  parser: 'babel-eslint',

  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    worker: true,
    amd: true,
    mocha: true,
    jasmine: true,
    jest: true,
    qunit: true,
    jquery: true,
    mongo: true,
    applescript: true,
    serviceworker: true,
  },

  plugins: [
    'react'
  ],

  settings: {
    react: {
      version: "16.5.0",
    }
  },

  rules: {
    // Possible Errors
    // https://eslint.org/docs/rules/#possible-errors
    'for-direction': 2,
    'getter-return': 2,
    'no-await-in-loop': 2,
    'no-compare-neg-zero': 2,
    'no-cond-assign': 2,
    'no-console': 1,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    // 'no-extra-parens': 0,
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-obj-calls': 2,
    'no-prototype-builtins': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-template-curly-in-string': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unsafe-negation': 2,
    'use-isnan': 2,
    'valid-jsdoc': 1,
    'valid-typeof': 2,

    // vars-on-top
    // https://eslint.org/docs/rules/#best-practices
    'accessor-pairs': 2,
    'array-callback-return': 2,
    'block-scoped-var': 2,
    // 'class-methods-use-this': 2,
    // 'complexity': 0,
    'consistent-return': 2,
    'curly': 2,
    'default-case': 2,
    'dot-location': [
      2,
      'property'
    ],
    'dot-notation': 2,
    'eqeqeq': 2,
    // 'guard-for-in': 0,
    'max-classes-per-file': 2,
    'no-alert': 1,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-div-regex': 2,
    'no-else-return': 2,
    'no-empty-function': 2,
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    // 'no-fallthrough': 0,
    'no-floating-decimal': 2,
    'no-global-assign': 2,
    // 'no-implicit-coercion': 0,
    // 'no-implicit-globals': 0,
    'no-implied-eval': 2,
    // 'no-invalid-this': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    // 'no-magic-numbers': 1,
    'no-multi-spaces': 2,
    // 'no-multi-str': 0,
    // 'no-new': 0,
    // 'no-new-func': 0,
    // 'no-new-wrappers': 0,
    'no-octal': 2,
    'no-octal-escape': 2,
    // 'no-param-reassign': 0,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-restricted-properties': 2,
    // 'no-return-assign': 0,
    'no-return-await': 2,
    'no-script-url': 2,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': 2,
    'no-unused-labels': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-useless-escape': 2,
    'no-useless-return': 2,
    'no-void': 2,
    'no-warning-comments': 2,
    'no-with': 2,
    'prefer-promise-reject-errors': 2,
    'radix': 2,
    'require-await': 2,
    // 'vars-on-top': 0,
    'wrap-iife': [
      2,
      'inside'
    ],
    'yoda': [
      2,
      'never'
    ],

    // Strict Mode
    strict: 2,

    // Variables
    'init-declarations': [
      2,
      'always'
    ],
    'no-label-var': 2,
    'no-undef-init': 2,
    'no-undefined': 2,
    'no-use-before-define': 2,

    // Stylistic Issues
    'array-bracket-spacing': [
      1,
      'never'
    ],
    'block-spacing': [
      2,
      'always'
    ],
    'brace-style': [
      2,
      'stroustrup',
      {
        allowSingleLine: true
      }
    ],
    camelcase: 2,
    'comma-dangle': [
      2,
      'only-multiline'
    ],
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'comma-style': [
      2,
      'last'
    ],
    'computed-property-spacing': [
      2,
      'never'
    ],
    'eol-last': 2,
    'func-call-spacing': [
      2,
      'never'
    ],
    'func-names': [
      1,
      'always'
    ],
    indent: [
      2,
      2
    ],
    'jsx-quotes': [
      2,
      'prefer-double'
    ],
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'keyword-spacing': 2,
    'line-comment-position': [
      2,
      {
        position: 'above'
      }
    ],
    'linebreak-style': [
      2,
      'unix'
    ],
    'lines-around-directive': [
      2,
      'always'
    ],
    'max-depth': 2,
    'new-parens': 2,
    'no-lonely-if': 2,
    'no-nested-ternary': 2,
    'no-tabs': 2,
    'no-trailing-spaces': 2,
    // 'no-underscore-dangle': 0,
    'no-unneeded-ternary': 2,
    'no-whitespace-before-property': 2,
    'object-curly-spacing': [
      2,
      'always'
    ],
    'object-property-newline': 2,
    'one-var-declaration-per-line': [
      2,
      'always'
    ],
    'one-var': [
      2,
      'never'
    ],
    'operator-assignment': [
      2,
      'always'
    ],
    'quote-props': [
      2,
      'as-needed'
    ],
    quotes: [
      2,
      'single'
    ],
    'semi-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    semi: [
      2,
      'always'
    ],
    'space-before-blocks': 2,
    'space-before-function-paren': [
      2,
      'never'
    ],
    'space-in-parens': [
      2,
      'never'
    ],
    'space-infix-ops': 2,
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false
      }
    ],
    'spaced-comment': [
      2,
      'always'
    ],

    // ECMAScript 6
    'arrow-parens': [
      2,
      'as-needed'
    ],
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'generator-star-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'no-confusing-arrow': 2,
    'no-const-assign': 2,
    'no-duplicate-imports': 2,
    'no-restricted-imports': 2,
    'no-this-before-super': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-rename': 2,
    'no-var': 2,
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-destructuring': [
      2,
      {
        array: false,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      }
    ],
    'prefer-template': 2,
    'require-yield': 2,
    'template-curly-spacing': [
      2,
      'never'
    ],

    // React plugin specific rules
    'react/no-direct-mutation-state': 2,
    'react/no-multi-comp': 2,
    'react/no-string-refs': 2,
    'react/no-unescaped-entities': 2,
    'react/no-unknown-property': 2,
    'react/prefer-es6-class': 2,
    'react/prefer-stateless-function': 2,
    'react/react-in-jsx-scope': 2,
    'react/prop-types': 2,
    'react/require-default-props': 2,
    'react/self-closing-comp': 2,
    'react/jsx-boolean-value': 2,
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-closing-tag-location': 2,
    'react/jsx-curly-spacing': [
      2,
      {
        when: 'never',
      }
    ],
    'react/jsx-indent': [
      2,
      2
    ],
    'react/jsx-no-bind': [
      2,
      {
        'ignoreRefs': true,
        'allowArrowFunctions': true,
        'allowBind': false,
      }
    ],
    'react/jsx-key': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-target-blank': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': [
      2,
    ],
    'react/jsx-tag-spacing': [
      2,
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never'
      }
    ],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': 2,
  }
};
