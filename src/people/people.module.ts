import angular from 'angular';

import { PeopleComponent } from './people.component';
import { PeopleService } from './people.service';

export const people = angular.module('people', [])
  .service('PeopleService', PeopleService)
  .component('peopleComponent', PeopleComponent);
