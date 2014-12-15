define(['angular'], function (angular) {
    'use strict';
    angular.module('bars.directives', [
        'bars/views/side_layout.html',
        'bars/views/header_layout.html',
        'bars/views/footer_layout.html'
        ]);


    return angular.module('bars', [
        'bars.directives'
    ]);
});