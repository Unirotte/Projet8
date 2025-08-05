const purgecss = require('@fullhuman/postcss-purgecss').default;

module.exports = {
  plugins: [
    purgecss({
      content: ['./index.html', './assets/scripts.js', './assets/maugallery.js', './assets/bootstrap/bootstrap.bundle.js'],
      safelist: [
        'show', 'collapse', 'active', 'modal', 'fade', 'open', 'dropdown-menu', 
        /^btn/, /^nav/, /^carousel/, /^alert/, /^tooltip/
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
};