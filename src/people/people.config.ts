import { StateProvider, UrlRouterProvider } from '@uirouter/angularjs';
import { IPromise } from 'angular';

import { Person } from '../common/model/person';
import { PeopleService } from './people.service';

const PeopleConfig = (
  $stateProvider: StateProvider,
  $urlRouterProvider: UrlRouterProvider,
) => {
  $stateProvider.state('people', {
    url: '/people',
    component: 'people',
    resolve: [
      {
        provide: 'people',
        useFactory: (service: PeopleService): IPromise<Person[]> => service.getAllPeople(),
        deps: ['PeopleService'],
      },
    ],
  });
  $urlRouterProvider.otherwise('/');
};
PeopleConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default PeopleConfig;
