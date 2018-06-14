import { StateProvider } from "@uirouter/angularjs";

const HomeConfig = ($stateProvider: StateProvider) => {
  $stateProvider
    .state('home', {
      url: '',
      component: 'home',
      resolve: {
        name: () => 'AngularJS',
      },
    });
};
HomeConfig.$inject = ['$stateProvider'];

export default HomeConfig;
