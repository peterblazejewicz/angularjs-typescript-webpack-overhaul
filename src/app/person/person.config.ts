import {
  StateProvider,
  Transition,
  UrlRouterProvider,
} from '@uirouter/angularjs';
import { IPromise } from 'angular';

import { Person } from './../common/model/person';
import { PeopleService } from './../people/people.service';

const PersonConfig = (
  $stateProvider: StateProvider,
  $urlRouterProvider: UrlRouterProvider,
) => {
  $stateProvider.state('person', {
    url: '/people/{personId}',
    component: 'person',
    resolve: [
      {
        provide: 'person',
        useFactory: (
          service: PeopleService,
          $transitions$: Transition,
        ): IPromise<Person> =>
          service.getPerson($transitions$.params().personId),
        deps: ['PeopleService', Transition],
      },
    ],
  });
  $urlRouterProvider.otherwise('/');
};
PersonConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default PersonConfig;
