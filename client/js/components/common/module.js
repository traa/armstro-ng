/**
 * @namespace common
 */
define(['angular'], function (angular) {
    'use strict';

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
    angular.module('common.directives', [
            'common/views/side_menu_widget.html'
        ]);
    return angular.module('common', [
        'lbServices',
        'common.providers',
        'common.directives',
        'common.services',
        'common.filters',
        'common.factories'
    ]);
});