/*global $, console, define*/
define(['angular', '../module'], function (angular) {
    'use strict';

    angular
        .module('common.directives')
        .directive('arTooltip', [function arTooltipDir() {
            return {
                restrict: 'AE',
                link: function ($scope, $elem, $attrs) {

                    console.log($attrs);
                           
                    $elem.tooltip({
                                placement: $attrs.placement || 'top'
                    });

                }
            };
        }]);
});