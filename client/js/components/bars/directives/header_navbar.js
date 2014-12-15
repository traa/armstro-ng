/*global $, console, define*/
define(['angular', '../module'], function (angular) {
    'use strict';

    angular
        .module('bars.directives')
        .directive('headerNavbar', [ 'User', function headerDirective(User) {
            return {
                restrict: 'AE',
                scope: {},
                link: function ($scope, $elem, $attrs) {

                    $scope.isAuthenticated = User.isAuthenticated();


                    $scope.$watch(function () {

                        return User.isAuthenticated();

                    }, function (newVal, oldVal) {

                        //if authenticated
                        if (newVal !== oldVal) {
                            $scope.isAuthenticated = newVal;
                        }

                    });

                    $scope.logout = function () {
                        User.logout();
                    };
                
                },
                templateUrl: 'bars/views/header_layout.html'
            };
        }]);
});