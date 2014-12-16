define(['angular', '../module' ], function (angular) {
    'use strict';
    angular
        .module('app.controllers')
        .controller('ForgotPasswordCtrl', ['$scope', 'User', '$location', 'gettextCatalog', function AppCtrl($scope, User, $location, gettextCatalog) {

        	 $scope.user = {};
             $scope.msg = {
                'title': false
             };

             $scope.resetPassword = function (user) {

                var reset;

                if (user.email) {
                    reset = User.resetPassword({email: user.email});

                    reset.$promise.then(function (data, e) {
                        $scope.msg = {
                            'title': gettextCatalog.getString('Great!'),
                            'text': gettextCatalog.getString('Password successfully sent to your email')
                        };
                    }, function() {
                        $scope.msg = {
                            'title': gettextCatalog.getString('Whoa!'),
                            'text': gettextCatalog.getString('Something went wrong. Is your email correct?')
                        };
                    });
                    
                }
                

             };

        }]);
});