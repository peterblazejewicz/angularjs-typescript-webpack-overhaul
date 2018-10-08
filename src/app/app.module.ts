import '../styles/theme.scss';

import uirouter from '@uirouter/angularjs';
import angular, { ILocationProvider } from 'angular';

import about from './about/about.module';
import hello from './hello/hello.module';
import people from './people/people.module';
import person from './person/person.module';
import appConfig from './app.config';

// Import your app functionality

const app = angular.module('app', [
  uirouter,
  about.name,
  hello.name,
  people.name,
  person.name,
]);

app.config(appConfig);

export default app;
