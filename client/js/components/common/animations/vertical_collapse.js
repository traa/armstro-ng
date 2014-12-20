/*global $, console, define*/
define(['angular', '../module'], function (angular) {
    'use strict';

    angular
        .module('common.animations')
        .animation('.ar-vertical-collapse', ['$q', function vertCollapseAnim($q) {
            return {
                enter: function (element, done) {

                    var leftAnim = $q.defer(),
                        centerAnim = $q.defer(),
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

                    $('#centerPane').animate({
                        width: '41%'
                    }, function () {
                        centerAnim.resolve();
                        $(this).removeClass('col-lg-6').addClass('col-lg-5')
                    });

                   

                    $q.all([leftAnim, forumListAnim, centerAnim]).then(function () {
                        

                        $('#rightPane').animate({
                            width: '51%'
                        }, function () {
                            $('#rightPane').removeClass('col-lg-3').addClass('col-lg-6');
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