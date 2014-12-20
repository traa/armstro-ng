/*global $, console, define*/
define(['angular', '../module'], function (angular) {
    'use strict';

    angular
        .module('bars.directives')
        .directive('headerNavbar', [ 'User', function headerDirective(User) {
            return {
                restrict: 'AE',
                scope: {
                    isauth: '='
                },
                link: function ($scope, $elem, $attrs) {

                    $scope.logout = function () {
                        User.logout();
                    };

                    $scope.showSearch = function (e) {
                            
                            $('.mobile-search').addClass('active');
                            $('.mobile-search form input.form-control').focus(); 

                    };

                    $scope.toggleNav = function () {

                        $('#page-wrapper').toggleClass('nav-small');

                    };
                
                },
                templateUrl: 'bars/views/header_layout.html'
            };
        }]);
});