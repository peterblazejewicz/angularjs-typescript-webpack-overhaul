import angular from 'angular';

import { app } from './app/app.module';

angular.element(() => {
  angular.bootstrap(document, [app.name], {
    strictDi: true,
  });
});
