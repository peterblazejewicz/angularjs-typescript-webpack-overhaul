import angular from 'angular';

import { HelloComponent } from './hello.component';
import HelloConfig from './hello.config';

const hello = angular.module('hello', [])
  .component('hello', HelloComponent)
  .config(HelloConfig);

export default hello;
