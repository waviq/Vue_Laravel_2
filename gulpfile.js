var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
    mix.sass('app.scss');
    mix.styles([
        'node_modules/bootstrap/dist/css/bootstrap.css',
        'public/css/main.css'

    ],'public/css/main.css','./');
    // mix.copy('node_modules/bootstrap', 'public/css/bootstrap');
    mix.browserify('main.js');
    // mix.version('css/app.css');
    mix.version('js/main.js');

});
