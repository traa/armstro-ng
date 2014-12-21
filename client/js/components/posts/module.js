/**
 * @namespace posts
 */
define(['angular'], function (angular) {
    'use strict';

    
    angular.module('posts.directives', [
            'posts/views/posts_list.html'
        ]);
    return angular.module('posts', [
        'posts.directives'
    ]);
});