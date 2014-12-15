({
    appDir: "./",
    //standard.keeplines
    optimizeCss: "none",
    //turn off optimization for now
    optimize: "none",
    mainConfigFile : "js/main.js",
    baseUrl: "js",
    removeCombined: true,
    findNestedDependencies: true,
    dir: "public",
    skipDirOptimize: true,
    //ignore all with dots
    fileExclusionRegExp: "/" + [
        "^\\.",             //files that start with .
        "node_modules",     //nodejs stuff
        //"bower_components", //bower stuff
         ".css$",            //CSS files
        ".scss$",           //SCSS files (sass)
        "build\\.js",       //r.js config
        "package\\.json",   //nodejs stuff
        "gulpfile\\.js",    //gulp config
        "views",            //views for components
        "^r.js$",           //r.js module
        "JSLintNet.*",      //JSLint settings
        "mm"
    ].join('|') + "/",
    // packages: ['app'],
    modules: [
        {
            name: "main",
            exclude: [
                "bundles/lib",
                "bundles/app",
                "bundles/nglib",
                "bundles/partials",
            ]

            /**
            *   to exclude some module for debugging purposes, we can do like this
            *   (module will appear like standalone file)
            **/
            //  excludeShallow : [
            //     "views/InputView"
            // ]
        },
        {
            name: 'bundles/lib',
            exclude: [
                'bundles/nglib'
            ]
        },
        {
            name: 'bundles/app',
            exclude: [
                'bundles/nglib',
                'bundles/lib'
            ]
        },
        {
            name: 'bundles/nglib'
        },
        {
            name: 'bundles/partials',
            exclude: [
                'bundles/nglib',
                'bundles/lib'
            ]
        }

    ]
})