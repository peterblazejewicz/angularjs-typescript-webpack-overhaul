import angular from 'angular';

import HomeConfig from './home.config';
import HomeCtrl from './home.controller';

// Create the module where our functionality can attach to
const homeModule = angular.module('home', []);

// Include our UI-Router config settings

homeModule.config(HomeConfig);

// Controllers

homeModule.controller('HomeCtrl', HomeCtrl);

export default homeModule