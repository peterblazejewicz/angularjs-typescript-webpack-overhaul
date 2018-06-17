import uirouter from '@uirouter/angularjs';
import angular from 'angular';

import about from './about/about.module';
import people from './people/people.module';
import hello from './hello/hello.module';
import person from './person/person.module';

import './styles/theme.scss';

// Import your app functionality

export const app = angular.module('app', [
  uirouter,
  about.name,
  hello.name,
  people.name,
  person.name,
]);

angular.element(() => {
  angular.bootstrap(document, [app.name], {
    strictDi: true,
  });
});
