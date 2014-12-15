define(['angular'], function (angular) {
    'use strict';
    angular.module('auth.directives', [
        'auth/views/login_form.html',
        'auth/views/registration_form.html'
        ]);


    return angular.module('auth', [
        'auth.directives'
    ]);
});