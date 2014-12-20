define(['angular', '../module' ], function (angular) {
    'use strict';
    angular
        .module('app.controllers')
        .controller('HomeCtrl', ['$scope', 'UISync', function HomeCtrl($scope, UISync) {

            $scope.selectThread = function () {
                UISync.setMode('side-forum-list', 'collapsed');
            };

        }]);
});