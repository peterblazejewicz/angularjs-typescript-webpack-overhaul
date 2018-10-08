import '../styles/theme.scss';

import uirouter from '@uirouter/angularjs';
import angular from 'angular';

import about from './about/about.module';
import appConfig from './app.config';
import hello from './hello/hello.module';
import people from './people/people.module';
import person from './person/person.module';
import { AppComponent } from './app.component';

// Import your app functionality

const app = angular
  .module('app', [uirouter, about.name, hello.name, people.name, person.name])
  .component('appComponent', AppComponent);

app.config(appConfig);

export default app;
