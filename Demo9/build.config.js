module.exports = {
  build_dir: 'build',
  compile_dir: 'dist',

  language_dir: 'src/lang',

  app_files: {
    js: [ 'src/**/*.js' ],

    templates: [ 'src/app/**/*.html' ],

    html: [ 'src/index.html' ],
    less: 'src/less/main.less'
  },

  vendor_files: {
    js: [
        'vendor/angular/angular.min.js',
        'vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
        'vendor/angular-ui-router/release/angular-ui-router.min.js',
        'vendor/ngstorage/ngStorage.min.js',
        'vendor/angular-gettext/dist/angular-gettext.min.js'
    ],
    css: [
        'vendor/bootstrap/dist/css/bootstrap.min.css'
    ],
    assets: [
    ]
  }
};
