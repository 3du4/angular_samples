"use strict";
var upgrade_adapter_1 = require('./upgrade_adapter');
var app_component_1 = require('./app.component');
var i18n_providers_1 = require('./i18n-providers');
angular.module('my-app').directive('myApp', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(app_component_1.AppComponent));
// angular.module('my-app').directive('mockComponent',upgradeAdapter.downgradeNg2Component(AppComponent));
// platformBrowserDynamic().bootstrapModule(AppModule);
i18n_providers_1.getTranslationProviders().then(function (providers) {
    var options = { providers: providers };
    //hybrid bootstrap
    upgrade_adapter_1.upgradeAdapter.bootstrap(document.body, ['my-app'], options);
    // this bootstrap is used when using the Angular 2 i18n native libraries.
    // platformBrowserDynamic().bootstrapModule(AppModule, options);
});
//# sourceMappingURL=main.js.map