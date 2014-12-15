define('app/module',['angular'], function (angular) {

    
    angular.module('app.controllers', []);

    //adding templates as dependencies
    angular.module('app.directives', []);

    return angular.module('app', [
        'common',
        'gettext',
        'app.config',
        'app.controllers',
        'app.directives'
    ]);
});
define('app/module_config',['angular', './module'], function (angular) {
    
    angular
        .module('app.config', ['ui.router', 'app/partials/home.html'])
        .run(['gettextCatalog', function (gettextCatalog) {

            gettextCatalog.setCurrentLanguage('ru');

            gettextCatalog.setStrings("ru", {      
                'Create': 'Создать',
            });
        }
            ])
        .config(['$stateProvider', '$urlRouterProvider', 
             function ($stateProvider,   $urlRouterProvider) {

            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state("home", {
                  url: "/",
                   controller: function($scope) {
                    console.log('ctrl');
                  },
                  templateUrl: 'app/partials/home.html'
                });

        }]);
});
define('app/controllers/main_view_ctrl',['angular', '../module'], function (angular) {
    

    angular
        .module('app.controllers')
        .controller('MainViewCtrl', ['$scope',
            function MainViewCtrl($scope, $routeParams, EdgrProjectInfo, UISync) {


            }]
            );

});
define('app/controllers/app_ctrl',['angular', '../module' ], function (angular) {
    
    angular
        .module('app.controllers')
        .controller('AppCtrl', ['$scope', function AppCtrl($scope) {

        }]);
});
define('app/directives/app_preloader',['angular', '../module'], function (angular) {
    

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

                    
                    $timeout.cancel(promiseToRemovePreloader);
                    $timeout($scope.removePreloader.bind($scope), 300);


                }
            };
        }]);
});
define('app/main',[
    "./module",
    "./module_config",
    "./controllers/main_view_ctrl",
    "./controllers/app_ctrl",
    "./directives/app_preloader"
], function () {
    
    return {};
});
define('app', ['app/main'], function (main) { return main; });

/**
 * @namespace common
 */
define('common/module',['angular'], function (angular) {
    

    /**
     * @namespace common.services
     */
    angular.module('common.filters', []);


    /**
     * @namespace common.services
     */
    angular.module('common.services', []);
     angular.module('common.factories', []);

    /**
     * @namespace common.providers
     */
    angular.module('common.providers', []);


    /**
     * @namespace common.directives
     */
    angular.module('common.directives', []);
    return angular.module('common', [
        'common.providers',
        'common.directives',
        'common.services',
        'common.filters',
        'common.factories'
    ]);
});
/*global $, console, define*/
define('common/directives/id_gen',['angular', '../module'], function (angular) {
    

    angular
        .module('common.directives')
        .directive('idGen', [function idGenDirective() {
            return {
                restrict: 'A',
                scope: {
                    idGen: '@',
                    widgetPrefix: '@'
                },
                link: function ($scope, $elem, $attrs) {
                    var newId;
                    /*Only work when no id set AND if some base value passed to directive*/
                    if (!$attrs.id && $scope.idGen && $scope.idGen.length > 0) {
                        newId = $scope.idGen.toLowerCase().replace(/[\s\(\)\'\,\.#]/g, '_');

                        newId = ($scope.widgetPrefix || $elem.closest('[widget-prefix]').attr('widget-prefix') || '') + '_' + newId;

                        $elem.attr('id', newId);
                    }

                    $scope.$destroy();

                }
            };
        }]);
});
define('common/filters/common_filters',['angular', '../module'], function (angular) {
    
    angular
        .module('common.filters')
        .filter('unsafeHtml', ['$sce', function ($sce) {
            return function (val) {
                return $sce.trustAsHtml(val);
            };
    }]);
});
define('common/factories/safe_apply',['angular', '../module'], function (angular) {
    

    return angular
        .module('common.factories')
        .factory('safeApply', ['$rootScope', function ($rootScope) {
            return function($scope, fn) {
                var phase = $scope.$root.$$phase;
                if (phase === '$apply' || phase === '$digest') {
                    if (fn) {
                        $scope.$eval(fn);
                    }
                } else {
                    if (fn) {
                        $scope.$apply(fn);
                    } else {
                        $scope.$apply();
                    }
                }
            };
        }]);
});

define('common/main',[
    "./module",
    "./directives/id_gen",
    "./filters/common_filters",
    "./factories/safe_apply"
], function () {
    
    return {};
});
define('common', ['common/main'], function (main) { return main; });

define('bundles/app',[
    "app",
    "common"
], function() { });
