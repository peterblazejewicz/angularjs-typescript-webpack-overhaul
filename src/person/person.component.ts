import { IComponentOptions, IController, IOnChangesObject, IChangesObject } from 'angular';
import { Person } from '../common/model/person';


interface PersonComponentChanges  extends IOnChangesObject {
  [key: string]: any;
  person: IChangesObject<Person>;
}

class PersonController implements IController {

  public person: Person;

  constructor() {}

  $onChanges(changes: PersonComponentChanges) {
    console.info('$onChanges');
    if(changes.person.isFirstChange) {
      console.log('first change');
      // do other stuff with person object
    }
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
