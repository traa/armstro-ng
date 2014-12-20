define(['angular', '../module'], function (angular) {
    'use strict';

    angular
        .module('app.directives')
        .directive('appPreloader', ['$timeout', function footerPane($timeout) {
            return {
                restrict: 'A',
                link: function ($scope, $element, attrs) {

                    $scope.$preloaderCurtains = $element.find('.preloader-curtains');

                    //Remove preloader after 30 seconds if kendoRendered was not called within this time interval
                    var promiseToRemovePreloader = $timeout(function () {
                        $scope.removePreloader();
                    }, 30000);

                    $scope.removePreloader = function () {
                        $element.removeClass('initial-loading');
                        $scope.$preloaderCurtains.css({ opacity: 0 });
                        $timeout(function () {
                            $scope.$preloaderCurtains.remove();
                        }, 600);
                    };

                    
                    //$timeout.cancel(promiseToRemovePreloader);
                    $timeout($scope.removePreloader.bind($scope), 300);


                }
            };
        }]);
});