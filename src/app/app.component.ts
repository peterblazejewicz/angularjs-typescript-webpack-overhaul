import { IComponentOptions, IController } from 'angular';

import './app.component.scss';

export class AppController implements IController {}

export const AppComponent: IComponentOptions = {
  bindings: {},
  controller: AppController,
  templateUrl: './app.component.html',
};
