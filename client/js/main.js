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
        },
        {
            name: 'posts',
            location: 'components/posts'
        }
    ],
    paths: {
        angular: '../bower_components/angular/angular.min',
        uiRouter: '../bower_components/angular-ui-router/release/angular-ui-router.min',
        ngAnimate: '../bower_components/angular-animate/angular-animate.min',
        angularLoadingBar: './lib/angular-loading-bar',

        jquery: '../bower_components/jquery/dist/jquery.min',
        jqDropdown: './lib/jquery.dropdown',
        jqEasyPieChart: './lib/jquery.easypiechart.min',

        ngResource: '../bower_components/angular-resource/angular-resource.min',

        ngMocks: './lib/angular-mocks',
        ngGetText: './lib/angular-gettext.min',
        ngCookies: './lib/angular-cookies.min',
        localStorage: './lib/angular-local-storage.min',


        scripts: './lib/scripts',
        pace: './lib/pace.min',
        gridalicious: './lib/jquery.grid-a-licious.min',
        nanoscroller: './lib/jquery.nanoscroller.min',

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

        angularLoadingBar: {
            deps: ['angular']
        },

        jqEasyPieChart: {
            deps: ['jquery']
        },

        gridalicious: {
            deps: ['jquery']
        },

        nanoscroller: {
            deps: ['jquery']
        },

        ngAnimate: {
            deps: ['angular']
        },

        scripts: {
            deps: ['jquery', 'nanoscroller', 'gridalicious']
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

                       

                        angular.bootstrap(document, ['app']);
                    });
            });
    });