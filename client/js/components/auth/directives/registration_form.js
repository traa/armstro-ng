/*global $, console, define*/
define(['angular', '../module'], function (angular) {
    'use strict';

    angular
        .module('auth.directives')
        .directive('registrationForm', ['gettextCatalog', 'User', function loginFormDir(gettextCatalog, User) {
            return {
                restrict: 'AE',
                scope: {},
                link: function ($scope, $elem, $attrs) {

                    $scope.user = {};

                    $scope.emailPlaceholder = gettextCatalog.getString('Enter your email address to signup');

                    $scope.passwordPlaceholder = gettextCatalog.getString('Enter your password to signup');

                    $scope.reg = function(user) {
                        console.log(user);

                        if (user.password === user.passwordrepeat 
                            && user.iagree 
                            && user.gameclass) {

                            //doing smth with User
                            User.create({email: 'foo@bar.com', password: 'bar'}, function(err, user) {
                                console.log(user);
                            });
                        }

                    };

                },
                templateUrl: 'auth/views/registration_form.html'
            };
        }]);
});