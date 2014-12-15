/*global $, console, define*/
define(['angular', '../module'], function (angular) {
    'use strict';

    angular
        .module('bars.directives')
        .directive('headerNavbar', [ 'User', function headerDirective(User) {
            return {
                restrict: 'AE',
                scope: {
                    isauth: '='
                },
                link: function ($scope, $elem, $attrs) {

                    $scope.logout = function () {
                        User.logout();
                    };
                
                },
                templateUrl: 'bars/views/header_layout.html'
            };
        }]);
});