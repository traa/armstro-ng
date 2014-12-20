/*global $, console, define*/
define(['angular', '../module'], function (angular) {
    'use strict';

    angular
        .module('common.directives')
        .directive('dropdownToggle', [function dropdownToggleDir() {
            return {
                restrict: 'AE',
                link: function ($scope, $elem, $attrs) {
                           
                    $elem.on('click', function (e) {
                        
                        e.preventDefault();
                        var $item = $(this).parent();

                        // if (!$item.hasClass('open')) {
                        //     $item.parent().find('.open .submenu').slideUp('fast');
                        //     $item.parent().find('.open').toggleClass('open');
                        // }
                        
                        //$item.toggleClass('open');
                        
                        if ($item.hasClass('open')) {
                            $item.children('.submenu').slideDown('fast');
                        } 
                        else {
                            $item.children('.submenu').slideUp('fast');
                        }
                    });

                }
            };
        }]);
});