(function() {
    'use strict';

    angular
        .module('Demo8AppModule', [
            'templates-app',//necessary for build and compile!!!
            //angular module
            'ui.router',
            'ui.bootstrap',
            'ngStorage',
            //layout
            'LayoutModule',
            //services
            'ServiceModule'
        ]);

})();
