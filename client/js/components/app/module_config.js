define(['angular', './module'], function (angular) {
    'use strict';
    angular
        .module('app.config', ['ui.router', 
          'app/partials/home.html',
          'app/partials/login.html',
          'app/partials/registration.html'])
        .run(['gettextCatalog', function (gettextCatalog) {

            gettextCatalog.setCurrentLanguage('ru');

            gettextCatalog.setStrings("ru", {      
                '@VERSION': '0.04',
                'Create': 'Создать',
                '@Actions': '@Действия',
                'Messages': 'Сообщения',
                'Bookmarks': 'Закладки',
                'Login': 'Вход',
                'Email': 'Email',
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
                'Search': 'Поиск...',
                'Connect': 'Подключение',
                'Send': 'Отправить',
                'Choose your class': 'Выберите предпочитаемый вами класс',
                'Game class': 'Класс',
                'Logout': 'Выход'
            });
        }
            ])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
             function ($stateProvider,   $urlRouterProvider, $locationProvider, $httpProvider) {

              

              $urlRouterProvider.otherwise("/");

              $stateProvider
                  .state("home", {
                    url: "/",
                    templateUrl: 'app/partials/home.html'
                  })
                  .state("login", {
                    url: "/login",
                    templateUrl: "app/partials/login.html"
                  })
                  .state("registration", {
                    url: "/register",
                    templateUrl: "app/partials/registration.html"
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