import './app.component.scss';

import { StateObject } from '@uirouter/core';
import { IComponentOptions, IController } from 'angular';

export class AppController implements IController {
  constructor(private $state: StateObject) {}

  $onInit() {}
}

AppController.$inject = ['$state'];

export const AppComponent: IComponentOptions = {
  bindings: {},
  controller: AppController,
  templateUrl: './app.component.html',
};
