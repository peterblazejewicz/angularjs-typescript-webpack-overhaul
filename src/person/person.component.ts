import { IComponentOptions, IController, IOnChangesObject } from 'angular';

class PersonController implements IController {

  constructor() {}

  $onChanges(changes: IOnChangesObject) {
    console.info('$onChanges');
  }

  $onInit() {
    console.info('$onInit');
  }

  $doCheck() {
    console.info('$doCheck');
  }

  $postLink() {
    console.info('$postLink');
  }

  $onDestroy() {
    console.info('$onDestroy');
  }

}

export const PersonComponent: IComponentOptions = {
  bindings: {
    person: '<',
  },
  controller: PersonController,
  templateUrl: './person.template.html',
};

export default PersonComponent;
