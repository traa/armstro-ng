/*global $, console, define*/
define(['angular', '../module'], function (angular) {
    'use strict';

    angular
        .module('posts.directives')
        .directive('postsList', [function postsListDir() {
            return {
                restrict: 'E',
                scope: {

                },
                link: function ($scope, $elem, $attrs) {

                },
                templateUrl: 'posts/views/posts_list.html'
            };
        }]);
});