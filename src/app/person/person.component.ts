import {
  IComponentOptions,
  IController,
  IOnChangesObject,
  IChangesObject,
} from 'angular';
import { Person } from '../common/model/person';

interface PersonComponentChanges extends IOnChangesObject {
  [key: string]: any;
  person: IChangesObject<Person>;
}

class PersonController implements IController {
  public person: Person;

  constructor() {}

  $onChanges(changes: PersonComponentChanges) {
    if (changes.person.isFirstChange) {
      // do other stuff with person object
    }
  }

  $onInit() {}

  $doCheck() {}

  $postLink() {}

  $onDestroy() {}
}

export const PersonComponent: IComponentOptions = {
  bindings: {
    person: '<',
  },
  controller: PersonController,
  templateUrl: './person.template.html',
};

export default PersonComponent;
