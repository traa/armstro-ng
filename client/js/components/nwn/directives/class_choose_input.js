/*global $, console, define*/
define(['angular', '../module'], function (angular) {
    'use strict';

    angular
        .module('common.directives')
        .directive('nwnClassChooseInput', [function classChooseInputDir() {
            return {
                restrict: 'E',
                scope: {
                    gameclass: '='
                },
                link: function ($scope, $elem, $attrs) {},
                templateUrl: 'nwn/views/class_choose_input.html'
            };
        }]);
});