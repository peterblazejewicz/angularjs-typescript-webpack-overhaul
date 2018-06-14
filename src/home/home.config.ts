import { StateProvider } from "@uirouter/angularjs";

const HomeConfig = ($stateProvider: StateProvider) => {
  $stateProvider
    .state('home', {
      url: '',
      controller: 'HomeCtrl',
      controllerAs: '$ctrl',
      templateUrl: './home.template.html',
    });
};
HomeConfig.$inject = ['$stateProvider'];

export default HomeConfig;
