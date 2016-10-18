import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { upgradeAdapter } from './upgrade_adapter';
import { AppComponent } from './app.component'
import { MockComponent } from './mock.component';
import { getTranslationProviders } from './i18n-providers';





declare var angular: any;





angular.module('my-app').directive('myApp',upgradeAdapter.downgradeNg2Component(AppComponent));
// angular.module('my-app').directive('mockComponent',upgradeAdapter.downgradeNg2Component(AppComponent));





// platformBrowserDynamic().bootstrapModule(AppModule);




getTranslationProviders().then(providers => {
  const options = { providers };


  //hybrid bootstrap
  upgradeAdapter.bootstrap(document.body, ['my-app'], options);


  // this bootstrap is used when using the Angular 2 i18n native libraries.
  // platformBrowserDynamic().bootstrapModule(AppModule, options);
});