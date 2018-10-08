import angular from 'angular';

import { AboutComponent } from './about.component';
import AboutConfig from './about.config';

const about = angular
  .module('about', [])
  .component('about', AboutComponent)
  .config(AboutConfig);

export default about;
