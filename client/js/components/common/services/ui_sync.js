define(['angular', '../module'], function (angular) {
    'use strict';

    return angular
        .module('common.services')
        .service('UISync', [function () {

            this.widgetsMode = {
                /**
                *   possible modes: normal, collapsed
                **/
                'side-forum-list': 'normal'
            }


            this.getMode = function (id) {

                return this.widgetsMode[id];

            };

            this.setMode = function (id, mode) {
                this.widgetsMode[id] = mode;
            }

        }]);

    });