/*global $, console, define*/
define(['angular', '../module'], function (angular) {
    'use strict';

    angular
        .module('common.directives')
        .directive('jqTooltip', [function jqTooltipDir() {
            return {
                restrict: 'A',
                scope: {},
                link: function ($scope, $elem, $attrs) {

                    $elem.tooltip();
                  

                    $scope.$destroy();

                }
            };
        }]);
});