define( [ 'angular' ], function( angular ) {(function(module) {
try {
  module = angular.module('app/partials/home.html');
} catch (e) {
  module = angular.module('app/partials/home.html', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/partials/home.html',
    '<!-- app/partials/home.html START --><div id="tt">HOME!</div><!-- app/partials/home.html END -->');
}]);
})();

(function(module) {
try {
  module = angular.module('app/partials/login.html');
} catch (e) {
  module = angular.module('app/partials/login.html', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/partials/login.html',
    '<!-- app/partials/login.html START --><login-form></login-form>\n' +
    '<!-- app/partials/login.html END -->');
}]);
})();

(function(module) {
try {
  module = angular.module('app/partials/registration.html');
} catch (e) {
  module = angular.module('app/partials/registration.html', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/partials/registration.html',
    '<!-- app/partials/registration.html START --><registration-form></registration-form><!-- app/partials/registration.html END -->');
}]);
})();

(function(module) {
try {
  module = angular.module('app/views/app_preloader.html');
} catch (e) {
  module = angular.module('app/views/app_preloader.html', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/views/app_preloader.html',
    '<!-- app/views/app_preloader.html START --><div class="preloader-curtains">\n' +
    '    <div class="preloader-block">\n' +
    '        <div class="preloader-ad-logo"></div>\n' +
    '        <div class="preloader-loading-text">Loading ...</div>\n' +
    '        <div class="preloader-loading-image"></div>\n' +
    '    </div>\n' +
    '</div><!-- app/views/app_preloader.html END -->');
}]);
})();

(function(module) {
try {
  module = angular.module('auth/views/login_form.html');
} catch (e) {
  module = angular.module('auth/views/login_form.html', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('auth/views/login_form.html',
    '<!-- auth/views/login_form.html START -->\n' +
    '<form class="form-horizontal">\n' +
    '    <fieldset>\n' +
    '\n' +
    '    <legend translate>Login</legend>\n' +
    '\n' +
    '   		<div class="form-group">\n' +
    '            \n' +
    '            <label for="inputEmail" class="col-lg-2 control-label" translate>Email</label>\n' +
    '\n' +
    '            <div class="col-lg-10">\n' +
    '                <input type="email" class="form-control" id="inputEmail" placeholder="{{::emailPlaceholder}}">\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group">\n' +
    '            <label for="inputPassword" class="col-lg-2 control-label" translate>Password</label>\n' +
    '            <div class="col-lg-10">\n' +
    '                <input type="password" class="form-control" id="inputPassword" placeholder="{{::passwordPlaceholder}}">\n' +
    '                <div class="checkbox">\n' +
    '                    <label>\n' +
    '                        <input type="checkbox" name="remember_me">\n' +
    '                        <span class="ripple"></span>\n' +
    '                        <span class="check"></span>\n' +
    '                        {{::(\'Remember me\' | translate)}}\n' +
    '                    </label>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '        <div class="form-group">\n' +
    '            <div class="col-lg-10 col-lg-offset-2">\n' +
    '                <button type="submit" class="btn btn-primary btn-info" translate>Enter</button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '    </fieldset>\n' +
    '\n' +
    '</form>\n' +
    '\n' +
    '<!-- auth/views/login_form.html END -->');
}]);
})();

