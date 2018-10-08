import { ILocationProvider } from 'angular';

const appConfig = ($locationProvider: ILocationProvider) => {
  $locationProvider.html5Mode(true);
};

appConfig.$inject = ['$locationProvider'];

export default appConfig;
