/**
 * @namespace common
 */
define(['angular'], function (angular) {
    'use strict';

    
    angular.module('nwn.directives', [
            'nwn/views/class_choose_input.html'
        ]);
    return angular.module('nwn', [
        'nwn.directives'
    ]);
});