(function(module) {
try {
  module = angular.module('auth/views/registration_form.html');
} catch (e) {
  module = angular.module('auth/views/registration_form.html', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('auth/views/registration_form.html',
    '<!-- auth/views/registration_form.html START -->\n' +
    '<form class="form-horizontal">\n' +
    '    <fieldset>\n' +
    '\n' +
    '    <legend translate>Registration</legend>\n' +
    '\n' +
    '   		<div class="form-group">\n' +
    '            \n' +
    '            <label for="inputEmail" class="col-lg-2 control-label" translate>Email</label>\n' +
    '\n' +
    '            <div class="col-lg-10">\n' +
    '                <input type="email" class="form-control floating-label" ng-model="user.email" id="inputEmail" placeholder="{{::emailPlaceholder}}">\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group">\n' +
    '            <label for="inputPassword" class="col-lg-2 control-label" translate>Password</label>\n' +
    '            <div class="col-lg-10">\n' +
    '                <input type="password" class="form-control" ng-model="user.password" id="inputPassword" placeholder="{{::passwordPlaceholder}}">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group">\n' +
    '            <label for="inputPasswordRepeat" class="col-lg-2 control-label" translate>Password repeat</label>\n' +
    '            <div class="col-lg-10">\n' +
    '                <input type="password" ng-model="user.passwordrepeat" class="form-control" id="inputPasswordRepeat" placeholder="{{::(\'Repeat to be sure\' | translate)}}">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '         <div class="form-group" >\n' +
    '            <label for="gameclass" class="col-lg-2 control-label" translate>Game class</label>\n' +
    '\n' +
    '            <div class="col-lg-10">\n' +
    '                <select ng-model="user.gameclass" class="select form-control floating-label" placeholder="{{::(\'Choose your class\' | translate)}}" jq-dropdown id="gameclass">\n' +
    '                    <option value="paladin">Paladin</option>\n' +
    '                    <option value="fighter">Fighter</option>\n' +
    '                    <option value="wizard">Wizard</option>\n' +
    '                </select>\n' +
    '            </div>\n' +
    '            \n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '        <div class="col-sm-offset-2 col-sm-10">\n' +
    '            <div class="list-group">\n' +
    '                \n' +
    '                <div class="list-group-item">\n' +
    '                    <div class="row-action-primary checkbox">\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" ng-model="user.iagree">\n' +
    '                            <span class="ripple"></span>\n' +
    '                            <span class="check"></span>\n' +
    '                        </label>\n' +
    '                    </div>\n' +
    '                    <div class="row-content">\n' +
    '                        <h4 class="list-group-item-heading" translate>I agree with rules of the game</h4>\n' +
    '                        <p class="list-group-item-text" translate>And will not hesitate\n' +
    '                        </p>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="list-group-separator"></div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group">\n' +
    '            <div class="col-lg-10 col-lg-offset-2">\n' +
    '                \n' +
    '                <button class="btn btn-default" translate>Clear</button>\n' +
    '                <button type="submit" class="btn btn-primary btn-success" ng-click="reg(user)" translate>Send</button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '    </fieldset>\n' +
    '\n' +
    '</form>\n' +
    '\n' +
    '<!-- auth/views/registration_form.html END -->');
}]);
})();

(function(module) {
try {
  module = angular.module('bars/views/footer_layout.html');
} catch (e) {
  module = angular.module('bars/views/footer_layout.html', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('bars/views/footer_layout.html',
    '<!-- bars/views/footer_layout.html START --><footer class="footer">\n' +
    '  <div class="container">\n' +
    '   <div class="row">\n' +
    '      <div class="col-xs-6 col-md-4">\n' +
    '          <h5>\n' +
    '          {{::(\'Connect\' | translate)}}: <strong>193.108.209.210:5121</strong>\n' +
    '          </h5>\n' +
    '      </div>\n' +
    '      <div class="col-xs-6 col-md-4">\n' +
    '            <h6 style="margin-bottom: 5px;">armstro-ng@{{::(\'@VERSION\' | translate)}}</h6>\n' +
    '            <h5 style="margin:0;">\n' +
    '                <i class="mdi-action-extension ar-red-footer-icon"></i>\n' +
    '                <a href="https://github.com/traa" target="_blank">traa</a>\n' +
    '            </h5>\n' +
    '      </div>\n' +
    '      <div class="col-xs-6 col-md-4">\n' +
    '          \n' +
    '         <div class="icon-preview">\n' +
    '            <h5 style="float:right;">stagedown@gmail.com</h5>\n' +
    '            <i class="mdi-action-bug-report ar-fs-lg ar-footer-icon"></i> \n' +
    '          </div>\n' +
    '\n' +
    '\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</footer><!-- bars/views/footer_layout.html END -->');
}]);
})();

