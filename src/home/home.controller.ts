import { IScope } from 'angular';

class HomeCtrl {
    name = "AngularJS";
    constructor(public $scope: IScope) { }
}
HomeCtrl.$inject = ['$scope']

export default HomeCtrl;