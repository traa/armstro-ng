/*global $, console, define*/
define(['angular', '../module'], function (angular) {
    'use strict';

    angular
        .module('common.directives')
        .directive('sideForumList', [function sideForumListDir() {
            return {
                restrict: 'AE',
                scope: {
                    isauth: '='
                },
                link: function ($scope, $elem, $attrs) {},
                templateUrl: 'common/views/side_forum_list.html'
            };
        }]);
});