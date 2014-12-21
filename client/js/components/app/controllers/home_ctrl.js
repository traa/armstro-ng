define(['angular', '../module' ], function (angular) {
    'use strict';
    angular
        .module('app.controllers')
        .controller('HomeCtrl', ['$scope', 'UISync', function HomeCtrl($scope, UISync) {

            $scope.showThread = function () {
                // UISync.setMode('side-forum-list', 'collapsed');

                var threadBlock = angular.element('#threadsListSection'),
                	postBlock = angular.element('#postsListSection'),
                	pageWrapper = angular.element('#page-wrapper');


                threadBlock.removeClass('col-lg-6').addClass('col-lg-5');
                postBlock.removeClass('col-lg-6').addClass('col-lg-7');
                pageWrapper.addClass('nav-small');

                $scope.threadChosen = true;

                
            };



        }]);
});