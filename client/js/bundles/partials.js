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
    '<!-- app/partials/home.html START --><div class="panel panel-default ar-mr-rd">\n' +
    '    <div class="panel-body ar-pd-rd" ng-click="selectThread()">\n' +
    '\n' +
    '	    <div class="col-md-1">\n' +
    '	    	<i class="mdi-communication-comment ar-spec-blue"></i>\n' +
    '	    	<span class="label label-success"><i class="mdi-maps-beenhere"></i></span>\n' +
    '	    </div>\n' +
    '	    <div class="col-md-7">\n' +
    '	    	<a href="javascript:;" class="ar-incr-we">Таблица крафта.</a>\n' +
    '	        <div>\n' +
    '	        	<small>Информация, связанная с крафт системой Сиалы</small>\n' +
    '	        </div>\n' +
    '	    </div>\n' +
    '	    <div class="col-md-4">\n' +
    '	        	<ul class="nav nav-pills ar-rd-sz"> \n' +
    '	        		<li class="">\n' +
    '	        			<a href="javascript:void(0)" class="ar-pd-lnk-rd">Постов <span class="badge">5</span></a>\n' +
    '	        		</li> \n' +
    '	        	</ul>\n' +
    '	        	<div class="ar-fl-r">\n' +
    '	        		<small class="ar-rd-fs">Последний от: <a href="javascript:;" data-toggle="tooltip" data-placement="right" title="" data-original-title="19/12/14 at 12:19" jq-tooltip>Sentinel <i class="mdi-social-person"></i></a></small>\n' +
    '	        	</div>\n' +
    '	        	<i class="mdi-av-play-arrow ar-ar-pos"></i>\n' +
    '	    </div>\n' +
    '\n' +
    '        \n' +
    '\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="panel panel-default ar-mr-rd">\n' +
    '    <div class="panel-body ar-pd-rd">\n' +
    '\n' +
    '	    <div class="col-md-1">\n' +
    '	    	<i class="mdi-communication-comment ar-spec-blue"></i>\n' +
    '	    	<span class="label label-success">!</span>\n' +
    '	    </div>\n' +
    '	    <div class="col-md-7">\n' +
    '	    	<a href="javascript:;" class="ar-incr-we">FAQ по билдам и классам.</a>\n' +
    '	        <div>\n' +
    '	        	<small>Краткий гайд о том как не запороть персонажа.</small>\n' +
    '	        </div>\n' +
    '	    </div>\n' +
    '	    <div class="col-md-4">\n' +
    '	        	<ul class="nav nav-pills ar-rd-sz"> \n' +
    '	        		<li class="">\n' +
    '	        			<a href="javascript:void(0)" class="ar-pd-lnk-rd">Постов <span class="badge">3</span></a>\n' +
    '	        		</li> \n' +
    '	        	</ul>\n' +
    '	        	<div class="ar-fl-r">\n' +
    '	        		<small class="ar-rd-fs">Последний от: <a href="javascript:;" data-toggle="tooltip" data-placement="right" title="" data-original-title="19/12/14 at 3:27" jq-tooltip>traa <i class="mdi-social-person"></i></a></small>\n' +
    '	        	</div>\n' +
    '	        	<i class="mdi-av-play-arrow ar-ar-pos"></i>\n' +
    '	    </div>\n' +
    '\n' +
    '        \n' +
    '\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '<div class="panel panel-default ar-mr-rd">\n' +
    '    <div class="panel-body ar-pd-rd">\n' +
    '\n' +
    '	    <div class="col-md-1">\n' +
    '	    	<i class="mdi-communication-comment ar-spec-blue"></i>\n' +
    '	    	\n' +
    '	    </div>\n' +
    '	    <div class="col-md-7">\n' +
    '	    	<a href="javascript:;" class="ar-incr-we">Информация о подключении.</a>\n' +
    '	        <div>\n' +
    '	        	<small>Ссылки, гайды и прочие материалы, необходимые для подключения к шарду.</small>\n' +
    '	        </div>\n' +
    '	    </div>\n' +
    '	    <div class="col-md-4">\n' +
    '	        	<ul class="nav nav-pills ar-rd-sz"> \n' +
    '	        		<li class="">\n' +
    '	        			<a href="javascript:void(0)" class="ar-pd-lnk-rd">Постов <span class="badge">1</span></a>\n' +
    '	        		</li> \n' +
    '	        	</ul>\n' +
    '	        	<div class="ar-fl-r">\n' +
    '	        		<small class="ar-rd-fs">Последний от: <a href="javascript:;" data-toggle="tooltip" data-placement="right" title="" data-original-title="19/12/14 at 3:19" jq-tooltip>traa <i class="mdi-social-person"></i></a></small>\n' +
    '	        	</div>\n' +
    '	        	<i class="mdi-av-play-arrow ar-ar-pos"></i>\n' +
    '	    </div>\n' +
    '\n' +
    '        \n' +
    '\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="panel panel-default ar-mr-rd">\n' +
    '    <div class="panel-body ar-pd-rd">\n' +
    '\n' +
    '	    <div class="col-md-1">\n' +
    '	    	<i class="mdi-communication-comment ar-spec-blue"></i>\n' +
    '	    	<span class="label label-success">!</span>\n' +
    '	    </div>\n' +
    '	    <div class="col-md-7">\n' +
    '	    	<a href="javascript:;" class="ar-incr-we">Обсуждение нового форума.</a>\n' +
    '	        <div>\n' +
    '	        	<small>Все идеи, предложения и пожелания могут быть обсуждены здесь.</small>\n' +
    '	        </div>\n' +
    '	    </div>\n' +
    '	    <div class="col-md-4">\n' +
    '	        	<ul class="nav nav-pills ar-rd-sz"> \n' +
    '	        		<li class="">\n' +
    '	        			<a href="javascript:void(0)" class="ar-pd-lnk-rd">Постов <span class="badge">13</span></a>\n' +
    '	        		</li> \n' +
    '	        	</ul>\n' +
    '	        	<div class="ar-fl-r">\n' +
    '	        		<small class="ar-rd-fs">Последний от: <a href="javascript:;" data-toggle="tooltip" data-placement="right" title="" data-original-title="19/12/14 at 2:19" jq-tooltip>traa <i class="mdi-social-person"></i></a></small>\n' +
    '	        	</div>\n' +
    '	        	<i class="mdi-av-play-arrow ar-ar-pos"></i>\n' +
    '	    </div>\n' +
    '\n' +
    '        \n' +
    '\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '<!-- app/partials/home.html END -->');
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
    '                <nwn-class-choose-input gameclass="user.gameclass"></nwn-class-choose-input>\n' +
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
    '<!-- bars/views/header_layout.html START --><header class="navbar" id="header-navbar">\n' +
    '    <div class="container">\n' +
    '        <a href="javascript:;" id="logo" class="navbar-brand" ui-sref="home">\n' +
    '            <h4>Siala 2.0</h4>\n' +
    '        </a>\n' +
    '        \n' +
    '        <div class="clearfix">\n' +
    '        <button class="navbar-toggle" data-target=".navbar-ex1-collapse" data-toggle="collapse" type="button">\n' +
    '            <span class="sr-only">Toggle navigation</span>\n' +
    '            <span class="fa fa-bars"></span>\n' +
    '        </button>\n' +
    '        \n' +
    '        <div class="nav-no-collapse navbar-left pull-left hidden-sm hidden-xs">\n' +
    '            <ul class="nav navbar-nav pull-left">\n' +
    '                <li>\n' +
    '                    <a class="btn" id="make-small-nav">\n' +
    '                        <i class="fa fa-bars"></i>\n' +
    '                    </a>\n' +
    '                </li>\n' +
    '                <li class="dropdown hidden-xs">\n' +
    '                    <a class="btn dropdown-toggle" data-toggle="dropdown">\n' +
    '                        <i class="fa fa-bell"></i>\n' +
    '                        <span class="count">8</span>\n' +
    '                    </a>\n' +
    '                    <ul class="dropdown-menu notifications-list">\n' +
    '                        <li class="pointer">\n' +
    '                            <div class="pointer-inner">\n' +
    '                                <div class="arrow"></div>\n' +
    '                            </div>\n' +
    '                        </li>\n' +
    '                        <li class="item-header">You have 6 new notifications</li>\n' +
    '                        <li class="item">\n' +
    '                            <a href="#">\n' +
    '                                <i class="fa fa-comment"></i>\n' +
    '                                <span class="content">New comment on ‘Awesome P...</span>\n' +
    '                                <span class="time"><i class="fa fa-clock-o"></i>13 min.</span>\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                        <li class="item">\n' +
    '                            <a href="#">\n' +
    '                                <i class="fa fa-plus"></i>\n' +
    '                                <span class="content">New user registration</span>\n' +
    '                                <span class="time"><i class="fa fa-clock-o"></i>13 min.</span>\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                        <li class="item">\n' +
    '                            <a href="#">\n' +
    '                                <i class="fa fa-envelope"></i>\n' +
    '                                <span class="content">New Message from George</span>\n' +
    '                                <span class="time"><i class="fa fa-clock-o"></i>13 min.</span>\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                        <li class="item">\n' +
    '                            <a href="#">\n' +
    '                                <i class="fa fa-shopping-cart"></i>\n' +
    '                                <span class="content">New purchase</span>\n' +
    '                                <span class="time"><i class="fa fa-clock-o"></i>13 min.</span>\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                        <li class="item">\n' +
    '                            <a href="#">\n' +
    '                                <i class="fa fa-eye"></i>\n' +
    '                                <span class="content">New order</span>\n' +
    '                                <span class="time"><i class="fa fa-clock-o"></i>13 min.</span>\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                        <li class="item-footer">\n' +
    '                            <a href="#">\n' +
    '                                View all notifications\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                    </ul>\n' +
    '                </li>\n' +
    '                <li class="dropdown hidden-xs">\n' +
    '                    <a class="btn dropdown-toggle" data-toggle="dropdown">\n' +
    '                        <i class="fa fa-envelope-o"></i>\n' +
    '                        <span class="count">16</span>\n' +
    '                    </a>\n' +
    '                    <ul class="dropdown-menu notifications-list messages-list">\n' +
    '                        <li class="pointer">\n' +
    '                            <div class="pointer-inner">\n' +
    '                                <div class="arrow"></div>\n' +
    '                            </div>\n' +
    '                        </li>\n' +
    '                        <li class="item first-item">\n' +
    '                            <a href="#">\n' +
    '                                <img src="assets/images/samples/messages-photo-1.png" alt=""/>\n' +
    '                                <span class="content">\n' +
    '                                    <span class="content-headline">\n' +
    '                                        George Clooney\n' +
    '                                    </span>\n' +
    '                                    <span class="content-text">\n' +
    '                                        Look, just because I don\'t be givin\' no man a foot massage don\'t make it \n' +
    '                                        right for Marsellus to throw...\n' +
    '                                    </span>\n' +
    '                                </span>\n' +
    '                                <span class="time"><i class="fa fa-clock-o"></i>13 min.</span>\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                        <li class="item">\n' +
    '                            <a href="#">\n' +
    '                                <img src="assets/images/samples/messages-photo-2.png" alt=""/>\n' +
    '                                <span class="content">\n' +
    '                                    <span class="content-headline">\n' +
    '                                        Emma Watson\n' +
    '                                    </span>\n' +
    '                                    <span class="content-text">\n' +
    '                                        Look, just because I don\'t be givin\' no man a foot massage don\'t make it \n' +
    '                                        right for Marsellus to throw...\n' +
    '                                    </span>\n' +
    '                                </span>\n' +
    '                                <span class="time"><i class="fa fa-clock-o"></i>13 min.</span>\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                        <li class="item">\n' +
    '                            <a href="#">\n' +
    '                                <img src="assets/images/samples/messages-photo-3.png" alt=""/>\n' +
    '                                <span class="content">\n' +
    '                                    <span class="content-headline">\n' +
    '                                        Robert Downey Jr.\n' +
    '                                    </span>\n' +
    '                                    <span class="content-text">\n' +
    '                                        Look, just because I don\'t be givin\' no man a foot massage don\'t make it \n' +
    '                                        right for Marsellus to throw...\n' +
    '                                    </span>\n' +
    '                                </span>\n' +
    '                                <span class="time"><i class="fa fa-clock-o"></i>13 min.</span>\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                        <li class="item-footer">\n' +
    '                            <a href="#">\n' +
    '                                View all messages\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                    </ul>\n' +
    '                </li>\n' +
    '<!--                         <li class="dropdown hidden-xs">\n' +
    '                    <a class="btn dropdown-toggle" data-toggle="dropdown">\n' +
    '                        New Item\n' +
    '                        <i class="fa fa-caret-down"></i>\n' +
    '                    </a>\n' +
    '                    <ul class="dropdown-menu">\n' +
    '                        <li class="item">\n' +
    '                            <a href="#">\n' +
    '                                <i class="fa fa-archive"></i> \n' +
    '                                New Product\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                        <li class="item">\n' +
    '                            <a href="#">\n' +
    '                                <i class="fa fa-shopping-cart"></i> \n' +
    '                                New Order\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                        <li class="item">\n' +
    '                            <a href="#">\n' +
    '                                <i class="fa fa-sitemap"></i> \n' +
    '                                New Category\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                        <li class="item">\n' +
    '                            <a href="#">\n' +
    '                                <i class="fa fa-file-text"></i> \n' +
    '                                New Page\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                    </ul>\n' +
    '                </li> -->\n' +
    '            </ul>\n' +
    '        </div>\n' +
    '        \n' +
    '        <div class="nav-no-collapse pull-right" id="header-nav">\n' +
    '            <ul class="nav navbar-nav pull-right">\n' +
    '                <li class="mobile-search">\n' +
    '                    <a class="btn">\n' +
    '                        <i class="fa fa-search"></i>\n' +
    '                    </a>\n' +
    '                    \n' +
    '                    <div class="drowdown-search">\n' +
    '                        <form role="search">\n' +
    '                            <div class="form-group">\n' +
    '                                <input type="text" class="form-control" placeholder="{{::(\'Search\' | translate)}}">\n' +
    '                                <i class="fa fa-search nav-search-icon"></i>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                    </div>\n' +
    '                    \n' +
    '                </li>\n' +
    '                <li class="dropdown profile-dropdown">\n' +
    '                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">\n' +
    '                        <img src="http://lorempixel.com/56/56/people/3" alt=""/>\n' +
    '                        <span class="hidden-xs">truthatenvy</span> <b class="caret"></b>\n' +
    '                    </a>\n' +
    '                    <ul class="dropdown-menu">\n' +
    '                        <li><a href="user-profile.html"><i class="fa fa-user"></i>Profile</a></li>\n' +
    '                        <li><a href="#"><i class="fa fa-cog"></i>Settings</a></li>\n' +
    '                        <li><a href="#"><i class="fa fa-envelope-o"></i>Messages</a></li>\n' +
    '                        <li><a href="#"><i class="fa fa-power-off"></i>Logout</a></li>\n' +
    '                    </ul>\n' +
    '                </li>\n' +
    '                <li class="hidden-xxs">\n' +
    '                    <a class="btn">\n' +
    '                        <i class="fa fa-power-off"></i>\n' +
    '                    </a>\n' +
    '                </li>\n' +
    '            </ul>\n' +
    '        </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</header>        <header class="navbar" id="header-navbar">\n' +
    '    <div class="container">\n' +
    '        <a href="javascript:;" id="logo" class="navbar-brand" ui-sref="home">\n' +
    '            <h4>Siala 2.0</h4>\n' +
    '        </a>\n' +
    '        \n' +
    '        <div class="clearfix">\n' +
    '        <button class="navbar-toggle" data-target=".navbar-ex1-collapse" data-toggle="collapse" type="button">\n' +
    '            <span class="sr-only">Toggle navigation</span>\n' +
    '            <span class="fa fa-bars"></span>\n' +
    '        </button>\n' +
    '        \n' +
    '        <div class="nav-no-collapse navbar-left pull-left hidden-sm hidden-xs">\n' +
    '            <ul class="nav navbar-nav pull-left">\n' +
    '                <li>\n' +
    '                    <a class="btn" id="make-small-nav" ng-click="toggleNav()">\n' +
    '                        <i class="fa fa-bars"></i>\n' +
    '                    </a>\n' +
    '                </li>\n' +
    '                <li class="dropdown hidden-xs">\n' +
    '                    <a class="btn dropdown-toggle" data-toggle="dropdown">\n' +
    '                        <i class="fa fa-bell"></i>\n' +
    '                        <span class="count">8</span>\n' +
    '                    </a>\n' +
    '                    <ul class="dropdown-menu notifications-list">\n' +
    '                        <li class="pointer">\n' +
    '                            <div class="pointer-inner">\n' +
    '                                <div class="arrow"></div>\n' +
    '                            </div>\n' +
    '                        </li>\n' +
    '                        <li class="item-header">You have 6 new notifications</li>\n' +
    '                        <li class="item">\n' +
    '                            <a href="#">\n' +
    '                                <i class="fa fa-comment"></i>\n' +
    '                                <span class="content">New comment on ‘Awesome P...</span>\n' +
    '                                <span class="time"><i class="fa fa-clock-o"></i>13 min.</span>\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                        <li class="item">\n' +
    '                            <a href="#">\n' +
    '                                <i class="fa fa-plus"></i>\n' +
    '                                <span class="content">New user registration</span>\n' +
    '                                <span class="time"><i class="fa fa-clock-o"></i>13 min.</span>\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                        <li class="item">\n' +
    '                            <a href="#">\n' +
    '                                <i class="fa fa-envelope"></i>\n' +
    '                                <span class="content">New Message from George</span>\n' +
    '                                <span class="time"><i class="fa fa-clock-o"></i>13 min.</span>\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                        <li class="item">\n' +
    '                            <a href="#">\n' +
    '                                <i class="fa fa-shopping-cart"></i>\n' +
    '                                <span class="content">New purchase</span>\n' +
    '                                <span class="time"><i class="fa fa-clock-o"></i>13 min.</span>\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                        <li class="item">\n' +
    '                            <a href="#">\n' +
    '                                <i class="fa fa-eye"></i>\n' +
    '                                <span class="content">New order</span>\n' +
    '                                <span class="time"><i class="fa fa-clock-o"></i>13 min.</span>\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                        <li class="item-footer">\n' +
    '                            <a href="#">\n' +
    '                                View all notifications\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                    </ul>\n' +
    '                </li>\n' +
    '                <li class="dropdown hidden-xs">\n' +
    '                    <a class="btn dropdown-toggle" data-toggle="dropdown">\n' +
    '                        <i class="fa fa-envelope-o"></i>\n' +
    '                        <span class="count">16</span>\n' +
    '                    </a>\n' +
    '                    <ul class="dropdown-menu notifications-list messages-list">\n' +
    '                        <li class="pointer">\n' +
    '                            <div class="pointer-inner">\n' +
    '                                <div class="arrow"></div>\n' +
    '                            </div>\n' +
    '                        </li>\n' +
    '                        <li class="item first-item">\n' +
    '                            <a href="#">\n' +
    '                                <img src="assets/images/samples/messages-photo-1.png" alt=""/>\n' +
    '                                <span class="content">\n' +
    '                                    <span class="content-headline">\n' +
    '                                        George Clooney\n' +
    '                                    </span>\n' +
    '                                    <span class="content-text">\n' +
    '                                        Look, just because I don\'t be givin\' no man a foot massage don\'t make it \n' +
    '                                        right for Marsellus to throw...\n' +
    '                                    </span>\n' +
    '                                </span>\n' +
    '                                <span class="time"><i class="fa fa-clock-o"></i>13 min.</span>\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                        <li class="item">\n' +
    '                            <a href="#">\n' +
    '                                <img src="assets/images/samples/messages-photo-2.png" alt=""/>\n' +
    '                                <span class="content">\n' +
    '                                    <span class="content-headline">\n' +
    '                                        Emma Watson\n' +
    '                                    </span>\n' +
    '                                    <span class="content-text">\n' +
    '                                        Look, just because I don\'t be givin\' no man a foot massage don\'t make it \n' +
    '                                        right for Marsellus to throw...\n' +
    '                                    </span>\n' +
    '                                </span>\n' +
    '                                <span class="time"><i class="fa fa-clock-o"></i>13 min.</span>\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                        <li class="item">\n' +
    '                            <a href="#">\n' +
    '                                <img src="assets/images/samples/messages-photo-3.png" alt=""/>\n' +
    '                                <span class="content">\n' +
    '                                    <span class="content-headline">\n' +
    '                                        Robert Downey Jr.\n' +
    '                                    </span>\n' +
    '                                    <span class="content-text">\n' +
    '                                        Look, just because I don\'t be givin\' no man a foot massage don\'t make it \n' +
    '                                        right for Marsellus to throw...\n' +
    '                                    </span>\n' +
    '                                </span>\n' +
    '                                <span class="time"><i class="fa fa-clock-o"></i>13 min.</span>\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                        <li class="item-footer">\n' +
    '                            <a href="#">\n' +
    '                                View all messages\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                    </ul>\n' +
    '                </li>\n' +
    '<!--                         <li class="dropdown hidden-xs">\n' +
    '                    <a class="btn dropdown-toggle" data-toggle="dropdown">\n' +
    '                        New Item\n' +
    '                        <i class="fa fa-caret-down"></i>\n' +
    '                    </a>\n' +
    '                    <ul class="dropdown-menu">\n' +
    '                        <li class="item">\n' +
    '                            <a href="#">\n' +
    '                                <i class="fa fa-archive"></i> \n' +
    '                                New Product\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                        <li class="item">\n' +
    '                            <a href="#">\n' +
    '                                <i class="fa fa-shopping-cart"></i> \n' +
    '                                New Order\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                        <li class="item">\n' +
    '                            <a href="#">\n' +
    '                                <i class="fa fa-sitemap"></i> \n' +
    '                                New Category\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                        <li class="item">\n' +
    '                            <a href="#">\n' +
    '                                <i class="fa fa-file-text"></i> \n' +
    '                                New Page\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                    </ul>\n' +
    '                </li> -->\n' +
    '            </ul>\n' +
    '        </div>\n' +
    '        \n' +
    '        <div class="nav-no-collapse pull-right" id="header-nav">\n' +
    '            <ul class="nav navbar-nav pull-right">\n' +
    '                <li class="mobile-search" ng-click="showSearch(e)">\n' +
    '                    <a class="btn">\n' +
    '                        <i class="fa fa-search"></i>\n' +
    '                    </a>\n' +
    '                    \n' +
    '                    <div class="drowdown-search">\n' +
    '                        <form role="search">\n' +
    '                            <div class="form-group">\n' +
    '                                <input type="text" class="form-control" placeholder="{{::(\'Search\' | translate)}}">\n' +
    '                                <i class="fa fa-search nav-search-icon"></i>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                    </div>\n' +
    '                    \n' +
    '                </li>\n' +
    '                <li class="dropdown profile-dropdown">\n' +
    '                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">\n' +
    '                        <img src="http://lorempixel.com/56/56/people/3" alt=""/>\n' +
    '                        <span class="hidden-xs">truthatenvy</span> <b class="caret"></b>\n' +
    '                    </a>\n' +
    '                    <ul class="dropdown-menu">\n' +
    '                        <li><a href="user-profile.html"><i class="fa fa-user"></i>Profile</a></li>\n' +
    '                        <li><a href="#"><i class="fa fa-cog"></i>Settings</a></li>\n' +
    '                        <li><a href="#"><i class="fa fa-envelope-o"></i>Messages</a></li>\n' +
    '                        <li><a href="#"><i class="fa fa-power-off"></i>Logout</a></li>\n' +
    '                    </ul>\n' +
    '                </li>\n' +
    '                <li class="hidden-xxs">\n' +
    '                    <a class="btn">\n' +
    '                        <i class="fa fa-power-off"></i>\n' +
    '                    </a>\n' +
    '                </li>\n' +
    '            </ul>\n' +
    '        </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</header><!-- bars/views/header_layout.html END -->');
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
    '<!-- <side-forum-list isauth="isauth"></side-forum-list>  -->\n' +
    '\n' +
    '<div id="nav-col">\n' +
    '    <section id="col-left" class="col-left-nano">\n' +
    '        <div id="col-left-inner" class="col-left-nano-content">\n' +
    '            <div class="collapse navbar-collapse navbar-ex1-collapse" id="sidebar-nav"> \n' +
    '                <ul class="nav nav-pills nav-stacked">\n' +
    '                    <li class="nav-header nav-header-first hidden-sm hidden-xs" translate>\n' +
    '                        Navigation\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a href="javascript:;" ui-sref="home">\n' +
    '                            <i class="glyphicon glyphicon-bullhorn" style="margin-top: 14px;"></i>\n' +
    '                            <span translate>What\'s new</span>\n' +
    '                            <span class="label label-primary label-circle pull-right">28</span>\n' +
    '                        </a>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a href="javascript:;" ui-sref="home">\n' +
    '                            <i class="fa fa-envelope"></i>\n' +
    '                            <span translate>Messages</span>\n' +
    '                            \n' +
    '                        </a>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a href="javascript:;" ui-sref="home">\n' +
    '                            <i class="fa fa-star"></i>\n' +
    '                            <span translate>Bookmarks</span>\n' +
    '                            <span class="label label-success label-circle pull-right" style="width:18px;">4</span>\n' +
    '                            \n' +
    '                        </a>\n' +
    '                    </li>\n' +
    '                   \n' +
    '\n' +
    '                    <li class="nav-header hidden-sm hidden-xs" translate>\n' +
    '                        Forums\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a href="javascript:;" class="dropdown-toggle" dropdown-toggle>\n' +
    '                            <i class="fa fa-institution"></i>\n' +
    '                            <span translate>Knowledge base</span>\n' +
    '                            <i class="fa fa-angle-right drop-icon"></i>\n' +
    '                        </a>\n' +
    '                        <ul class="submenu">\n' +
    '                            <li>\n' +
    '                                <a href="javascript:;" class="ar-pd-lft" us-sref="home">\n' +
    '                                    \n' +
    '                                    <i class="fa fa-coffee" style="color:red;"></i>\n' +
    '                                    <span data-toggle="tooltip" data-original-title="Фиксы, правки, изменения в балансе и прочие нюансы, важные для комфортной игры.">Особенности Сиалы</span>\n' +
    '                                    <!-- <span class="label label-danger label-circle pull-right" style="width:18px;margin-top:10px;margin-right:4px;">\n' +
    '                                        <i class="fa fa-microphone"></i> -->\n' +
    '                                    </span>\n' +
    '                                </a>\n' +
    '                            </li>\n' +
    '                            <li>\n' +
    '                                <a href="javascript:;" class="ar-pd-lft" us-sref="home">\n' +
    '                                    \n' +
    '                                    <i class="fa fa-coffee"></i>\n' +
    '                                    <span data-toggle="tooltip" data-original-title="Архив новостей от летописца Гаулдура">Архив Гаулдура</span>\n' +
    '                                    \n' +
    '                                </a>\n' +
    '                            </li>\n' +
    '                        </ul>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <a href="#" class="dropdown-toggle" dropdown-toggle>\n' +
    '                            <i class="fa fa-group"></i>\n' +
    '                            <span>Гильдии</span>\n' +
    '                            <i class="fa fa-angle-right drop-icon"></i>\n' +
    '                        </a>\n' +
    '                        <ul class="submenu">\n' +
    '                           \n' +
    '                            <li>\n' +
    '                                \n' +
    '                                <a href="javascript:;" class="ar-pd-lft" us-sref="home">\n' +
    '                                    \n' +
    '                                    <i class="fa fa-coffee"></i>\n' +
    '                                    <span data-toggle="tooltip" data-original-title="Организация, охраняющая безопасность Валиостра">Королевские песочники</span>\n' +
    '                                    \n' +
    '                                </a>\n' +
    '\n' +
    '                            </li>\n' +
    '                            <li>\n' +
    '                                \n' +
    '                                <a href="javascript:;" class="ar-pd-lft" us-sref="home">\n' +
    '                                    \n' +
    '                                    <i class="fa fa-coffee"></i>\n' +
    '                                    <span data-toggle="tooltip" data-original-title="Основная ударная сила Неназываемого, следящая за порядком в Рачьем Герцогстве">Черная Инквизиция</span>\n' +
    '                                    \n' +
    '                                </a>\n' +
    '\n' +
    '                            </li>\n' +
    '                           \n' +
    '                           \n' +
    '                        </ul>\n' +
    '                    </li>\n' +
    '\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </section>\n' +
    '    <div id="nav-col-submenu"></div>\n' +
    '</div>\n' +
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
    '<!-- common/views/side_forum_list.html START --><div ng-switch="mode" class="ar-anim-vert-container " >\n' +
    '    <!-- LIST OF FORUMS -->\n' +
    '    <div ng-switch-when="normal" class="ar-vertical-collapse">\n' +
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
    '\n' +
    '    <!-- VERTICALLY COLLAPSED -->\n' +
    '    <div ng-switch-default class="ar-vertical-collapse">\n' +
    '\n' +
    '\n' +
    '        <div class="well" class="">\n' +
    '            <div class="list-group">\n' +
    '\n' +
    '                <div class="list-group-item ar-no-padding-lr">\n' +
    '                    <div class="row-action-primary ar-pd-r-10">\n' +
    '                        <i class="mdi-action-assignment-late ar-wh-rd-2"></i>\n' +
    '                    </div>\n' +
    '                    <div class="row-content">\n' +
    '                        \n' +
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
    '                    </div>\n' +
    '                    <i class="mdi-av-play-arrow ar-ar-pos"></i>\n' +
    '                </div>\n' +
    '\n' +
    '\n' +
    '                <div class="list-group-item ar-no-padding-lr">\n' +
    '                    <div class="row-action-primary ar-pd-r-10">\n' +
    '                        <i class="mdi-action-extension ar-wh-rd"></i>\n' +
    '                    </div>\n' +
    '                    <div class="row-content">\n' +
    '                     \n' +
    '\n' +
    '                    </div>\n' +
    '                    <i class="mdi-av-play-arrow ar-ar-pos"></i>\n' +
    '                </div>\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
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

