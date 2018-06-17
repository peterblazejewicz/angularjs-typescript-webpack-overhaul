import { IComponentOptions, IController } from 'angular';

class PersonController implements IController {}

export const PersonComponent: IComponentOptions = {
  bindings: {
    person: '<',
  },
  controller: PersonController,
  templateUrl: './person.template.html',
};

export default PersonComponent;
