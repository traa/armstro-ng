define(['angular', '../module' ], function (angular) {
    'use strict';
    angular
        .module('app.controllers')
        .controller('AppCtrl', ['$scope', 'Forum', 'User', function AppCtrl($scope, Forum, User) {

        	var self = this;

        	this.isAuthenticatedUser = User.isAuthenticated();
        	var p = Forum.find();

        	// console.log(p);

        	// p.$promise.then(function(data) {
        	// 	console.log('data', data);
        	// });

        	//call to 401
        	//Forum.status();

	        $scope.$watch(function () {

                return User.isAuthenticated();

            }, function (newVal, oldVal) {

                //if authenticated
                if (newVal !== oldVal) {
                    self.isAuthenticatedUser = newVal;
                }

            });


        	console.log('isAuthenticated', this.isAuthenticatedUser);

        }]);
});