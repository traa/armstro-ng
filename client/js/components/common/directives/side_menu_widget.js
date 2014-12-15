/*global $, console, define*/
define(['angular', '../module'], function (angular) {
    'use strict';

    angular
        .module('common.directives')
        .directive('sideMenuWidget', [function sideMenuWidgetDir() {
            return {
                restrict: 'AE',
                scope: {
                    isauth: '='
                },
                link: function ($scope, $elem, $attrs) {
                    $scope.curState = '';
                    console.log($scope.isauth);
                },
                templateUrl: 'common/views/side_menu_widget.html'
            };
        }]);
});