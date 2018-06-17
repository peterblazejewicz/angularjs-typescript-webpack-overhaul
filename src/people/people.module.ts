import angular from '../../node_modules/@types/angular';
import { PeopleService } from './people.service';

export const people = angular.module('people', [])
  .service('PeopleService', PeopleService);
