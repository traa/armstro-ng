/*global require, define, angular*/
require.config({

    packages: [
        {
            name: 'app',
            location: 'components/app'
        },
       
        {
            name: 'common',
            location: 'components/common'
        }
    ],
    paths: {
        angular: '../bower_components/angular/angular.min',
        uiRouter: '../bower_components/angular-ui-router/release/angular-ui-router.min',

        jquery: '../bower_components/jquery/dist/jquery.min',

        ngMocks: './lib/angular-mocks',
        ngGetText: './lib/angular-gettext.min',
        ngCookies: './lib/angular-cookies.min',
        localStorage: './lib/angular-local-storage.min',

        ngSanitize: './lib/angular-sanitize'
    },
    shim: {
        angular : {
            deps: ['jquery'],
            exports: 'angular'
        },

        ngGetText: {
            deps: ['angular']
        },
        uiRouter: {
            deps: ['angular']
        },
        ngSanitize: {
            deps: ['angular']
        },
        ngMocks: {
            deps: ['angular']
        },
        ngCookies: {
            deps: ['angular']
        },
        localStorage: {
            deps: ['angular']
        }
    }
});

require(['bundles/nglib'],
    function () {
        
        require([
            'bundles/app',
            'bundles/lib',
            'bundles/partials'
        ],
            function (a, b, c) {

                    angular.element().ready(function () {
                        angular.bootstrap(document, ['app']);
                    });
            });
    });
define("main", function(){});

