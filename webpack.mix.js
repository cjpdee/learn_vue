const mix = require('laravel-mix');

mix.js(`calculator/src/main.js`, `calculator/dist/main.js`);

// mix.copy(`fccTut/index.html`, `dist/index.html`);

mix.browserSync({
	proxy: '',
	server: 'calculator/',
	files: ['calculator/src/*/*'],
});
