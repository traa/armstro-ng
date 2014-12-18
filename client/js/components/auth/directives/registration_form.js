/*global $, console, define*/
define(['angular', '../module'], function (angular) {
    'use strict';

    angular
        .module('auth.directives')
        .directive('registrationForm', ['gettextCatalog', 'User', '$location', function loginFormDir(gettextCatalog, User, $location) {
            return {
                restrict: 'AE',
                scope: {},
                link: function ($scope, $elem, $attrs) {

                    $scope.user = {};

                    $scope.emailPlaceholder = gettextCatalog.getString('Enter your email address to signup');

                    $scope.passwordPlaceholder = gettextCatalog.getString('Enter your password to signup');

                    $scope.reg = function(user) {

                        console.log(user);
                        
                        if (false && user.password === user.passwordrepeat 
                            && user.email
                            && user.iagree 
                            && user.gameclass) {

                            //doing smth with User
                            var newUser = User.create({
                                email: user.email, 
                                password: user.password, 
                                gameclass: user.gameclass
                            });

                            newUser.$promise.then(function(data) {
                                if (data.id) {
                                    
                                    User.login({
                                        rememberMe: true
                                    }, {
                                        email: user.email,
                                        password: user.password
                                    }).$promise.then(function (data) {

                                        //data.user

                                        console.log('token', data);
                                        $location.path('/');
                                    });
                                    
                                }
                            });
                            
                        }

                    };

                },
                templateUrl: 'auth/views/registration_form.html'
            };
        }]);
});