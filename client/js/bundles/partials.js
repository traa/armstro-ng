define( [ 'angular' ], function( angular ) {(function(module) {
try {
  module = angular.module('app/partials/forgot_password.html');
} catch (e) {
  module = angular.module('app/partials/forgot_password.html', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/partials/forgot_password.html',
    '<!-- app/partials/forgot_password.html START --><div ng-controller="ForgotPasswordCtrl">\n' +
    '\n' +
    '<div ng-switch="msg.title">\n' +
    '    <div ng-switch-when="false">\n' +
    '		<form class="form-horizontal">\n' +
    '		    <fieldset>\n' +
    '\n' +
    '		    <legend translate>Forgot password</legend>\n' +
    '\n' +
    '		   		<div class="form-group">\n' +
    '		            \n' +
    '		            <label for="inputEmail" class="col-lg-2 control-label" translate>Email</label>\n' +
    '\n' +
    '		            <div class="col-lg-10">\n' +
    '		                <input type="email" class="form-control" id="inputEmail" placeholder="{{::emailPlaceholder}}" ng-model="user.email">\n' +
    '		            </div>\n' +
    '\n' +
    '		        </div>\n' +
    '\n' +
    '\n' +
    '		        <div class="form-group">\n' +
    '		            <div class="col-lg-10 col-lg-offset-2">\n' +
    '		                <button type="submit" class="btn btn-primary btn-success" translate ng-click="resetPassword(user)">Submit</button>\n' +
    '		            </div>\n' +
    '		        </div>\n' +
    '\n' +
    '\n' +
    '		    </fieldset>\n' +
    '\n' +
    '		</form>	\n' +
    '	</div>\n' +
    '\n' +
    '	<div ng-switch-default>\n' +
    '		\n' +
    '		<h2>{{msg.title}}</h2>\n' +
    '    	<p>{{msg.text}}</p>\n' +
    '\n' +
    '	</div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '	\n' +
    '</div><!-- app/partials/forgot_password.html END -->');
}]);
})();

