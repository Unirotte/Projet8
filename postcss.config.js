const purgecss = require('@fullhuman/postcss-purgecss').default;

module.exports = {
  plugins: [
    purgecss({
      content: ['./index.html', './assets/**/*.js'],
      safelist: [
        'show', 'collapse', 'active', 'modal', 'fade', 'open', 'dropdown-menu', 
        /^btn/, /^nav/, /^carousel/, /^alert/, /^tooltip/
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
};