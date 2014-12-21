/*global $, console, define*/
define(['angular', '../module'], function (angular) {
    'use strict';

    angular
        .module('common.directives')
        .directive('jqEasyPieChart', [function jqEasyPieChartDir() {
            return {
                restrict: 'AE',
                link: function ($scope, $elem, $attrs) {

                    console.log('eas', $attrs);

                    $elem.easyPieChart({
                        easing: 'easeOutBounce',
                        onStep: function(from, to, percent) {
                            $elem.find('.percent').text(Math.round($attrs.percent));
                        },
                        barColor: '#3498db',
                        trackColor: '#f2f2f2',
                        scaleColor: false,
                        lineWidth: 8,
                        size: 130,
                        animate: 1500
                    });

                }
            };
        }]);
});