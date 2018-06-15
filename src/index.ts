import uirouter from '@uirouter/angularjs';
import angular from 'angular';

import home from './home/home.module';

// Import your app functionality

export const app = angular.module("app", [
  uirouter,
  home.name,
]);
angular.bootstrap(document, [app.name], {
  strictDi: true
});
