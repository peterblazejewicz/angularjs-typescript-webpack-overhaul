import angular from 'angular';

import { PeopleComponent } from './people.component';
import { PeopleService } from './people.service';
import PeopleConfig from './people.config';

const people = angular.module('people', [])
  .service('PeopleService', PeopleService)
  .component('people', PeopleComponent)
  .config(PeopleConfig);

export default people;
