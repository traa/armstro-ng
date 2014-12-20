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
     * @namespace common.animations
     */
    angular.module('common.animations', []);

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
            'common/views/side_menu_widget.html',
            'common/views/side_forum_list.html'
        ]);
    return angular.module('common', [
        'lbServices',
        'common.providers',
        'common.directives',
        'common.services',
        'common.filters',
        'common.factories',
        'common.animations'
    ]);
});