(function(module) {
try {
  module = angular.module('app/partials/home.html');
} catch (e) {
  module = angular.module('app/partials/home.html', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/partials/home.html',
    '<!-- app/partials/home.html START --><div id="tt">Threads list should be here</div><!-- app/partials/home.html END -->');
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
    '                <input type="email" class="form-control" id="inputEmail" placeholder="{{::emailPlaceholder}}" ng-model="user.email">\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group">\n' +
    '            <label for="inputPassword" class="col-lg-2 control-label" translate>Password</label>\n' +
    '            <div class="col-lg-10">\n' +
    '                <input type="password" class="form-control" id="inputPassword" placeholder="{{::passwordPlaceholder}}" ng-model="user.password">\n' +
    '                <div class="checkbox">\n' +
    '                    <label>\n' +
    '                        <input type="checkbox" name="remember_me" ng-model="user.rememberme">\n' +
    '                        <span class="ripple"></span>\n' +
    '                        <span class="check"></span>\n' +
    '                        {{::(\'Remember me\' | translate)}}\n' +
    '                    </label>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '        <div class="form-group">\n' +
    '            <div class="col-lg-10 col-lg-offset-2">\n' +
    '                <a href="javascript:void(0)" class="btn btn-default btn-raised" translate ui-sref="forgot">Forgot password</a>\n' +
    '                <button type="submit" class="btn btn-primary btn-success" translate ng-click="login(user)">Enter</button>\n' +
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
    '          <p>\n' +
    '          {{::(\'Connect\' | translate)}}: <strong>193.108.209.210:5121</strong>\n' +
    '          </p>\n' +
    '      </div>\n' +
    '      <div class="col-xs-6 col-md-4">\n' +
    '            <h6 style="margin-bottom: 5px;">armstro-ng@{{::(\'@VERSION\' | translate)}}</h6>\n' +
    '            <h5 style="margin:0;">\n' +
    '                <i class="mdi-action-extension ar-red-footer-icon"></i>\n' +
    '                truthatenvy\n' +
    '            </h5>\n' +
    '      </div>\n' +
    '      <div class="col-xs-6 col-md-4">\n' +
    '          \n' +
    '         <div class="icon-preview">\n' +
    '            <!-- <h5 style="float:right;">stagedown@gmail.com</h5>\n' +
    '            <i class="mdi-action-bug-report ar-fs-lg ar-footer-icon"></i>  -->\n' +
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
    '        <a class="navbar-brand" href="javascript:void(0)" ui-sref="home" translate>Siala</a>\n' +
    '    </div>\n' +
    '    <div class="navbar-collapse collapse navbar-inverse-collapse">\n' +
    '        <ul class="nav navbar-nav">\n' +
    '            <li class="active"><a href="javascript:void(0)" translate>Forum</a></li>\n' +
    '        </ul>\n' +
    '        <form class="navbar-form navbar-left">\n' +
    '            <input type="text" class="form-control col-lg-8" placeholder="{{(\'Search\' | translate)}}">\n' +
    '        </form>\n' +
    '        <ul class="nav navbar-nav navbar-right" ng-show="isauth">\n' +
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
    '                    <!-- <li><a href="javascript:void(0)">Action</a></li> -->\n' +
    '                    <li class="divider"></li>\n' +
    '                    <li><a href="javascript:void(0)" ng-click="logout()" translate>Logout</a></li>\n' +
    '                </ul>\n' +
    '            </li>\n' +
    '\n' +
    '        </ul>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="progress" style="margin-top: -20px;height: 5px;" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="XP: 160/200" jq-tooltip>\n' +
    '    <div class="progress-bar progress-bar-success" style="width: 80%" ></div>\n' +
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
    '<!-- bars/views/side_layout.html START -->\n' +
    '\n' +
    '<!-- <side-menu-widget isauth="isauth"></side-menu-widget> -->\n' +
    '\n' +
    ' <side-forum-list isauth="isauth"></side-forum-list> \n' +
    '\n' +
    '\n' +
    '<!-- bars/views/side_layout.html END -->');
}]);
})();

(function(module) {
try {
  module = angular.module('common/views/side_forum_list.html');
} catch (e) {
  module = angular.module('common/views/side_forum_list.html', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('common/views/side_forum_list.html',
    '<!-- common/views/side_forum_list.html START --><div ng-switch="isauth">\n' +
    '    <div ng-switch-when="true">\n' +
    '        \n' +
    '        <div class="well">\n' +
    '            <div class="list-group">\n' +
    '\n' +
    '                <div class="list-group-item ar-no-padding-lr">\n' +
    '                    <div class="row-action-primary ar-pd-r-10">\n' +
    '                        <i class="mdi-action-assignment-late ar-wh-rd-2"></i>\n' +
    '                    </div>\n' +
    '                    <div class="row-content">\n' +
    '                        \n' +
    '                        <h5 class="list-group-item-heading ar-fs-rd">Новости</h5>\n' +
    '                        <p class="list-group-item-text ar-fs-rd-2">Апдейты, ивенты и прочие новости от администрации.</p>\n' +
    '                    </div>\n' +
    '                    <i class="mdi-av-play-arrow ar-ar-pos"></i>\n' +
    '                </div>\n' +
    '\n' +
    '\n' +
    '                <div class="list-group-separator"></div>\n' +
    '\n' +
    '                <div class="list-group-item ar-no-padding-lr">\n' +
    '                    <div class="row-action-primary ar-pd-r-10">\n' +
    '                        <i class="mdi-action-extension ar-wh-rd"></i>\n' +
    '                    </div>\n' +
    '                    <div class="row-content">\n' +
    '                        \n' +
    '                        <h5 class="list-group-item-heading ar-fs-rd">Общий форум</h5>\n' +
    '                        <p class="list-group-item-text ar-fs-rd-2">Дискуссии обо всем в игре. Флуд запрещен.</p>\n' +
    '                    </div>\n' +
    '                    <i class="mdi-av-play-arrow ar-ar-pos"></i>\n' +
    '                </div>\n' +
    '\n' +
    '\n' +
    '                <div class="list-group-separator"></div>\n' +
    '\n' +
    '\n' +
    '                <div class="list-group-item ar-no-padding-lr">\n' +
    '                    <div class="row-action-primary ar-pd-r-10">\n' +
    '                        <i class="mdi-action-extension ar-wh-rd"></i>\n' +
    '                    </div>\n' +
    '                    <div class="row-content">\n' +
    '                     \n' +
    '                        <h5 class="list-group-item-heading ar-fs-rd">Уголок Манча</h5>\n' +
    '                        <p class="list-group-item-text ar-fs-rd-2">Билды, таблицы и стратегии развития персонажа.</p>\n' +
    '                    </div>\n' +
    '                    <i class="mdi-av-play-arrow ar-ar-pos"></i>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="list-group-separator"></div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    </div>\n' +
    '    <div ng-switch-default>\n' +
    '\n' +
    '\n' +
    '        <!-- show nothing for now? -->\n' +
    '\n' +
    '   \n' +
    '   \n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '<!-- common/views/side_forum_list.html END -->');
}]);
})();

