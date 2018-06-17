import { PersonComponent } from './person.component';
import PersonConfig from './person.config';
import angular from 'angular';
import people from '../people/people.module';

const person = angular
  .module('person', [people.name])
  .component('person', PersonComponent)
  .config(PersonConfig);

export default person;
