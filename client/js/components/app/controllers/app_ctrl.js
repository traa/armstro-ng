define(['angular', '../module' ], function (angular) {
    'use strict';
    angular
        .module('app.controllers')
        .controller('AppCtrl', ['$scope', 'Forum', 'User', function AppCtrl($scope, Forum, User) {

        	var p = Forum.find();

        	console.log(p);

        	p.$promise.then(function(data) {
        		console.log('data', data);
        	});

        	//call to 401
        	//Forum.status();

        	console.log('isAuthenticated', User.isAuthenticated())

        }]);
});