(function(module) {
try {
  module = angular.module('common/views/side_menu_widget.html');
} catch (e) {
  module = angular.module('common/views/side_menu_widget.html', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('common/views/side_menu_widget.html',
    '<!-- common/views/side_menu_widget.html START --><div ng-switch="isauth">\n' +
    '    <div ng-switch-when="true">\n' +
    '        \n' +
    '\n' +
    '        <a href="javascript:void(0)" class="btn btn-success btn-raised ar-same-width-1">\n' +
    '            <div class="icon-preview ar-icon-medium">\n' +
    '                <i class="mdi-communication-forum"></i>\n' +
    '                <span translate>New posts</span>\n' +
    '                <span class="badge">3</span>\n' +
    '            </div>\n' +
    '        </a>\n' +
    '\n' +
    '        <div class="btn-group-vertical ar-same-width-1">\n' +
    '            <a href="javascript:void(0)" class="btn btn-default btn-raised">\n' +
    '                \n' +
    '                <div class="icon-preview ar-icon-medium">\n' +
    '                    <i class="mdi-communication-email"></i>\n' +
    '                    <span translate>Messages</span>\n' +
    '                </div>\n' +
    '\n' +
    '            </a>\n' +
    '\n' +
    '\n' +
    '\n' +
    '            <a href="javascript:void(0)" class="btn btn-default btn-raised">\n' +
    '                \n' +
    '                <div class="icon-preview ar-icon-medium">\n' +
    '                    <i class="mdi-notification-folder-special"></i>\n' +
    '                    <span translate>Bookmarks</span>\n' +
    '                    <span class="label label-default">beta</span>\n' +
    '                </div>\n' +
    '                \n' +
    '            </a>\n' +
    '\n' +
    '            <a href="javascript:void(0)" class="btn btn-default btn-raised">\n' +
    '                \n' +
    '                <div class="icon-preview ar-icon-medium">\n' +
    '                    <i class="mdi-action-settings"></i>\n' +
    '                    <span translate>Settings</span>\n' +
    '                </div>\n' +
    '                \n' +
    '            </a>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '    <div ng-switch-default>\n' +
    '\n' +
    '        <div class="btn-group-vertical">\n' +
    '\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading" translate>Auth</div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '\n' +
    '                           \n' +
    '                         <a href="javascript:void(0)" class="btn btn-success btn-raised" style="width:162px;" translate ui-sref="login">\n' +
    '                         {{::(\'Login\' | translate)}}</a>\n' +
    '\n' +
    '                          <a href="javascript:void(0)" class="btn btn-default btn-raised" translate ui-sref="registration">\n' +
    '                          {{::(\'Registration\' | translate)}}</a>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '        </div>\n' +
    '\n' +
    '   \n' +
    '   \n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '<!-- common/views/side_menu_widget.html END -->');
}]);
})();
});