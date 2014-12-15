/*global $, console, define*/
define(['angular', '../module'], function (angular) {
    'use strict';

    angular
        .module('common.directives')
        .directive('idGen', [function idGenDirective() {
            return {
                restrict: 'A',
                scope: {
                    idGen: '@',
                    widgetPrefix: '@'
                },
                link: function ($scope, $elem, $attrs) {
                    var newId;
                    /*Only work when no id set AND if some base value passed to directive*/
                    if (!$attrs.id && $scope.idGen && $scope.idGen.length > 0) {
                        newId = $scope.idGen.toLowerCase().replace(/[\s\(\)\'\,\.#]/g, '_');

                        newId = ($scope.widgetPrefix || $elem.closest('[widget-prefix]').attr('widget-prefix') || '') + '_' + newId;

                        $elem.attr('id', newId);
                    }

                    $scope.$destroy();

                }
            };
        }]);
});