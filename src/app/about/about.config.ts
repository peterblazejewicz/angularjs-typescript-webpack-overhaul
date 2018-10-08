import { StateProvider, UrlRouterProvider } from '@uirouter/angularjs';

const AboutConfig = (
  $stateProvider: StateProvider,
  $urlRouterProvider: UrlRouterProvider,
) => {
  $stateProvider.state('about', {
    url: '/about',
    component: 'about',
  });
  $urlRouterProvider.otherwise('/');
};
AboutConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default AboutConfig;
