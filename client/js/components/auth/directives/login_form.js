/*global $, console, define*/
define(['angular', '../module'], function (angular) {
    'use strict';

    angular
        .module('auth.directives')
        .directive('loginForm', ['gettextCatalog', function loginFormDir(gettextCatalog) {
            return {
                restrict: 'AE',
                scope: {},
                link: function ($scope, $elem, $attrs) {

                    $scope.emailPlaceholder = gettextCatalog.getString('Enter your email address to login');

                    $scope.passwordPlaceholder = gettextCatalog.getString('Enter your password to login');

                },
                templateUrl: 'auth/views/login_form.html'
            };
        }]);
});