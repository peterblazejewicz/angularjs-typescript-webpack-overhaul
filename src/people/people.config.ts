import { StateProvider, UrlRouterProvider } from '@uirouter/angularjs';

import { PeopleService } from './people.service';

const PeopleConfig = ($stateProvider: StateProvider, $urlRouterProvider: UrlRouterProvider) => {
  $stateProvider
    .state('people', {
      url: '/people',
      component: 'people',
      resolve: [
        {
          provide: 'people',
          useFactory: (service: PeopleService) => service.getAllPeople(),
          deps: ['PeopleService'],
        }
      ],
    });
  $urlRouterProvider.otherwise('/');
};
PeopleConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default PeopleConfig;
