/*global $, console, define*/
define(['angular', '../module'], function (angular) {
    'use strict';

    angular
        .module('common.animations')
        .animation('.ar-vertical-collapse', ['$q', function vertCollapseAnim($q) {
            return {
                enter: function (element, done) {

                    var leftAnim = $q.defer(),
                        rightAnim = $q.defer(),
                        forumListAnim = $q.defer();
                    
                    element.animate({
                        width: '75px'
                    }, function () {
                        
                        forumListAnim.resolve();


                    });

                    $('#leftPane').animate({
                        width: '8%'
                    }, function () {

                        $('#leftPane').removeClass('col-lg-3').addClass('col-lg-1')
                        leftAnim.resolve();
                            
                    });

                   

                    $q.all([leftAnim, forumListAnim]).then(function () {
                        

                        $('#rightPane').animate({
                            width: '42%'
                        }, function () {
                            $('#rightPane').removeClass('col-lg-3').addClass('col-lg-5');
                        });
                    });

                    done();
                    
                },
                /**
                *   fired first
                **/
                leave: function (element, done) {
                  done();
                }
            };
        }]);
});