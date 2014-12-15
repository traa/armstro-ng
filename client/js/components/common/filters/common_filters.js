define(['angular', '../module'], function (angular) {
    'use strict';
    angular
        .module('common.filters')
        .filter('unsafeHtml', ['$sce', function ($sce) {
            return function (val) {
                return $sce.trustAsHtml(val);
            };
    }]);
});