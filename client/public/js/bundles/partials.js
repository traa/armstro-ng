define( 'bundles/partials',[ 'angular' ], function( angular ) {(function(module) {
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
});