(function(module) {
try {
  module = angular.module('nwn/views/class_choose_input.html');
} catch (e) {
  module = angular.module('nwn/views/class_choose_input.html', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('nwn/views/class_choose_input.html',
    '<!-- nwn/views/class_choose_input.html START --><select ng-model="gameclass" class="select form-control floating-label" placeholder="{{::(\'Choose your class\' | translate)}}" jq-dropdown id="gameclass_input">\n' +
    '                    <option value="arcanearcher">Arcane Archer</option>\n' +
    '                    <option value="assassin">Assassin</option>\n' +
    '                    <option value="barbarian">Barbarian</option>\n' +
    '                    <option value="bard">Bard</option>\n' +
    '                    <option value="blackguard">Blackguard</option>\n' +
    '                    <option value="championoftorm">Champion of Torm</option>\n' +
    '                    <option value="cleric">Cleric</option>\n' +
    '                    <option value="druid">Druid</option>\n' +
    '                    <option value="dwarverdefender">Dwarven Defender</option>\n' +
    '                    <option value="druid">Druid</option>\n' +
    '                    <option value="fighter">Fighter</option>\n' +
    '                    <option value="harperscout">Harper Scout</option>\n' +
    '                    <option value="monk">Monk</option>\n' +
    '                    <option value="paladin">Paladin</option>\n' +
    '                    <option value="palemaster">Pale Master</option>\n' +
    '                    <option value="ranger">Ranger</option>\n' +
    '                    <option value="reddragondisciple">Red Dragon Disciple</option>\n' +
    '                    <option value="rogue">Rogue</option>\n' +
    '                    <option value="shadowdancer">Shadowdancer</option>\n' +
    '                    <option value="shifter">Shifter</option>\n' +
    '                    <option value="sorcerer">Sorcerer</option>\n' +
    '                    <option value="weaponmaster">Weapon Master</option>\n' +
    '                    <option value="wizard">Wizard</option>\n' +
    '</select>\n' +
    '<!-- nwn/views/class_choose_input.html END -->');
}]);
})();
});