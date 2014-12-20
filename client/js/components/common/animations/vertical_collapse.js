/*global $, console, define*/
define(['angular', '../module'], function (angular) {
    'use strict';

    angular
        .module('common.animations')
        .animation('.ar-vertical-collapse', [function vertCollapseAnim() {
            return {
                enter: function (element, parentElement, afterElement) {
                    console.log(element, parentElement, afterElement);
                },
                /**
                *   fired first
                **/
                leave: function (element) {
                    element.animate({
                        width: '75px'
                    })
                }
            };
        }]);
});