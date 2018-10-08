import { StateProvider, UrlRouterProvider } from '@uirouter/angularjs';

const HelloConfig = (
  $stateProvider: StateProvider,
  $urlRouterProvider: UrlRouterProvider,
) => {
  $stateProvider.state('hello', {
    url: '/hello',
    component: 'hello',
  });
};
HelloConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default HelloConfig;
