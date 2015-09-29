(function() {
    'use strict';

    angular
        .module('Demo9AppModule', [
            'templates-app',//necessary for build and compile!!!
            //angular module
            'ui.router',
            'ui.bootstrap',
            'gettext',
            'ngStorage',
            //layout
            'LayoutModule',
            //services
            'ServiceModule'
        ]);

})();
