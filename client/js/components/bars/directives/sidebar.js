/*global $, console, define*/
define(['angular', '../module'], function (angular) {
    'use strict';

    angular
        .module('bars.directives')
        .directive('sidebar', [function sidebarDirective() {
            return {
                restrict: 'AE',
                scope: {},
                link: function ($scope, $elem, $attrs) {
                
                },
                templateUrl: 'bars/views/side_layout.html'
            };
        }]);
});