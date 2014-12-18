define(['angular'], function (angular) {

    'use strict';
    angular.module('app.controllers', []);

    //adding templates as dependencies
    angular.module('app.directives', []);

    return angular.module('app', [
        'common',
        'gettext',
        'app.config',
        'app.controllers',
        'app.directives',
        'bars',
        'auth',
        'nwn'
    ]);
});