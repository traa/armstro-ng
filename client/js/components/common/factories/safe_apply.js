define(['angular', '../module'], function (angular) {
    'use strict';

    return angular
        .module('common.factories')
        .factory('safeApply', ['$rootScope', function ($rootScope) {
            return function($scope, fn) {
                var phase = $scope.$root.$$phase;
                if (phase === '$apply' || phase === '$digest') {
                    if (fn) {
                        $scope.$eval(fn);
                    }
                } else {
                    if (fn) {
                        $scope.$apply(fn);
                    } else {
                        $scope.$apply();
                    }
                }
            };
        }]);
});
