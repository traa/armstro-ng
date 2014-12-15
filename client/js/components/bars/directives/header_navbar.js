/*global $, console, define*/
define(['angular', '../module'], function (angular) {
    'use strict';

    angular
        .module('bars.directives')
        .directive('headerNavbar', [function headerDirective() {
            return {
                restrict: 'AE',
                scope: {},
                link: function ($scope, $elem, $attrs) {
                
                },
                templateUrl: 'bars/views/header_layout.html'
            };
        }]);
});