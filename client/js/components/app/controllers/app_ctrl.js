define(['angular', '../module' ], function (angular) {
    'use strict';
    angular
        .module('app.controllers')
        .controller('AppCtrl', ['$scope', 'Forum', function AppCtrl($scope, Forum) {

        	var p = Forum.find();

        	console.log(p);

        	p.$promise.then(function(data) {
        		console.log('data', data);
        	});

        	//call to 401
        	//Forum.status();

        }]);
});