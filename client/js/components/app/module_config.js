﻿define(['angular', './module'], function (angular) {
    'use strict';
    angular
        .module('app.config', ['ui.router', 
          'app/partials/home.html',
          'app/partials/login.html',
          'app/partials/registration.html',
          'app/partials/forgot_password.html'
          ])
        .run(['gettextCatalog', function (gettextCatalog) {

            gettextCatalog.setCurrentLanguage('ru');

            gettextCatalog.setStrings("ru", {      
                '@VERSION': '0.075',
                'Create': 'Создать',
                '@Actions': '@Действия',
                'Messages': 'Сообщения',
                'Bookmarks': 'Закладки',
                "What's new": "Новое",
                'Login': 'Вход',
                'Email': 'Email',
                'Navigation': 'Навигация',
                'Submit': 'Отправить',
                'Enter': 'Войти',
                'Enter your email address to signup': 'Введите ваш адрес email. Он также будет вашим логином.',
                'Enter your email address to login': 'Ваш email адрес, - это ваш логин',
                'Password': 'Пароль',
                'Enter your password to login': 'Введите ваш секретнейший пароль',
                'Remember me': 'Запомнить меня',
                'Enter your password to signup': 'Пароль, - не менее 6 символов.',
                'Registration': 'Регистрация',
                'Clear': 'Очистить',
                'Password repeat': 'Еще раз',
                'Repeat to be sure': 'Так мы будем уверены, что вы не опечатались',
                'New posts': 'Новое',
                'I agree with rules of the game': 'Я знаю, что Сиала - жестокий мир',
                'And will not hesitate': 'И зачастую несправедливый. Он ровно такой, как про него говорят злые языки, но и в нем есть свои правила, которые вам прийдется выполнять, хотите вы этого или нет.',
                'Settings': 'Настройки',
                'Siala': 'Siala 2.0',
                'Forum': 'Форум',
                'Forums': 'Форумы',
                'Search': 'Поиск...',
                'Connect': 'Подключение',
                'Send': 'Отправить',
                'Choose your class': 'Выберите предпочитаемый вами класс',
                'Game class': 'Класс',
                'Logout': 'Выход',
                'Auth': 'Авторизация',
                'Forgot password': 'Я забыл пароль',
                'Great!': 'Шикарно!',
                'Password successfully sent to your email': 'Пароль успешно отправлен на ваш почтовый ящик.',
                'Whoa!': 'Опа!',
                'Knowledge base': 'База знаний',
                'Something went wrong. Is your email correct?': 'Что-то пошло не так. Вы ввели правильный почтовый адрес email?'
            });
        }
            ])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', 'cfpLoadingBarProvider',
             function ($stateProvider,   $urlRouterProvider, $locationProvider, $httpProvider, cfpLoadingBarProvider) {

              cfpLoadingBarProvider.includeBar = true;
              cfpLoadingBarProvider.includeSpinner = true;
              cfpLoadingBarProvider.latencyThreshold = 100;

              $urlRouterProvider.otherwise("/");

              $stateProvider
                  .state("home", {
                    url: "/",
                    controller: 'HomeCtrl',
                    templateUrl: 'app/partials/home.html'
                  })
                  .state("login", {
                    url: "/login",
                    templateUrl: "app/partials/login.html"
                  })
                  .state("registration", {
                    url: "/register",
                    templateUrl: "app/partials/registration.html"
                  })
                  .state("forgot", {
                    url: "/forgotpasword",
                    templateUrl: "app/partials/forgot_password.html"
                  });


              $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
              });



              $httpProvider.interceptors.push(function($q, $location) {
                return {
                  responseError: function(rejection) {
                    if (rejection.status == 401) {
                      $location.nextAfterLogin = $location.path();
                      $location.path('/login');
                    }
                    return $q.reject(rejection);
                  }
                };
              });

        }]);
});
