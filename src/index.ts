import uirouter from '@uirouter/angularjs';
import angular from 'angular';

import home from './home/home.module';

import "./styles/theme.scss";


// Import your app functionality

export const app = angular.module("app", [
  uirouter,
  home.name,
]);

angular.element(() => {
  angular.bootstrap(document, [app.name], {
    strictDi: true
  })
});
