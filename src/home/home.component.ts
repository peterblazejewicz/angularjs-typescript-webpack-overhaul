import { IComponentOptions, IController, IScope, IChangesObject, IOnChangesObject } from 'angular';


interface Changes extends IOnChangesObject {
  [key: string]: any;
  name: IChangesObject<string>;
}

class HomeController implements IController {

  name: string;

  constructor(public $scope: IScope) { }

  $onChanges(changes: Changes) {
    if(changes.name) {
      console.log(`name: ${changes.name.currentValue}`);
    }
  }

  $onInit() {
    console.log("$onInit");
  }

  $onDestroy() {
    console.log("$onDestroy");
  }

}

HomeController.$inject = ['$scope']

export const HomeComponent: IComponentOptions = {
  controller: HomeController,
  templateUrl: './home.template.html',
  bindings: {
    name: '<',
  }
}
