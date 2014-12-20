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
        },
        {
            name: 'bars',
            location: 'components/bars'
        },
        {
            name: 'auth',
            location: 'components/auth'
        },
        {
            name: 'nwn',
            location: 'components/nwn'
        }
    ],
    paths: {
        angular: '../bower_components/angular/angular.min',
        uiRouter: '../bower_components/angular-ui-router/release/angular-ui-router.min',
        ngAnimate: '../bower_components/angular-animate/angular-animate.min',

        jquery: '../bower_components/jquery/dist/jquery.min',
        jqDropdown: './lib/jquery.dropdown',

        ngResource: '../bower_components/angular-resource/angular-resource.min',

        ngMocks: './lib/angular-mocks',
        ngGetText: './lib/angular-gettext.min',
        ngCookies: './lib/angular-cookies.min',
        localStorage: './lib/angular-local-storage.min',

        ngSanitize: './lib/angular-sanitize',

        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min',
        ripples: '../bower_components/bootstrap-material-design/dist/js/ripples.min',
        material: '../bower_components/bootstrap-material-design/dist/js/material.min'
    },
    shim: {
        angular : {
            deps: ['jquery'],
            exports: 'angular'
        },

        ngAnimate: {
            deps: ['angular']
        },

        bootstrap: {
            deps: ['jquery']
        },

        jqDropdown: {
            deps: ['jquery', 'bootstrap']
        },

        ngResource: {
            deps: ['angular']
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
        'use strict';
        require([
            'bundles/app',
            'bundles/lib',
            'bundles/partials'
        ],
            function (a, b, c) {

                    angular.element().ready(function () {

                        $.material.init();

                        angular.bootstrap(document, ['app']);
                    });
            });
    });