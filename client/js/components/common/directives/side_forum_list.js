/*global $, console, define*/
define(['angular', '../module'], function (angular) {
    'use strict';

    angular
        .module('common.directives')
        .directive('sideForumList', ['UISync', function sideForumListDir(UISync) {
            return {
                restrict: 'AE',
                scope: {
                    isauth: '='
                },
                link: function ($scope, $elem, $attrs) {

                    $scope.mode = 'normal';

                    $scope.$watch(function () {
                        return UISync.getMode('side-forum-list');
                    }, function (newVal, oldVal) {
                        if (newVal !== oldVal) {
                            $scope.mode = newVal;
                        }
                    });

                },
                templateUrl: 'common/views/side_forum_list.html'
            };
        }]);
});