/*global $, console, define*/
define(['angular', '../module'], function (angular) {
    'use strict';

    angular
        .module('common.animations')
        .animation('.ar-vertical-collapse', [function vertCollapseAnim() {
            return {
                enter: function (element, done) {

                    $('#leftPane').animate({
                        width: '8%'
                    });

                    $('#rightPane').animate({
                        width: '42%'
                    });
                    
                    element.animate({
                        width: '75px'
                    }, done);
                    
                },
                /**
                *   fired first
                **/
                leave: function (element, done) {
                  done();
                }
            };
        }]);
});