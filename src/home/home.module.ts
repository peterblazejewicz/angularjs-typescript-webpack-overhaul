import angular from 'angular';

import { HomeComponent } from './home.component';
import HomeConfig from './home.config';

// Create the module where our functionality can attach to
const homeModule = angular.module('home', []);

// Include our UI-Router config settings

homeModule.config(HomeConfig);

// Components

homeModule.component('home', HomeComponent);

export default homeModule
