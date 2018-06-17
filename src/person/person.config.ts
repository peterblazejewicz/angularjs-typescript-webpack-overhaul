import { StateProvider, Transition, UrlRouterProvider } from '@uirouter/angularjs';

import { PeopleService } from './../people/people.service';


const PersonConfig = ($stateProvider: StateProvider, $urlRouterProvider: UrlRouterProvider) => {
  $stateProvider
    .state('person', {
      url: '/people/{personId}',
      component: 'person',
      resolve: [
        {
          provide: 'person',
          useFactory: (service: PeopleService, $transitions$: Transition) => service.getPerson($transitions$.params().personId),
          deps: [
            'PeopleService',
            Transition,
          ]
        }
      ]
    });
  $urlRouterProvider.otherwise('/');
};
PersonConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default PersonConfig;
