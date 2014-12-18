/*global $, console, define*/
define(['angular', '../module'], function (angular) {
    'use strict';

    angular
        .module('common.directives')
        .directive('jqDropdown', ['$timeout', function jqDropdownDir($timeout) {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function ($scope, $elem, $attrs, ngModel) {

                   
                        $elem.dropdown({
                            "change": function (val) {
                                $scope.$apply(function() {
                                    ngModel.$setViewValue(val);
                                });
                                
                            },
                            "callback": function ($dropdown) {                                                       
                                
                            }
                        });
                

                    ngModel.$render = function () {
                        ngModel.$setViewValue($elem.val());
                    };
                  

                    //$scope.$destroy();

                }
            };
        }]);
});