import angular from 'angular';
import { PeopleService } from './people.service';

export const people = angular.module('people', [])
  .service('PeopleService', PeopleService);
