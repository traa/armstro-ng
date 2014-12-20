/*global $, console, define*/
define(['angular', '../module'], function (angular) {
    'use strict';

    angular
        .module('bars.directives')
        .directive('sidebar', [function sidebarDirective() {
            return {
                restrict: 'AE',
                scope: {
                    isauth: '='
                },
                link: function ($scope, $elem, $attrs) {
                    console.log($scope.isauth, $attrs.isauth);

                        $('#sidebar-nav,#nav-col-submenu').on('click', '.dropdown-toggle', function (e) {
                            e.preventDefault();
                            
                            var $item = $(this).parent();

                            if (!$item.hasClass('open')) {
                                $item.parent().find('.open .submenu').slideUp('fast');
                                $item.parent().find('.open').toggleClass('open');
                            }
                            
                            $item.toggleClass('open');
                            
                            if ($item.hasClass('open')) {
                                $item.children('.submenu').slideDown('fast');
                            } 
                            else {
                                $item.children('.submenu').slideUp('fast');
                            }
                        });

                },
                templateUrl: 'bars/views/side_layout.html'
            };
        }]);
});
