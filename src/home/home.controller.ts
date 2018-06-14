import { IScope, IController } from 'angular';

class HomeCtrl implements IController {
    name = "AngularJS";
    constructor(public $scope: IScope) { }

    $onInit() {
        console.log("$onInit");
    }

    $onDestroy() {
        console.log("$onDestroy");
    }
    
}
HomeCtrl.$inject = ['$scope']

export default HomeCtrl;