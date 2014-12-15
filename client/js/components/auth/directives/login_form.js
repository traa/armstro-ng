/*global $, console, define*/
define(['angular', '../module'], function (angular) {
    'use strict';

    angular
        .module('auth.directives')
        .directive('loginForm', ['gettextCatalog', 'User', '$location', function loginFormDir(gettextCatalog, User, $location) {
            return {
                restrict: 'AE',
                scope: {},
                link: function ($scope, $elem, $attrs) {

                    $scope.emailPlaceholder = gettextCatalog.getString('Enter your email address to login');

                    $scope.passwordPlaceholder = gettextCatalog.getString('Enter your password to login');

                    $scope.login = function (user) {
                        User.login({
                            rememberMe: user.rememberme
                        }, {
                            email: user.email,
                            password: user.password
                        }).$promise.then(function (data) {

                            var next = $location.nextAfterLogin || '/';
                            $location.nextAfterLogin = null;
                            $location.path(next);
                            
                        });
                    }
                },
                templateUrl: 'auth/views/login_form.html'
            };
        }]);
});