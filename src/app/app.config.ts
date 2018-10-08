import { ILocationProvider } from 'angular';
import { UrlRouterProvider } from '@uirouter/angularjs';

const appConfig = (
  $locationProvider: ILocationProvider,
  $urlRouterProvider: UrlRouterProvider,
) => {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
};

appConfig.$inject = ['$locationProvider', '$urlRouterProvider'];

export default appConfig;