(function(module) {
try {
  module = angular.module('bars/views/header_layout.html');
} catch (e) {
  module = angular.module('bars/views/header_layout.html', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('bars/views/header_layout.html',
    '<!-- bars/views/header_layout.html START --><div class="navbar navbar-inverse">\n' +
    '    <div class="navbar-header">\n' +
    '        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-inverse-collapse">\n' +
    '            <span class="icon-bar"></span>\n' +
    '            <span class="icon-bar"></span>\n' +
    '            <span class="icon-bar"></span>\n' +
    '        </button>\n' +
    '        <a class="navbar-brand" href="javascript:void(0)" translate>Siala</a>\n' +
    '    </div>\n' +
    '    <div class="navbar-collapse collapse navbar-inverse-collapse">\n' +
    '        <ul class="nav navbar-nav">\n' +
    '            <li class="active"><a href="javascript:void(0)" translate>Forum</a></li>\n' +
    '        </ul>\n' +
    '        <form class="navbar-form navbar-left">\n' +
    '            <input type="text" class="form-control col-lg-8" placeholder="{{(\'Search\' | translate)}}">\n' +
    '        </form>\n' +
    '        <ul class="nav navbar-nav navbar-right">\n' +
    '            <!-- <li><a href="javascript:void(0)">Link</a></li> -->\n' +
    '            <li class="dropdown">\n' +
    '                <a href="javascript:void(0)" class="dropdown-toggle ar-five-paddings" data-toggle="dropdown">\n' +
    '                    \n' +
    '                            <div class="row-picture">\n' +
    '                                <img class="circle ar-force-round" src="http://lorempixel.com/56/56/people/1" alt="icon">\n' +
    '                                <i class="mdi-navigation-expand-more ar-fs-lg"></i>\n' +
    '                                \n' +
    '                            </div>\n' +
    '                    \n' +
    '                </a>\n' +
    '\n' +
    '                <ul class="dropdown-menu">\n' +
    '                    <li><a href="javascript:void(0)">Action</a></li>\n' +
    '                    <li><a href="javascript:void(0)">Another action</a></li>\n' +
    '                    <li><a href="javascript:void(0)">Something else here</a></li>\n' +
    '                    <li class="divider"></li>\n' +
    '                    <li><a href="javascript:void(0)">Separated link</a></li>\n' +
    '                </ul>\n' +
    '            </li>\n' +
    '\n' +
    '        </ul>\n' +
    '    </div>\n' +
    '</div><!-- bars/views/header_layout.html END -->');
}]);
})();

(function(module) {
try {
  module = angular.module('bars/views/side_layout.html');
} catch (e) {
  module = angular.module('bars/views/side_layout.html', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('bars/views/side_layout.html',
    '<!-- bars/views/side_layout.html START --><!-- <div class="btn-group">\n' +
    '    <a href="javascript:void(0)" class="btn btn-info" translate>@Actions</a>\n' +
    '    <a href="javascript:void(0)" class="btn btn-info dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>\n' +
    '    <ul class="dropdown-menu">\n' +
    '        <li><a href="javascript:void(0)">Action</a></li>\n' +
    '        <li><a href="javascript:void(0)">Another action</a></li>\n' +
    '        <li><a href="javascript:void(0)">Something else here</a></li>\n' +
    '        <li class="divider"></li>\n' +
    '        <li><a href="javascript:void(0)">Separated link</a></li>\n' +
    '    </ul>\n' +
    '</div> -->\n' +
    '\n' +
    '<a href="javascript:void(0)" class="btn btn-success btn-raised ar-same-width-1">\n' +
    '    <div class="icon-preview ar-icon-medium">\n' +
    '        <i class="mdi-communication-forum"></i>\n' +
    '        <span translate>New posts</span>\n' +
    '        <span class="badge">3</span>\n' +
    '    </div>\n' +
    '</a>\n' +
    '\n' +
    '<div class="btn-group-vertical ar-same-width-1">\n' +
    '    <a href="javascript:void(0)" class="btn btn-default btn-raised">\n' +
    '        \n' +
    '        <div class="icon-preview ar-icon-medium">\n' +
    '            <i class="mdi-communication-email"></i>\n' +
    '            <span translate>Messages</span>\n' +
    '        </div>\n' +
    '\n' +
    '    </a>\n' +
    '\n' +
    '\n' +
    '\n' +
    '    <a href="javascript:void(0)" class="btn btn-default btn-raised">\n' +
    '        \n' +
    '        <div class="icon-preview ar-icon-medium">\n' +
    '            <i class="mdi-notification-folder-special"></i>\n' +
    '            <span translate>Bookmarks</span>\n' +
    '            <span class="label label-default">beta</span>\n' +
    '        </div>\n' +
    '        \n' +
    '    </a>\n' +
    '\n' +
    '    <a href="javascript:void(0)" class="btn btn-default btn-raised">\n' +
    '        \n' +
    '        <div class="icon-preview ar-icon-medium">\n' +
    '            <i class="mdi-action-settings"></i>\n' +
    '            <span translate>Settings</span>\n' +
    '        </div>\n' +
    '        \n' +
    '    </a>\n' +
    '</div>\n' +
    '<!-- bars/views/side_layout.html END -->');
}]);
})();
});