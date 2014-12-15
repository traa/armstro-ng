/*global $, console, define*/
define(['angular', '../module'], function (angular) {
    'use strict';

    angular
        .module('bars.directives')
        .directive('sidebar', [function sidebarDirective() {
            return {
                restrict: 'AE',
                scope: {
                    isauth: '='
                },
                link: function ($scope, $elem, $attrs) {
                    console.log($scope.isauth, $attrs.isauth);
                },
                templateUrl: 'bars/views/side_layout.html'
            };
        }]);
});