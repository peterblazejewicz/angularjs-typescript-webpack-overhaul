import './styles/theme.scss';

import uirouter from '@uirouter/angularjs';
import angular, { ILocationProvider } from 'angular';

import about from './about/about.module';
import hello from './hello/hello.module';
import people from './people/people.module';
import person from './person/person.module';

// Import your app functionality

export const app = angular.module('app', [
  uirouter,
  about.name,
  hello.name,
  people.name,
  person.name,
]);

const appConfig = ($locationProvider: ILocationProvider) => {
  $locationProvider.html5Mode(true);
};
appConfig.$inject = ['$locationProvider'];

app.config(appConfig);

angular.element(() => {
  angular.bootstrap(document, [app.name], {
    strictDi: true,
  });
});
